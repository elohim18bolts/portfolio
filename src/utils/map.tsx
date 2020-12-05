export const map = (
  x: number,
  xmin: number,
  xmax: number,
  ymin: number,
  ymax: number
): number => {
  const m = (ymax - ymin) / (xmax - xmin);
  return ymin + m * (x - xmin);
};
