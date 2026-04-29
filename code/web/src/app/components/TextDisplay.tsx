"use client";

import {ChineseWord, WordResult} from "../types";
import {
    computeSegmentColors,
    SegmentColor,
} from "../utils/coloring";

interface TextDisplayProps {
    passage: ChineseWord[];
    currentWordIndex: number;
    currentInput: string;
    completedWords: WordResult[];
    showPinyin: boolean;
}

const SEGMENT_COLOR_MAP: Record<SegmentColor, string> = {
    green: "var(--color-correct)",
    red: "var(--color-error)",
    gray: "var(--color-pending)",
    neutral: "var(--color-foreground)",
};

export default function TextDisplay({
                                        passage,
                                        currentWordIndex,
                                        currentInput,
                                        completedWords,
                                        showPinyin,
                                    }: TextDisplayProps) {
    const WORDS_PER_PAGE = 20;
    const currentPage = Math.floor(currentWordIndex / WORDS_PER_PAGE);
    const startIndex = currentPage * WORDS_PER_PAGE;
    const endIndex = startIndex + WORDS_PER_PAGE;
    const visiblePassage = passage.slice(startIndex, endIndex);

    return (
        <div className="text-display">
            {visiblePassage.map((word, relativeIndex) => {
                const wordIndex = startIndex + relativeIndex;
                const isActive = wordIndex === currentWordIndex;
                const completed = completedWords.find(
                    (w) => w.wordIndex === wordIndex
                );
                const isCompleted = completed !== undefined;

                // Compute segment colors
                let segmentColors: SegmentColor[];
                if (isActive) {
                    segmentColors = computeSegmentColors(
                        word.segments,
                        currentInput
                    );
                } else if (isCompleted) {
                    segmentColors = word.segments.map(() =>
                        completed.correct ? "green" : "red"
                    );
                } else {
                    segmentColors = word.segments.map(() => "gray");
                }

                return (
                    <span
                        key={wordIndex}
                        className={`word-group${isActive ? " word-group--active" : ""}${
                            isCompleted ? " word-group--completed" : ""
                        }`}
                    >
            {word.segments.map((segment, segIndex) => (
                <ruby
                    key={segIndex}
                    className="segment"
                    style={{
                        color: SEGMENT_COLOR_MAP[segmentColors[segIndex]],
                    }}
                >
                    {segment.chars}
                    <rt
                        style={{
                            color: SEGMENT_COLOR_MAP['neutral'],
                        }}
                    >
                        {showPinyin ? segment.display : ""}
                    </rt>
                </ruby>
            ))}

                        {/* Typed pinyin anchored below the active word */}
                        {isActive && (
                            <span className="typed-pinyin-anchor">
                <span className="typed-pinyin">
                  {currentInput || "\u00A0"}
                </span>
              </span>
                        )}
          </span>
                );
            })}
        </div>
    );
}
