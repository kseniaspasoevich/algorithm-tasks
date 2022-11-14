//inverted inorder traversal (right-root-left instead of left-root-right)
var invertTree = function(root) {
    if(root == null) {return null;}

    var tmp = root.left;
    root.left = invertTree(root.right);
    root.right = invertTree(tmp);

    return root;

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

const tree4= {
    val: 8,
    left: 5,
    right: {
        val: 15,
        left: 13,
        right: 23
    }
};

console.log(invertTree(tree1)); //ok
console.log(invertTree(tree2)); //ok
console.log(invertTree(tree4)); //ok