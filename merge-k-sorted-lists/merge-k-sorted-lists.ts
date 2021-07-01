/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
    const nodes = [];
    lists.forEach(list => {
        while (list) {   
            nodes.push(list.val)
            list = list.next;
        }
    })
    
    nodes.sort((a,b) => a - b)
    
    let head = null;
    let node = null;
    nodes.forEach(val => {
        if (!head) {
            head = new ListNode(val)
            node = head;
            return;
        }
        
        node.next = new ListNode(val);
        node = node.next;
        
    })
    return head;
};