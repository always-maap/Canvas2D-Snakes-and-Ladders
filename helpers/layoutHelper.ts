export const getLayout = (width: number, height: number) => {
  const gridWidth = width;
  const gridHeight = height;
  const boxWidth = width / 10;
  const boxHeight = height / 10;

  let layout: { [key: string]: { x: number; y: number; id: number } } = {};
  const oddRows = [1, 3, 5, 7, 9],
    evenRows = [0, 2, 4, 6, 8];

  for (let col = 1; col <= 10; col++) {
    evenRows.map((row) => {
      layout[col + 10 * row] = {
        x: (col - 1) * boxWidth + boxWidth / 2,
        y: gridHeight - (row * boxHeight + boxHeight / 2),
        id: col + 10 * row,
      };
    });

    oddRows.map((row) => {
      layout[col + 10 * row] = {
        x: gridWidth - ((col - 1) * boxWidth + boxWidth / 2),
        y: gridHeight - (row * boxHeight + boxHeight / 2),
        id: col + 10 * row,
      };
    });
  }
  return layout;
};
