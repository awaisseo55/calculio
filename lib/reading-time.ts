export function calculateReadingTime(wordCount: number, wpm = 250): number {
  return Math.max(1, Math.round(wordCount / wpm));
}
