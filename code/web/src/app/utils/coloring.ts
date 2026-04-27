/**
 * Segment coloring states — derived purely from currentInput on each render.
 * No mutable error state needed; backspace works naturally by re-evaluating.
 */
export type SegmentColor = "green" | "red" | "gray" | "neutral";

/**
 * Compute the color for each segment of a word based on the current input.
 *
 * The expected string is segments.map(s => s.pinyin).join("").
 * We map currentInput character-by-character against segment boundaries:
 * - green: segment fully typed, all chars match
 * - red: mismatch at any position within the segment
 * - gray: not yet reached by typed chars
 * - neutral: partially typed, all typed chars match so far (in-progress)
 */
export function computeSegmentColors(
  segments: { pinyin: string }[],
  currentInput: string
): SegmentColor[] {
  const expected = segments.map((s) => s.pinyin).join("");

  // Compute segment boundaries: [0, len0, len0+len1, ...]
  const boundaries: number[] = [0];
  for (const seg of segments) {
    boundaries.push(boundaries[boundaries.length - 1] + seg.pinyin.length);
  }

  return segments.map((_, i) => {
    const segStart = boundaries[i];
    const segEnd = boundaries[i + 1];
    const typedLength = currentInput.length;

    if (typedLength <= segStart) {
      // Haven't reached this segment yet
      return "gray";
    }

    // How much of this segment has been typed
    const typedInSeg = Math.min(typedLength, segEnd) - segStart;
    const typedPortion = currentInput.slice(segStart, segStart + typedInSeg);
    const expectedPortion = expected.slice(segStart, segStart + typedInSeg);

    if (typedPortion !== expectedPortion) {
      // Mismatch at any position → red
      return "red";
    }

    if (typedLength >= segEnd) {
      // Fully typed and all chars match → green
      return "green";
    }

    // Partially typed, all typed chars match → in-progress (neutral)
    return "neutral";
  });
}
