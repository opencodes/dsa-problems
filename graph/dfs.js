class Solution {
    traverseEdges (node, adj, visited, ans) {
        visited[node] = 1;
        ans.push(node);
        if (adj[node]) {
            for (let i = 0; i < adj[node].length; i++) {
                let el = adj[node][i];
                if (visited[el] != 1) {
                    this.traverseEdges(el, adj, visited, ans);
                }
            }
        }
    }
    // Function to return a list containing the DFS traversal of the graph.
    dfsOfGraph (V, adj) {
        // code here
        let visitedArr = {};
        let ans = [];
        this.traverseEdges(0, adj, visitedArr, ans);
        return ans;
    }
}