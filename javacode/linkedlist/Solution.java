package javacode.linkedlist;

public class Solution {
    public ListNode removeNthFromEnd(ListNode head, int n) {
        int index = 1;
        ListNode second_last = head;
        while (second_last.next != null) {
            second_last = second_last.next;
            index++;
        }
        if (index == n) {
            return deleteAt(head, 1);
        } else {
            ListNode reverseHead = reverse(head);
            ListNode reverseDeletedNode = deleteAt(reverseHead, n);
            ListNode node = reverse(reverseDeletedNode);
            return node;
        }
    }

    public ListNode reverse(ListNode node) {
        ListNode prevNode = null;
        ListNode currentNode = node;
        ListNode nextNode = null;

        while (currentNode != null) {
            nextNode = currentNode.next;
            currentNode.next = prevNode;
            prevNode = currentNode;
            currentNode = nextNode;
        }

        node = prevNode;
        return node;
    }

    public ListNode deleteAt(ListNode head, int index) {
        if (index == 1) {
            return head = head.next;
        } else {
            for (int i = 1; i < index - 1; ++i) {
                head = head.next;
            }
            head.next = head.next.next;
            return head;
        }
    }
}
