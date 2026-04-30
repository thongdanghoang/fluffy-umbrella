# Design: Lesson Management

## Architecture

We will implement a client-side only lesson management system using Next.js App Router for navigation and `localStorage` for persistence.

### Data Model

Extend the current types in `src/app/types.ts`:

```typescript
export interface Lesson {
  id: string;                 // UUID
  name: string;
  authorId: string;           // "local-user" (for future backend compat)
  visibility: "public" | "private"; // UX only for now
  passage: Passage;           // ChineseWord[]
  createdAt: string;          // ISO timestamp
  updatedAt: string;
  isMistakesLesson: boolean;
  parentLessonId?: string;    // If it's a per-lesson mistakes list
}
```

### Storage Layer

A `LessonService` utility (e.g., `src/app/utils/lessonStorage.ts`) will manage `localStorage`:
- `getLessons()`: Returns all lessons (including the injected `defaultPassage` as a built-in unmodifiable lesson).
- `getLesson(id)`: Returns a specific lesson.
- `saveLesson(lesson)`: Upserts a lesson.
- `deleteLesson(id)`: Removes a lesson (if not built-in).
- `appendMistakes(lessonId, segments, targetMistakesLessonId?)`: Handles the deduplication and upsert of mistake segments.

### Routing (Next.js App Router)

- `page.tsx` (Home `/`): The Lesson Library. Shows a list/grid of lesson cards. Includes a "Create Lesson" button.
- `lessons/create/page.tsx`: A form to input lesson name, visibility, and paste/upload JSON. Includes the "AI Generate" prompt template and a preview of the parsed passage.
- `lessons/[id]/edit/page.tsx`: Same as create, but populated with existing lesson data.
- `practice/[id]/page.tsx`: The typing practice screen. Loads the lesson by `id` from `LessonService`.

### Mistake Tracking & Deduplication

When a user completes a practice session on `/practice/[id]`:
1. The `TypingPractice` component collects all segments from `WordResult` where `correct === false`.
2. A prompt modal/overlay asks the user if they want to save mistakes: `[This Lesson's Mistakes]`, `[Global Mistakes]`, `[Skip]`.
3. If selected, the `LessonService` processes the new segments:
   - It fetches the target mistakes lesson (creates one if it doesn't exist).
   - Deduplication key: `${segment.chars}::${segment.pinyin}`.
   - It filters the incoming segments to only include those whose key is not already present in the target lesson's passage.
   - Appends the new segments (as individual `ChineseWord` objects of 1 segment, or grouped depending on structure, but treating each as a word is simplest) to the mistakes lesson.

### UX Details

- **Create/Edit Lesson**:
  - Provide a text area for raw JSON.
  - Provide a "File Upload" button that reads a `.json` file and fills the text area.
  - Validate JSON on change. If valid, render the `TextDisplay` component in read-only mode to preview the lesson.
  - An expandable "AI Prompt" helper section with a copyable prompt for ChatGPT/Claude.
- **Home Page**:
  - Clean card-based layout.
  - Badge for "Mistakes" lessons.
  - Built-in default lesson is pinned.

## Migration Strategy

The existing `page.tsx` which renders `<TypingPractice passage={defaultPassage} />` will be replaced by the Home route. The `/practice/[id]` route will take over the `TypingPractice` rendering responsibilities.
