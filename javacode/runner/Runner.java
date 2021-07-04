package javacode.runner;

import javacode.linkedlist.LinkedList;
import javacode.linkedlist.ListNode;
import javacode.linkedlist.Node;
import javacode.linkedlist.Solution;

public class Runner {

    public static void main(String[] args) {

        ListNode head = new ListNode();
        ListNode listNode1 = new ListNode();
        ListNode listNode2 = new ListNode();
        ListNode listNode3 = new ListNode();
        ListNode listNode4 = new ListNode();
        ListNode listNode5 = new ListNode();
        ListNode listNode6 = new ListNode();
        ListNode listNode7 = new ListNode();
        ListNode listNode8 = new ListNode();
        ListNode listNode9 = new ListNode();

        Node node3 = new Node();
        Node node4 = new Node();

        Node head2 = new Node();
        Node merge1 = new Node();
        Node merge2 = new Node();

        Node test = new Node();

        // head node
        // --> starts here
        head.val = 1;
        head.next = listNode1;

        listNode1.val = 2;
        listNode1.next = listNode2;

        listNode2.val = 3;
        listNode2.next = listNode3;

        listNode3.val = 4;
        listNode3.next = listNode4;

        listNode4.val = 5;
        listNode4.next = null;

        listNode5.val = 6;
        listNode5.next = listNode6;

        listNode6.val = 7;
        listNode6.next = listNode7;

        listNode7.val = 8;
        listNode7.next = listNode8;

        listNode8.val = 9;
        listNode8.next = listNode9;

        listNode9.val = 10;
        listNode9.next = null;

        node3.data = 100;
        node3.next = node4;

        node4.data = 200;
        node4.next = null;
        // --> ends here

        // merge node
        // --> starts here
        head2.data = 77;
        head2.next = merge1;

        merge1.data = 88;
        merge1.next = merge2;

        merge2.data = 99;
        merge2.next = null;
        // --> ends here

        // test node
        test.data = 250;
        test.next = null;

        LinkedList list = new LinkedList(head2);
        // list.insertDataAtStart(20);
        // list.insertNodeAt(node3, 2);
        // list.deleteAt(3);
        // list.findByValue(30);
        // list.findByIndex(2);
        // list.insertNodeAtStart(test);
        // list.showNode(list.sortedMergeNodes(head, head2));
        // list.reverse(head);
        list.rotate(head);
        // Solution solution = new Solution();
        // list.showListNode(solution.removeNthFromEnd(head, 10));
    }
}
