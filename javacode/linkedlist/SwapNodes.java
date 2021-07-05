package javacode.linkedlist;

public class SwapNodes {
    public ListNode swapPairs(ListNode head) {

        ListNode prevNode = null;
        ListNode currentNode = head;
        ListNode nextNode = null;

        for (int i = 0; i < 2; ++i) {
            nextNode = currentNode.next;
            currentNode.next = prevNode;
            prevNode = currentNode;
            currentNode = nextNode;
        }
        ListNode n = currentNode;

        while (n.next != null) {
            n = n.next;
        }
        n.next = prevNode;

        return currentNode;

    }
}
