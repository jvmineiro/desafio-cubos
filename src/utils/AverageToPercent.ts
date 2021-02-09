export function converter(average: number): string {
  const percent = average * 10;
  return `${percent.toString()}%`;
}
