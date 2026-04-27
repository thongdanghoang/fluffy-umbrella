# Design: Chinese Typing Practice

## Architecture

Single-page React component tree within the existing Next.js app. No backend needed — all data is hardcoded and all
logic is client-side.

```
page.tsx (app route)
└── TypingPractice (main container, "use client")
    ├── TextDisplay (renders word groups with ruby annotations)
    │   ├── WordGroup[] (one per ChineseWord — spacing between groups)
    │   │   └── Segment[] (one <ruby> per segment — coloring unit)
    │   └── ActiveWordIndicator (background highlight + typed pinyin below)
    └── HiddenInput (invisible <input> for focus capture)
```

## Data Model

```typescript
interface Segment {
    chars: string;    // Chinese characters for this segment, e.g. "哪儿" or "你"
    pinyin: string;   // Tone-free pinyin for matching, e.g. "nar" or "ni"
    display: string;  // Pinyin with tone marks for ruby display, e.g. "nǎr" or "nǐ"
}

interface ChineseWord {
    segments: Segment[];
}

type Passage = ChineseWord[];
```

**Key invariant**: Each `Segment` is the atomic unit for rendering (`<ruby>` group), coloring (green/red/gray), and
matching. `pinyin.length` does not need to equal `chars.length` — handles Erhua naturally.

## Typing Mechanics

### Input flow

1. Page loads → hidden `<input>` auto-focused
2. User types Latin characters → captured by hidden input
3. Each keystroke compared against expected pinyin for current word
4. Space key → submit current word, advance to next
5. Backspace → delete last typed character (learner-friendly)

### Matching logic

For the active word, the expected string is `word.segments.map(s => s.pinyin).join("")`.

Real-time comparison maps typed character count to segment boundaries:

```
segments: [{pinyin: "ni"}, {pinyin: "hao"}]
expected: "nihao" (length 5)
boundaries: [0, 2, 5]  // segment 0: chars 0-1, segment 1: chars 2-4

User typed "nih" (3 chars):
  - segment 0 (0-1): fully typed, "ni" === "ni" → GREEN
  - segment 1 (2-4): partially typed, "h" matches "h" → IN-PROGRESS (neutral)

User typed "nix" (3 chars):
  - segment 0 (0-1): fully typed, "ni" === "ni" → GREEN
  - segment 1 (2-4): partially typed, "x" ≠ "h" → RED
```

### Segment coloring states

**Coloring is a pure function of `currentInput`** — there is no separate error state stored. Each render recomputes
coloring from scratch by comparing `currentInput` against the expected pinyin string. Backspace naturally "resets"
coloring because the shortened input is re-evaluated, not because any state is cleared.

| State                 | Condition                              | Visual                          |
|-----------------------|----------------------------------------|---------------------------------|
| Pending               | Not yet reached by typed chars         | Gray/dimmed text                |
| In-progress (correct) | Partially typed, matches so far        | Default text (no special color) |
| Complete (correct)    | Fully typed, all chars match           | Green                           |
| Error                 | Typed character doesn't match expected | Red                             |

### Word completion

When user presses space:

- Compare `currentInput` against `expected` (= `segments.map(s => s.pinyin).join("")`)
- Word is **correct** only if `currentInput === expected` (exact full match)
- Word is **incorrect** if `currentInput !== expected` — this includes partial input
  (e.g., typing `ni` + space when expected is `nihao`)
- Advance `currentWordIndex`
- Clear typed input
- Active highlight moves to next word

### End of passage

When `currentWordIndex >= passage.length` (all words completed):

- Hidden input is disabled (stop capturing keystrokes)
- Display a completion state (for MVP: simple "Practice complete" message)
- Stats display is deferred to a future change

## Visual Design

### Layout

- Full text displayed as word groups with **subtle spacing gaps** (e.g., `margin-right: 1.5rem`) between words
- Each word rendered as inline-flex group of `<ruby>` elements
- **Active word**: background highlight (subtle background color, slight padding, rounded corners)
- **Typed pinyin**: rendered below the active word's highlight box, anchored to it
- **Completed words**: green tint (correct) or red tint (incorrect), slightly dimmed
- **Upcoming words**: neutral/gray, full opacity

### Ruby rendering

```html
<!-- Normal segment -->
<ruby>你
    <rt>nǐ</rt>
</ruby>

<!-- Erhua segment — chars span multiple characters -->
<ruby>哪儿
    <rt>nǎr</rt>
</ruby>
```

### Focus management

- Hidden `<input>` element: `opacity: 0; position: absolute; pointer-events: none`
- Auto-focus on mount
- Click anywhere on the practice area → refocus the hidden input
- This ensures keystrokes are always captured without a visible input box
- When passage is complete (all words typed), disable the hidden input

## State Management

React state within the `TypingPractice` component (no external state library needed for MVP):

```typescript
interface TypingState {
    passage: Passage;              // The full text data
    currentWordIndex: number;      // Which word is active
    currentInput: string;          // What user has typed for current word
    completedWords: WordResult[];  // Results for completed words
}

interface WordResult {
    wordIndex: number;
    correct: boolean;
}
```

## Decisions

- **No IME handling**: Users type raw Latin keystrokes (pinyin without tones). No composition events to manage.
- **Segment-based architecture**: The `Segment` is the single unit of truth for rendering, matching, and coloring.
  Eliminates implicit character-to-pinyin mapping.
- **Coloring as pure function**: Segment colors are derived entirely from `currentInput` on each render. No mutable
  error flags — backspace works for free because shortened input simply re-evaluates.
- **Backspace allowed**: Learner-focused UX — mistakes should be correctable, not punished.
- **Background highlight over underline**: For active word indication. Underlines conflict visually with ruby annotation
  lines.
- **Typed pinyin anchored below active word**: Gives users visual feedback of what they're typing without a separate
  input box.
- **End-of-passage**: Input disabled after last word. Completion message shown. Stats deferred.
