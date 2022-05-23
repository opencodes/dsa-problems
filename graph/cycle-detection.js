
class Solution {
    isCycleDetected (node, adj, visitedArr, parent) {
        visitedArr[node] = true;
        for (let k = 0; k < adj[node].length; k++) {
            const el = adj[node][k];
            if (!visitedArr[el]) {
                if (this.isCycleDetected(el, adj, visitedArr, node)) return true;
            } else {
                if (el != parent) return true;
            }
        }
        return false;
    }
    // Function to detect cycle in an undirected graph.
    isCycle (V, adj) {
        // code here
        let visitedArr = new Array(V);
        for (let i = 0; i < V; i++) {
            if (!visitedArr[i]) {
                if (this.isCycleDetected(i, adj, visitedArr, -1)) {
                    return true;
                }
            }

        }
        return false;
    }
}