# Proposal: Add Lesson Management

## What
Introduce a lesson management system to the Chinese typing tutor. Users will be able to upload custom JSON lessons containing Chinese vocabulary/passages, manage their own lessons (create, edit, delete), and practice typing them. Additionally, the system will automatically collect mistake segments during practice and allow users to save them to a dedicated mistakes lesson for focused practice.

## Why
Currently, the application relies on a single hardcoded passage (`defaultPassage`). To provide a more robust and personalized learning experience, users need the ability to practice their own vocabulary lists and focus on their weak points. Storing lessons locally sets the foundation for a future backend-driven, multi-user lesson sharing platform.

## Use Cases
- **Upload Custom Lesson**: A user pastes a JSON array of words (or uploads a JSON file), previews the parsed lesson, and saves it with a name.
- **AI-Assisted Generation**: A user copies a built-in prompt template, uses an AI to generate a lesson JSON, and uploads it.
- **Browse & Select**: A user navigates to the home page, sees their saved lessons (along with the built-in default), and clicks "Practice" on one.
- **Mistake Tracking**: After finishing a practice session with 3 incorrectly typed words, the user is prompted to save those mistakes. They choose "Save to Global Mistakes". The system deduplicates the segments and updates the global mistakes lesson.
- **Manage Lessons**: A user edits a typo in their lesson's JSON or deletes an old lesson they no longer need.

## Non-goals
- **Multi-user / Backend sync**: All data will be stored in `localStorage`. Features like "public vs private" will be modeled in the schema but will functionally do nothing until a backend is introduced.
- **Segment-level Mistake Granularity**: If a user mistypes a word, all segments of that word will be dumped into the mistakes lesson. We will not track exactly which segment was wrong.
