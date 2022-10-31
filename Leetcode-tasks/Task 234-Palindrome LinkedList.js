class ListNode{
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

 let isPalindrome = function(head){

     let slow_ptr = head;
     let fast_ptr = head;
     let prev, temp;

     while(fast_ptr && fast_ptr.next){

         slow_ptr = slow_ptr.next;
         fast_ptr = fast_ptr.next.next;
     }
     prev = slow_ptr;
     slow_ptr = slow_ptr.next;
     prev.next = null;

     while(slow_ptr){
         temp = slow_ptr.next;
         slow_ptr.next = prev;
         prev = slow_ptr;
         slow_ptr = temp;
     }
     fast_ptr = head;
     slow_ptr = prev;

     while(slow_ptr){
         if (fast_ptr.value !== slow_ptr.value) {
             return false;
         }
         else {
             fast_ptr = fast_ptr.next;
             slow_ptr = slow_ptr.next;
         }
     }
     return true;
 };

var isPalindrome22 = function(head) {
    let slow = head, fast = head, prev, temp
    while (fast && fast.next)
        slow = slow.next, fast = fast.next.next
    prev = slow, slow = slow.next, prev.next = null
    while (slow)
        temp = slow.next, slow.next = prev, prev = slow, slow = temp
    fast = head, slow = prev
    while (slow)
        if (fast.val !== slow.val) return false
        else {fast = fast.next, slow = slow.next}
    return true
};

//console.log(isPalindrome([1, 2]));
console.log(isPalindrome22([1, 2]));