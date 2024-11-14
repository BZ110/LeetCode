/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {

    // Declare our result dummy node
    let dummy = new ListNode(0);
    
    // Set current pointer to dummy node and initialize carry
    let current = dummy;
    let carry = 0;

    // Work with a loop until both lists are null
    while (l1 !== null || l2 !== null) {
        
        // Get the values from each list, or 0 if the list is exhausted
        let x = (l1 !== null) ? l1.val : 0;
        let y = (l2 !== null) ? l2.val : 0;

        // Do the calculations (sum with carry)
        let sum = carry + x + y;
        
        // Is sum more than or equal to 10?
        if (sum >= 10) {
            
            // It is, so set carry to 1 for the next addition
            carry = 1;
            
            // Set sum to the remainder after dividing by 10
            sum = sum % 10;
        } else {
            
            // It is not, so reset carry to 0
            carry = 0;
        }

        // Add the sum as a new node to the result list
        current.next = new ListNode(sum);
        
        // Move the current pointer to the next node
        current = current.next;

        // Move to the next nodes in l1 and l2, if they exist
        if (l1 !== null) l1 = l1.next;
        if (l2 !== null) l2 = l2.next;
    }

    // Is there still a carry left?
    if (carry > 0) {
        
        // There is, so add a final node with carry value
        current.next = new ListNode(carry);
    }

    // Return the result list starting from dummy's next node
    return dummy.next;
};
