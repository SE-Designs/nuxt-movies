export function getRatingClass(score: number): string | undefined {
  if (score >= 0 && score < 4) {
    return "red-tag";
  } else if (score >= 4 && score < 7) {
    return "purple-tag";
  } else if (score >= 7 && score <= 10) {
    return "green-tag";
  }
}
