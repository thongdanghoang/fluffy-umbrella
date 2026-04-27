# Chinese Typing Practice

## Summary

Build a Chinese typing practice feature for the existing Next.js SPA. Users see Chinese text with pinyin annotations (
ruby) and type the corresponding pinyin to practice reading and pronunciation recognition. The MVP uses hardcoded text
with real-time visual feedback.

## Motivation

Learning Chinese requires connecting character recognition with pronunciation. Typing pinyin while seeing characters
reinforces this mapping. Existing tools like 10fastfingers are speed-oriented and English-centric — this app is
learner-focused, allowing corrections and clearly showing word boundaries as a teaching tool.

## Scope

### Included

- Single-page Chinese typing practice interface
- Hardcoded Chinese text passage with segment-level pinyin data
- Real-time character-by-character coloring (green/red/gray) as user types
- Ruby annotations (`<ruby>`/`<rt>`) for pinyin display above characters
- Backspace support — learners can correct mistakes
- Word boundary visualization with spacing gaps between word groups
- Active word background highlighting with typed pinyin anchored below
- Hidden input element for focus management (captures keystrokes globally)

### Not included (deferred)

- Countdown timer mode
- WPM / accuracy statistics
- Multiple text passages or passage selection
- English language support
- User accounts or progress tracking
- Custom text input

## User story

**As a** Chinese learner,
**I want to** practice typing pinyin while seeing Chinese characters with pinyin annotations,
**so that** I can reinforce my character-to-pronunciation mapping in an interactive way.
