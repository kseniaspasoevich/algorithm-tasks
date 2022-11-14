/*
 Definition for a binary tree node.*/
/*function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
     this.right = (right===undefined ? null : right)
}*

* @param {TreeNode} p
* @param {TreeNode} q
* @return {boolean}
*/
var isSameTree = function(p, q) {
    return (p == null && q == null) ||
        (p != null && q != null && p.val == q.val &&
            isSameTree(p.left, q.left) && isSameTree(p.right, q.right));
};

const tree1 = {
    val: 8,
    left: {val: 5},
    right: {
        val: 10,
        left: {val: 9},
        right: {
            val: 15,
            left: {
                val: 14,
                right: 25
            } },
    },
};

const tree2= {
    val: 8,
    left: 5,
    right: null
};

const tree3= {
    val: 8,
    left: 5,
    right: null
};

console.log(isSameTree(tree1, tree2)); //false
console.log(isSameTree(tree2, tree3)); //true