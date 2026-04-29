"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Passage, WordResult } from "../types";
import TextDisplay from "./TextDisplay";

interface TypingPracticeProps {
    passage: Passage;
}

const FONT_OPTIONS = [
    { id: "F1", name: "lxgw-wenkai-tc-regular", family: '"LXGW WenKai TC", cursive' },
    { id: "F2", name: "noto-sans-sc", family: '"Noto Sans SC", sans-serif' },
    { id: "F3", name: "zhi-mang-xing-regular", family: '"Zhi Mang Xing", cursive' },
    { id: "F4", name: "ma-shan-zheng-regular", family: '"Ma Shan Zheng", cursive' },
];

export default function TypingPractice({ passage }: TypingPracticeProps) {
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [currentFont, setCurrentFont] = useState(FONT_OPTIONS[0]);
    const [currentInput, setCurrentInput] = useState("");
    const [completedWords, setCompletedWords] = useState<WordResult[]>([]);
    const [isFocused, setIsFocused] = useState(true);
    const [showPinyin, setShowPinyin] = useState(true);
    const [pinyinHideRatio, setPinyinHideRatio] = useState(100);
    const [isShuffled, setIsShuffled] = useState(false);
    // Bumped each time shuffle is toggled on, to get a fresh random order
    const [shuffleSeed, setShuffleSeed] = useState(0);
    const inputRef = useRef<HTMLInputElement>(null);

    // Derived passage: original order or a stable shuffle
    const activePassage = useMemo(() => {
        if (!isShuffled) return passage;
        // Fisher-Yates on a shallow copy; shuffleSeed is in the dep array
        // so a new seed means a new shuffle
        void shuffleSeed; // explicit dep
        const arr = [...passage];
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        return arr;
    }, [passage, isShuffled, shuffleSeed]);

    // Stable random permutation of word indices — recomputed only when the
    // active passage changes, NOT on every slider tick.
    const pinyinHiddenOrder = useMemo(() => {
        const indices = Array.from({ length: activePassage.length }, (_, i) => i);
        for (let i = indices.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [indices[i], indices[j]] = [indices[j], indices[i]];
        }
        return indices;
    }, [activePassage]);

    // Set of word indices whose pinyin is hidden. Moving the slider just
    // changes how far into the pre-shuffled order we go — no re-randomisation.
    const hiddenPinyinIndices = useMemo(() => {
        if (showPinyin) return new Set<number>();
        const hideCount = Math.round(activePassage.length * pinyinHideRatio / 100);
        return new Set<number>(pinyinHiddenOrder.slice(0, hideCount));
    }, [showPinyin, pinyinHiddenOrder, pinyinHideRatio, activePassage.length]);

    // Reset progress whenever the active passage changes
    useEffect(() => {
        setCurrentWordIndex(0);
        setCurrentInput("");
        setCompletedWords([]);
        if (inputRef.current) inputRef.current.value = "";
    }, [activePassage]);

    const isComplete = currentWordIndex >= activePassage.length;

    // Handle window blur/focus for tab switching
    useEffect(() => {
        const handleWindowBlur = () => setIsFocused(false);
        const handleWindowFocus = () => {
            if (document.activeElement === inputRef.current) {
                setIsFocused(true);
            }
        };

        window.addEventListener("blur", handleWindowBlur);
        window.addEventListener("focus", handleWindowFocus);

        return () => {
            window.removeEventListener("blur", handleWindowBlur);
            window.removeEventListener("focus", handleWindowFocus);
        };
    }, []);

    // Auto-focus on mount
    useEffect(() => {
        inputRef.current?.focus();
    }, []);

    // Alt/Option+P — toggle pinyin (uses e.code so Option+P on macOS works
    // even though the key value is "π" rather than "p")
    useEffect(() => {
        const handleShortcut = (e: KeyboardEvent) => {
            if (e.altKey && e.code === "KeyP") {
                e.preventDefault();
                setShowPinyin((prev) => !prev);
            }
        };
        window.addEventListener("keydown", handleShortcut);
        return () => window.removeEventListener("keydown", handleShortcut);
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
                const currentWord = activePassage[currentWordIndex];
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
        [isComplete, activePassage, currentWordIndex]
    );

    // Handle keydown for special keys
    const handleKeyDown = useCallback(
        (e: React.KeyboardEvent<HTMLInputElement>) => {
            if (isComplete) return;

            if (e.key === " ") {
                e.preventDefault();
                const currentWord = activePassage[currentWordIndex];
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
        [isComplete, activePassage, currentWordIndex, currentInput]
    );

    return (
        <div className="typing-practice" style={{ "--font-chinese": currentFont.family } as React.CSSProperties}>
            <div className="typing-practice__header">
                <h1 className="typing-practice__title">中文打字练习</h1>
                <p className="typing-practice__subtitle">
                    Type the pinyin for each word and press space to advance
                </p>
            </div>

            {/* Actions toolbar */}
            <div className="typing-practice__actions">
                {/* Font selection group */}
                <div className="typing-practice__btn-group">
                    {FONT_OPTIONS.map((font) => (
                        <button
                            key={font.id}
                            className={`typing-practice__action-btn${currentFont.id === font.id ? " typing-practice__action-btn--active" : ""}`}
                            onClick={() => setCurrentFont(font)}
                            aria-label={`Select font ${font.name}`}
                            title={font.name}
                            type="button"
                        >
                            {font.id}
                        </button>
                    ))}
                </div>

                {/* Shuffle toggle */}
                <button
                    id="toggle-shuffle-btn"
                    className={`typing-practice__action-btn${isShuffled ? " typing-practice__action-btn--active" : ""}`}
                    onClick={() => {
                        setIsShuffled((prev) => {
                            if (!prev) setShuffleSeed((s) => s + 1); // new shuffle each activation
                            return !prev;
                        });
                    }}
                    aria-label={isShuffled ? "Disable shuffle" : "Shuffle words"}
                    title={isShuffled ? "Disable shuffle" : "Shuffle words"}
                    type="button"
                >
                    {/* Shuffle icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="none"
                        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                        aria-hidden="true">
                        <polyline points="16 3 21 3 21 8" />
                        <line x1="4" y1="20" x2="21" y2="3" />
                        <polyline points="21 16 21 21 16 21" />
                        <line x1="15" y1="15" x2="21" y2="21" />
                    </svg>
                </button>

                {/* Pinyin visibility toggle + ratio slider */}
                <div className="typing-practice__pinyin-control">
                    <button
                        id="toggle-pinyin-btn"
                        className={`typing-practice__action-btn${showPinyin ? " typing-practice__action-btn--active" : ""}`}
                        onClick={() => setShowPinyin((prev) => !prev)}
                        aria-label={showPinyin ? "Hide Pinyin (Alt+P)" : "Show Pinyin (Alt+P)"}
                        title={showPinyin ? "Hide Pinyin (Alt+P)" : "Show Pinyin (Alt+P)"}
                        type="button"
                    >
                        {/* Pinyin / ruby annotation icon */}
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="none"
                            stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                            aria-hidden="true">
                            <path d="M4 7h16" />
                            <path d="M4 12h10" />
                            <path d="M4 17h7" />
                            <rect x="15" y="11" width="6" height="8" rx="1" />
                            <path d="M17 11V9a1 1 0 0 1 2 0v2" />
                        </svg>
                    </button>

                    <input
                        id="pinyin-ratio-slider"
                        type="range"
                        min={0}
                        max={100}
                        step={10}
                        value={pinyinHideRatio}
                        disabled={showPinyin}
                        onChange={(e) => setPinyinHideRatio(Number(e.target.value))}
                        aria-label={`Hide ${pinyinHideRatio}% of pinyin`}
                        title={`Hide ${pinyinHideRatio}% of pinyin`}
                        className="typing-practice__ratio-slider"
                        style={{ "--ratio": pinyinHideRatio } as React.CSSProperties}
                    />
                </div>
            </div>
            <div className="typing-practice__divider" />

            <div className="typing-practice__content" onClick={handleContainerClick}>
                <div
                    className={`typing-practice__text-wrapper ${!isFocused && !isComplete ? "typing-practice__text-wrapper--blurred" : ""}`}>
                    <TextDisplay
                        passage={activePassage}
                        currentWordIndex={currentWordIndex}
                        currentInput={currentInput}
                        completedWords={completedWords}
                        hiddenPinyinIndices={hiddenPinyinIndices}
                    />
                </div>

                {!isFocused && !isComplete && (
                    <div className="typing-practice__focus-overlay">
                        <span className="typing-practice__focus-text">
                            Click here to continue (or press TAB)
                        </span>
                    </div>
                )}

                {/* Hidden input for keystroke capture */}
                <input
                    ref={inputRef}
                    type="text"
                    className="typing-practice__hidden-input"
                    autoFocus
                    disabled={isComplete}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
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
