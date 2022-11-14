/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

//iterative way
    var reverseList = function(head) {
        let listHead = head;

        if (listHead === null)
            return listHead;

        let currentNode = listHead;
        let prevNode = null;
        let nextNode = null;

        // traverse list and adjust links
        while (currentNode != null) {
            nextNode = currentNode.next;
            currentNode.next = prevNode;
            prevNode = currentNode;
            currentNode = nextNode;
        }
        listHead = prevNode;
        return listHead;
};

console.log(reverseList([1, 2, 3, 4, 5]))
console.log(reverseList([3, 2, 6, 7]));