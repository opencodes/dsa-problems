
class Solution {
    isCycleDetected (node, adj, visited, recursiveStack) {

        if (recursiveStack[node]) {
            return true;
        }

        if (visited[node]) {
            return false;
        }

        visited[node] = true;
        recursiveStack[node] = true;


        for (let k = 0; k < adj[node].length; k++) {
            const el = adj[node][k];
            if (this.isCycleDetected(el, adj, visited, recursiveStack)) return true;
        }
        recursiveStack[node] = false;
        return false;
    }
    // Function to detect cycle in an undirected graph.
    isCycle (V, adj) {
        // code here
        let visited = new Array(V);
        let recursiveStack = new Array(V);

        for (let i = 0; i < V; i++) {
            if (this.isCycleDetected(i, adj, visited, recursiveStack)) {
                return true;
            }
        }
        return false;
    }
}

let sol = new Solution();
console.log(sol.isCycle(4, [[1], [2], [3], []]));