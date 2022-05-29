
/**
 * @param {number} V
 * @param {number[][]} adj
 * @returns {number[]}
*/
class Solution {
    //Function to return list containing vertices in Topological order.
    findTopoSort (node, vis, adj, st) {
        vis[node] = 1;
        for (let it = 0; it < adj; it++) {
            if (vis[it] == 0) {
                findTopoSort(it, vis, adj, st);
            }
        }
        st.push(node);
    }
    topoSort (N, adj) {
        let st = [];
        let vis = adj.map(k => 0);
        for (let i = 0; i < N; i++) {
            if (vis[i] == 0) {
                this.findTopoSort(i, vis, adj, st);
            }
        }
        let topo = new Array(N);
        let ind = 0;
        while (st.length) {
            topo[ind++] = st.pop();
        }
        return topo;
    }

    findOrder (dict, N, K) {
        let adj = {};
        for (let i = 1; i < dict.length; i++) {

            const word1 = dict[i - 1];
            const word2 = dict[i];

            for (let k = 0; k < Math.min(word1.length, word2.length); k++) {
                if (!adj[word1[k]]) {
                    adj[word1[k]] = []
                } else {
                    if (adj[word1[k].includes()]) {

                    }
                }


            }
        }
        console.log(this.topoSort(N, adj));
    }

}

let sol = new Solution();
let N = 5,
    K = 4,
    dictArr = ["baa", "abcd", "abca", "cab", "cad"];

console.log(sol.findOrder(dictArr, N, K));