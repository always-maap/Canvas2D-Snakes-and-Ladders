export const getPointsInfo = (startX: number, startY: number, endX: number, endY: number) => {
  const dx = startX - endX;
  const dy = startY - endY;
  const distance = Math.sqrt(dx * dx + dy * dy);

  let inRads = Math.atan2(dy, dx);

  let size = "small";
  if (distance > 180) {
    size = "big";
  } else if (dy <= 180 && dy > 100) {
    size = "medium";
  }

  return {
    size,
    distance,
    angel: (inRads * 180) / Math.PI + 90,
  };
};
