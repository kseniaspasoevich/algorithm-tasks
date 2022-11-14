var inorderTraversal = function (root){
        if(root == null) {return null;}

        inorderTraversal(root.left);
        console.log(root);
        inorderTraversal(root.right);
}

var preorderTraversal = function (root){
    if(root == null) {return null;}

    console.log(root);
    preorderTraversal(root.left);
    preorderTraversal(root.right);
}

var postorderTraversal = function (root){
    if(root == null) {return null;}

    postorderTraversal(root.left);
    postorderTraversal(root.right);
    console.log(root);
}


const tree1 = {
    val: 10,
    left: {
        val: 3,
        left: 1,
        right: null
    },
    right: 15
};

const tree2 = {
    val: 8,
    left: {
        val: 7,
        left: {
            val: 6,
            left: {
                val: 4,
                left: null,
                right: null
            },
            right: null

        },
        right: null
    },
    right: null
};

/*    10
     |   |
*   3    15
   |
*  1*/

/*console.log(inorderTraversal(tree5));
console.log(inorderTraversal(tree2));*/
//console.log(inorderTraversal([1, 2, 3, 5]))
//inorderTraversal(tree2)
console.log("The tree looks like this: ")
console.log("       10\n" +
    "     |   |\n" +
     "   3    15\n" +
    "  |\n" +
    "  1");
console.log("\nInorder traversal left-root-right: ");
inorderTraversal(tree1);
console.log("\nPreorder traversal root-left-right: ");
preorderTraversal(tree1);
console.log("\nPostorder traversal left-right-root: ");
postorderTraversal(tree1);