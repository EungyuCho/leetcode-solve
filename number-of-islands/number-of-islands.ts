const moveY = [1, -1, 0, 0];
const moveX = [0, 0, -1, 1];
let dp: number[][];
let visited: boolean[][];
function numIslands(grid: string[][]): number {
  dp = new Array(grid.length + 2);
  visited = new Array(grid.length + 2);
  const M = grid[0].length;
  for (let i = 0; i < dp.length; i++) {
    dp[i] = new Array(M + 2).fill(0);
    visited[i] = new Array(M + 2).fill(false);
  }

  const GROUND = "1";

  grid.forEach((line, lineIndex) => {
    line.forEach((ground, index) => {
      dp[lineIndex + 1][index + 1] = ground === GROUND ? 1 : 0;
    });
  });

  let result = 0;
  for (let i = 1; i < dp.length; i++) {
    for (let j = 1; j < M + 1; j++) {
      if (dp[i][j] === 1) {
        if (!visited[i][j]) {
          dfs(i, j);
          result++;
        }
      }
    }
  }

  return result;
}

function dfs(x: number, y: number) {
  if (visited[x][y]) {
    return;
  }

  visited[x][y] = true;

  if (dp[x][y] === 0) {
    return;
  }

  for (let i = 0; i < 4; i++) {
    dfs(x + moveX[i], y + moveY[i]);
  }
}