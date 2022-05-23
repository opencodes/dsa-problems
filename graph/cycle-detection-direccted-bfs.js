
/**
 * @param {number} V
 * @param {number[][]} adj
 * @returns {boolean}
*/
class Solution {

    // Function to detect cycle in a directed graph.
    isCyclic (V, adj) {
        let indegree = [];
        let queue = [];
        let visitedNodes = 0;

        for (let i = 0; i < V; i++) {
            indegree.push(0)
        }

        for (let i = 0; i < V; i++) {
            let edges = adj[i];
            for (let k = 0; k < edges.length; k++) {
                let n = parseInt(adj[i][k]);
                indegree[n] += 1;
            }
        }

        for (let i = 0; i < indegree.length; i++) {
            if (indegree[i] == 0) {
                queue.unshift(i)
            }
        }



        while (queue.length > 0) {
            let node = queue.pop();
            let edges = adj[node];
            visitedNodes++;

            for (let i = 0; i < edges.length; i++) {
                let el = edges[i];
                indegree[el] -= 1;
                if (indegree[el] == 0) {
                    queue.unshift(el);

                }
            }
        }


        return visitedNodes !== V;
    }
}