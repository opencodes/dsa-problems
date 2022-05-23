class BFS {
    bfsTraversal (n, adj) {
        let queue = [0];
        let visitedArr = adj.map(k => 0);
        visitedArr[0] = 1;
        let ans = [];
        while (queue.length > 0) {
            let el = queue.shift();
            ans.push(el);
            for (let i = 0; i < adj[el].length; i++) {
                const node = adj[el][i];
                if (visitedArr[node] !== 1) {
                    queue.push(node);
                    visitedArr[node] = 1;
                }
            }
        }
        return ans;
    }
}

let adjecencyList = [
    [1, 2],
    [0, 2, 3, 4],
    [0, 4],
    [1, 4, 5],
    [1, 2, 3, 5],
    [3, 4]
];
let sol = new BFS();
console.log(sol.bfsTraversal(adjecencyList.length, adjecencyList))

