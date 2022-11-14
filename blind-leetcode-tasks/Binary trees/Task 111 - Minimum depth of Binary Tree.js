/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function(root) {
    if (root == null){
        return 0;
    }

    let leftPart = minDepth(root.left);
    let rightPart = minDepth(root.right);
    if( leftPart == 0 || rightPart == 0){
        return Math.max(leftPart, rightPart) + 1;
    }
    else{
       return Math.min(leftPart, rightPart) + 1;
    }

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


console.log(minDepth(tree1)); //2
console.log(minDepth(tree2)); //2
console.log(minDepth(tree4)); //3