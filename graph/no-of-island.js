class Solution {
    markIsLand (x, y, m, n, grid) {
        if (x >= m || x < 0 || y >= n || y < 0 || grid[x][y] != 1) {
            return;
        }
        grid[x][y] = 2;
        this.markIsLand(x - 1, y, m, n, grid);
        this.markIsLand(x + 1, y, m, n, grid);
        this.markIsLand(x, y + 1, m, n, grid);
        this.markIsLand(x, y - 1, m, n, grid);

        this.markIsLand(x - 1, y - 1, m, n, grid);
        this.markIsLand(x - 1, y + 1, m, n, grid);
        this.markIsLand(x + 1, y + 1, m, n, grid);
        this.markIsLand(x + 1, y - 1, m, n, grid);
    }
    // Function to find the number of islands.
    numIslands (grid) {
        let noOfIsland = 0;
        let rowLength = grid.length;
        let colLength = grid[0].length
        for (let i = 0; i < grid.length; i++) {
            for (let j = 0; j < colLength; j++) {
                console.log(i, j, 'grid[i][j]', grid[i][j])
                if (grid[i][j] === 1) {
                    console.log(i, j);
                    this.markIsLand(i, j, rowLength, colLength, grid);
                    noOfIsland += 1;
                }
                // console.log(JSON.stringify(grid));
            }
        }
        return noOfIsland;
    }
}
let sol = new Solution();
let matrix = [
    [1, 0, 1, 0, 0, 1, 1, 0, 1]
]
console.log(JSON.stringify(matrix))
console.log(sol.numIslands(matrix));