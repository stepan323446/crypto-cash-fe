export const DOTS = "...";
const SIBLINGS = 1;
const BOUNDARY = 1;

export function getPageItems(current: number, total: number): (number | typeof DOTS)[] {
  const totalNumbers = BOUNDARY * 2 + SIBLINGS * 2 + 3;
  if (total <= totalNumbers) {
    return Array.from({ length: total }, (_, i) => i + 1);
  }

  const leftSibling = Math.max(current - SIBLINGS, 1);
  const rightSibling = Math.min(current + SIBLINGS, total);

  const showLeftDots = leftSibling > BOUNDARY + 2;
  const showRightDots = rightSibling < total - BOUNDARY - 1;

  if (!showLeftDots && showRightDots) {
    // 1,2,3,4,5, ..., total
    const leftCount = BOUNDARY + SIBLINGS * 2 + 2;
    const leftRange = Array.from({ length: leftCount }, (_, i) => i + 1);
    return [...leftRange, DOTS, total];
  }

  if (showLeftDots && !showRightDots) {
    // 1, ..., 109,110,111,112,113
    const rightCount = BOUNDARY + SIBLINGS * 2 + 2;
    const rightRange = Array.from({ length: rightCount }, (_, i) => total - rightCount + i + 1);
    return [1, DOTS, ...rightRange];
  }

  // 1, ..., current-1, current, current+1, ..., total
  const middleRange = Array.from(
    { length: rightSibling - leftSibling + 1 },
    (_, i) => leftSibling + i
  );
  return [1, DOTS, ...middleRange, DOTS, total];
}