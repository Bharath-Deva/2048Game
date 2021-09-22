const generateRandomElementInArray = (arr) => {
  // console.log(arr);
  const el = arr[Math.floor(Math.random() * arr.length)];
  // console.log(el);
  return el;
};



const isGameOver = (grid) => {
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      if (grid[i][j] === 0) {
        return false;
      }
      try {
        if (i < 3 && grid[i][j] === grid[i + 1][j]) {
          return false;
        }
        if (j < 3 && grid[i][j] === grid[i][j + 1]) {
          return false;
        }
      } catch (error) { }
    }
  }
  return true;
};

// const fillSpots = (grid) => {
export const fillSpots = (grid) => {
  let spot;
  try {
    let emptySpots = [];
    const fillOptions = [2, 4];
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        if (grid[i][j] === 0) {
          emptySpots.push([i, j]);
        }
      }
    }
    spot = generateRandomElementInArray(emptySpots);
    let spotNumber = generateRandomElementInArray(fillOptions);
    grid[spot[0]][spot[1]] = spotNumber;
    if (fillOptions.length > 1) {
      spot = generateRandomElementInArray(emptySpots);
      spotNumber = generateRandomElementInArray(fillOptions);
      grid[spot[0]][spot[1]] = spotNumber;
    }
    return grid;
  } catch (error) {
    console.log(error);
    return grid
  }
};

const matrixTraversal = (arr) => {
  let traversedMatrix = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ];
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      traversedMatrix[j][i] = arr[i][j];
    }
  }
  return traversedMatrix;
};

const zeroPadding = (arr, pushSide) => {
  //right
  if (pushSide) {
    while (arr.length !== 4) {
      arr = [0].concat(arr);
    }
    return arr;
  } else {
    while (arr.length !== 4) {
      arr = arr.concat([0]);
    }
    return arr;
  }
};

const slideRight = (arr) => {
  let score = 0;
  arr = arr.filter((el) => el);
  let resArr = [];
  let i = arr.length - 1;
  while (i >= 0) {
    const el = arr[i];
    if (el === arr[i - 1]) {
      score += 2 * el;
      resArr = [2 * el].concat(resArr);
      // resArr[i - 1] = 0;
      i -= 2;
    } else {
      score += el;
      resArr = [el].concat(resArr);
      i--;
    }
  }
  resArr = zeroPadding(resArr, 1);
  return [resArr, score];
};

const slideLeft = (arr) => {
  let score = 0;
  arr = arr.filter((el) => el);
  let resArr = [];
  let i = 0;
  while (i < arr.length) {
    const el = arr[i];
    if (el === arr[i + 1]) {
      score += 2 * el;
      resArr.push(2 * el);
      // resArr[i - 1] = 0;
      i += 2;
    } else {
      score += el;
      resArr.push(el);
      i++;
    }
  }
  resArr = zeroPadding(resArr, 0);
  return [resArr, score];
};

// const pushingRight = (grid, score) => {
export const pushingRight = (grid, score) => {
  if (isGameOver(grid)) {
    return [false, grid];
  }
  for (let i = 0; i < 4; i++) {
    let slideRes = slideRight(grid[i]);
    grid[i] = slideRes[0];
    score += slideRes[1];
  }
  grid = fillSpots(grid)
  if (isGameOver(grid)) {
    return [false, grid];
  }
  return [grid, score];
};

// const pushingLeft = (grid, score) => {
export const pushingLeft = (grid, score) => {
  if (isGameOver(grid)) {
    return [false, grid];
  }
  for (let i = 0; i < 4; i++) {
    let slideRes = slideLeft(grid[i]);
    grid[i] = slideRes[0];
    score += slideRes[1];
  }
  grid = fillSpots(grid)
  if (isGameOver(grid)) {
    return [false, grid];
  }
  return [grid, score];
};

// const pushingUp = (grid, score) => {
export const pushingUp = (grid, score) => {
  if (isGameOver(grid)) {
    return [false, grid];
  }
  grid = matrixTraversal(grid);
  for (let i = 0; i < 4; i++) {
    let slideRes = slideLeft(grid[i]);
    grid[i] = slideRes[0];
    score += slideRes[1];
  }
  grid = matrixTraversal(grid);
  grid = fillSpots(grid)
  if (isGameOver(grid)) {
    return [false, grid];
  }
  return [grid, score];
};

// const pushingDown = (grid, score) => {
export const pushingDown = (grid, score) => {
  if (isGameOver(grid)) {
    return [false, grid];
  }
  grid = matrixTraversal(grid);
  for (let i = 0; i < 4; i++) {
    let slideRes = slideRight(grid[i]);
    grid[i] = slideRes[0];
    score += slideRes[1];
  }
  grid = matrixTraversal(grid);
  grid = fillSpots(grid)
  if (isGameOver(grid)) {
    return [false, grid];
  }
  return [grid, score];
};

// let traversedMatrix = [
//   [1, 3, 1, 2],
//   [3, 7, 2, 1],
//   [2, 3, 1, 0],
//   [5, 7, 2, 1],
// ]

// console.log(isGameOver(traversedMatrix));

