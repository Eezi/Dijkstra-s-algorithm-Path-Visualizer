export const createMaze = (grid) => {
  grid.map((row, i) => {
    row.map((node, index) => {
      let randomNumber = getRandomInt(47);
      if (node.col % 3 === 0 && index % 3 === 0) {
        if (!row[randomNumber].isStart && !row[randomNumber].isFinish) {
          row[randomNumber].isWall = true;
        }
      }
    });
  });
};

const getRandomInt = (maxNumber) => {
  return Math.floor(Math.random() * Math.floor(maxNumber));
};
