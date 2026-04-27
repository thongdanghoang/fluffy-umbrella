# Tasks: Chinese Typing Practice

- [x] Task 1: Data model and hardcoded passage
- [x] Task 2: TextDisplay component with ruby rendering
- [x] Task 3: TypingPractice container with state management and typed pinyin display
- [x] Task 4: Real-time segment coloring
- [x] Task 5: Active word highlight and transition polish
- [x] Task 6: Page integration, end-of-passage, and polish

---

## Task 1: Data model and hardcoded passage

**Files**: `src/app/types.ts`, `src/app/data/passages.ts`

Define the TypeScript interfaces (`Segment`, `ChineseWord`, `Passage`) and create a hardcoded Chinese passage with
segment-level pinyin data. Include varied content: simple words (你好), multi-character words (世界), and at least one
Erhua case (哪儿) to validate the flexible segment model.

**Done when**: Types compile, passage data is importable, includes 15-20 words covering normal and Erhua cases.

---

## Task 2: TextDisplay component with ruby rendering

**Files**: `src/app/components/TextDisplay.tsx`, related CSS

Build the `TextDisplay` component that renders the full passage as word groups with `<ruby>`/`<rt>` annotations. Each
word is an inline-flex group of segments. Word groups have spacing gaps between them (`margin-right`). No interactivity
yet — just static rendering of the passage.

**Depends on**: Task 1

**Done when**: Page renders Chinese text with pinyin above each segment, word boundaries are visually clear via spacing,
Erhua segments render correctly with ruby spanning the full character group.

---

## Task 3: TypingPractice container with state management and typed pinyin display

**Files**: `src/app/components/TypingPractice.tsx`, related CSS

Build the main container component with:

- `TypingState` (currentWordIndex, currentInput, completedWords)
- Hidden `<input>` for focus management (auto-focus on mount, refocus on click)
- Keystroke handling: append to `currentInput` on letter keys, delete on backspace, submit word on space
- Word completion: `currentInput === expected` → correct, otherwise incorrect (including partial input)
- Render the user's typed pinyin below the active word, anchored to it (needed for visual feedback when testing)
- Pass state down to `TextDisplay` for rendering

**Depends on**: Task 1, Task 2

**Done when**: Keystrokes are captured globally, state updates correctly on type/backspace/space, word index advances on
space, and typed pinyin is visible below the active word.

---

## Task 4: Real-time segment coloring

**Files**: Update `TextDisplay.tsx`, add matching utility (e.g., `src/app/utils/coloring.ts`)

Implement the segment coloring logic as a **pure function of `currentInput`** — no mutable error state:

- Compute segment boundaries from `word.segments.map(s => s.pinyin)`
- Map `currentInput` character-by-character against the expected string
- Derive coloring per segment: green (complete match), red (mismatch at any position), gray (pending),
  neutral (in-progress, all typed chars match so far)
- Completed words show green (correct) or red (incorrect), slightly dimmed
- Upcoming words are gray/dimmed

**Depends on**: Task 3

**Done when**: Typing produces real-time color feedback per segment. Correct input turns segments green, wrong input
turns them red. Backspace works naturally (shortened input re-evaluates — no special reset logic).

---

## Task 5: Active word highlight and transition polish

**Files**: Update `TextDisplay.tsx` and `TypingPractice.tsx`, related CSS

Polish the active word visual treatment (typed pinyin display already exists from Task 3):

- Background highlight on the current word group (subtle background color, padding, rounded corners)
- Smooth CSS transition of highlight as user advances between words
- Visual refinement of typed pinyin positioning and styling

**Depends on**: Task 4

**Done when**: Active word is visually distinct with background highlight, transitions feel smooth on word advancement.

---

## Task 6: Page integration, end-of-passage, and polish

**Files**: `src/app/page.tsx`, `src/app/globals.css`

Replace the default Next.js page with the `TypingPractice` component. Handle end-of-passage and apply styling:

- End-of-passage: when all words are completed, disable hidden input, show "Practice complete" message
- Dark theme with premium aesthetics
- Typography (system fonts for UI, appropriate sizing for Chinese characters)
- Centered layout with comfortable reading width
- Responsive design basics
- Page title and minimal header/instructions

**Depends on**: Task 5

**Done when**: App loads at `/`, shows the typing practice interface with polished visuals, handles end-of-passage
gracefully, is fully functional end-to-end.
