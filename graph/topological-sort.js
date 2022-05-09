
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
        let vis = new Array(N);
        // console.log(adj)
        for (let i = 0; i < N; i++) {
            if (vis[i] == 0) {
                findTopoSort(i, vis, adj, st);
            }
        }
        let topo = new Array(N);
        let ind = 0;
        while (st.length) {
            topo[ind++] = st.pop();
        }
        // for(int i = 0;i<N;i++) System.out.println(topo[i] + " "); 
        return topo;
    }
}

let sol = new Solution();
// 0 : []
// 1 :[0]
// 2 :[0]
// 3 :[0]
console.log(sol.topoSort(4, [[], [0], [0], [0]]));