# Tasks: Lesson Management

## 1. Data Models & Storage Layer
- Update `src/app/types.ts` to include the `Lesson` interface.
- Create `src/app/utils/lessonStorage.ts` to handle `localStorage` CRUD operations for lessons.
- Implement the `defaultPassage` wrapper inside the storage layer to ensure it always returns alongside user lessons.
- Implement mistake segment deduplication logic within the storage service.

## 2. App Router Restructuring
- Move the existing `TypingPractice` rendering from `src/app/page.tsx` to a new dynamic route: `src/app/practice/[id]/page.tsx`.
- Refactor `src/app/practice/[id]/page.tsx` to read the lesson ID from params, load it via `LessonService`, and pass the passage to `TypingPractice`. (Handle 'not found' states).
- Create empty pages for `src/app/lessons/create/page.tsx` and `src/app/lessons/[id]/edit/page.tsx`.
- Rewrite `src/app/page.tsx` to act as the Lesson Library.

## 3. Lesson Library UI (Home)
- Build the Lesson Library interface in `src/app/page.tsx`.
- Create a grid/list of lesson cards displaying name, word count, type (built-in, custom, mistakes).
- Add "Practice", "Edit", and "Delete" buttons to the cards where appropriate.
- Add a prominent "Create New Lesson" button linking to `/lessons/create`.

## 4. Create/Edit Lesson UI
- Implement a shared form component for `create` and `edit` routes.
- Add inputs for Lesson Name and Visibility.
- Add a raw text area for JSON input and a File Upload button to parse local `.json` files.
- Add live validation: if the JSON is valid `Passage` data, render `TextDisplay` below it as a read-only preview. If invalid, show error messages.
- Add a collapsible "AI Prompt" helper containing the copyable template for generating lessons.
- Implement save functionality to persist the lesson and redirect to home.

## 5. Mistake Tracking Integration
- Update `TypingPractice.tsx` completion state to compute mistaken words and their segments.
- Render a new post-practice modal/action area if mistakes exist.
- Prompt the user to save mistakes: buttons for "Save to [Current Lesson] Mistakes", "Save to Global Mistakes", and "Skip".
- Wire the buttons to call the `LessonService` upsert/append logic and provide UI feedback on success.
- Add a "Back to Library" button on the completion screen.
