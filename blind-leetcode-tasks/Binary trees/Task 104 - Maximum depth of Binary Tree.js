/**
 /*Definition for a binary tree node.
 /*function TreeNode(val, left, right) {
   this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
 }

 @param {TreeNode} root
 //@return {number}*/

const maxDepth = (root) => {
    if (!root) return 0;
    return (1 + Math.max(maxDepth(root.left),maxDepth(root.right)));
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

/* 8
 |   |
5    10
   |   |
   9   15
      |
      14
        |
        25
 The maximum depth here is 5
*/

const tree2= {
    val: 8,
    left: 5,
    right: null
};

const tree4= {
    val: 8,
    left: {
        val: 7,
        left: 6
    },
    right: null
};

const tree3= {
    val: null
};

console.log(maxDepth(tree1)); //5
console.log(maxDepth(tree2)); //2
console.log(maxDepth(tree3)); //0 ???
console.log(maxDepth(tree4)); //3