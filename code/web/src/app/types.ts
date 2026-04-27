/**
 * A segment is the atomic unit for rendering (<ruby> group), coloring (green/red/gray),
 * and matching. pinyin.length does not need to equal chars.length — handles Erhua naturally.
 */
export interface Segment {
  chars: string; // Chinese characters for this segment, e.g. "哪儿" or "你"
  pinyin: string; // Tone-free pinyin for matching, e.g. "nar" or "ni"
  display: string; // Pinyin with tone marks for ruby display, e.g. "nǎr" or "nǐ"
}

/**
 * A word is a group of segments that form a logical unit.
 * Word boundaries are visualized with spacing gaps.
 */
export interface ChineseWord {
  segments: Segment[];
}

/**
 * A passage is a sequence of words that form the practice text.
 */
export type Passage = ChineseWord[];

/**
 * Result of a completed word — tracks whether the user typed it correctly.
 */
export interface WordResult {
  wordIndex: number;
  correct: boolean;
}

/**
 * The full typing state managed by the TypingPractice container.
 */
export interface TypingState {
  passage: Passage;
  currentWordIndex: number;
  currentInput: string;
  completedWords: WordResult[];
}
