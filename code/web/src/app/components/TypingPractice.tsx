"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Passage, WordResult } from "../types";
import TextDisplay from "./TextDisplay";

interface TypingPracticeProps {
  passage: Passage;
}

export default function TypingPractice({ passage }: TypingPracticeProps) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentInput, setCurrentInput] = useState("");
  const [completedWords, setCompletedWords] = useState<WordResult[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  const isComplete = currentWordIndex >= passage.length;

  // Auto-focus on mount
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  // Refocus input when clicking the practice area
  const handleContainerClick = useCallback(() => {
    if (!isComplete) {
      inputRef.current?.focus();
    }
  }, [isComplete]);

  // Handle input changes
  const handleInput = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (isComplete) return;

      const value = e.target.value;

      // Check if space was typed (submit word)
      if (value.endsWith(" ")) {
        const trimmed = value.trimEnd();
        const currentWord = passage[currentWordIndex];
        const expected = currentWord.segments
          .map((s) => s.pinyin)
          .join("");
        const correct = trimmed === expected;

        setCompletedWords((prev) => [
          ...prev,
          { wordIndex: currentWordIndex, correct },
        ]);
        setCurrentWordIndex((prev) => prev + 1);
        setCurrentInput("");

        // Clear the input field
        if (inputRef.current) {
          inputRef.current.value = "";
        }
        return;
      }

      // Filter to only allow Latin letters (no IME, no special chars)
      const filtered = value.replace(/[^a-zA-Z]/g, "").toLowerCase();
      setCurrentInput(filtered);

      // Sync the input element with filtered value
      if (inputRef.current && inputRef.current.value !== filtered) {
        inputRef.current.value = filtered;
      }
    },
    [isComplete, passage, currentWordIndex]
  );

  // Handle keydown for special keys
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (isComplete) return;

      if (e.key === " ") {
        e.preventDefault();
        const currentWord = passage[currentWordIndex];
        const expected = currentWord.segments
          .map((s) => s.pinyin)
          .join("");
        const correct = currentInput === expected;

        setCompletedWords((prev) => [
          ...prev,
          { wordIndex: currentWordIndex, correct },
        ]);
        setCurrentWordIndex((prev) => prev + 1);
        setCurrentInput("");

        if (inputRef.current) {
          inputRef.current.value = "";
        }
      }
    },
    [isComplete, passage, currentWordIndex, currentInput]
  );

  return (
    <div className="typing-practice" onClick={handleContainerClick}>
      <div className="typing-practice__header">
        <h1 className="typing-practice__title">中文打字练习</h1>
        <p className="typing-practice__subtitle">
          Type the pinyin for each word and press space to advance
        </p>
      </div>

      <div className="typing-practice__content">
        <TextDisplay
          passage={passage}
          currentWordIndex={currentWordIndex}
          currentInput={currentInput}
          completedWords={completedWords}
        />

        {/* Hidden input for keystroke capture */}
        <input
          ref={inputRef}
          type="text"
          className="typing-practice__hidden-input"
          autoFocus
          disabled={isComplete}
          onChange={handleInput}
          onKeyDown={handleKeyDown}
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="off"
          spellCheck={false}
          aria-label="Type pinyin here"
        />
      </div>

      {isComplete && (
        <div className="typing-practice__complete">
          <div className="typing-practice__complete-icon">🎉</div>
          <h2 className="typing-practice__complete-title">
            Practice Complete!
          </h2>
          <p className="typing-practice__complete-stats">
            {completedWords.filter((w) => w.correct).length} /{" "}
            {completedWords.length} words correct
          </p>
        </div>
      )}
    </div>
  );
}
