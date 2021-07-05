package javacode.runner;

import javacode.linkedlist.AddTwoNumber;
//import javacode.linkedlist.DoublyNode;
import javacode.linkedlist.LinkedList;
import javacode.linkedlist.ListNode;
import javacode.linkedlist.Node;
//import javacode.linkedlist.Solution;
import javacode.linkedlist.SwapNodes;

public class Runner {

    public static void main(String[] args) {

        // ListNode
        ListNode listHead = new ListNode();
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
        listHead.val = 1;
        listHead.next = listNode1;

        listNode1.val = 2;
        listNode1.next = listNode2;

        listNode2.val = 3;
        listNode2.next = listNode3;

        listNode3.val = 4;
        listNode3.next = listNode4;

        listNode4.val = 5;
        listNode4.next = null;

        listNode5.val = 4;
        listNode5.next = null;

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
        // Solution solution = new Solution();
        // list.showListNode(solution.removeNthFromEnd(listHead, 5));

        // Doubly Linked List
        /*
         * DoublyNode doublyHead = new DoublyNode(); DoublyNode doublyNode1 = new
         * DoublyNode(); DoublyNode doublyNode2 = new DoublyNode(); DoublyNode
         * doublyNode3 = new DoublyNode(); DoublyNode doublyNode4 = new DoublyNode();
         * 
         * doublyHead.data = 1; doublyHead.prev = null; doublyHead.next = doublyNode1;
         * 
         * doublyNode1.data = 2; doublyNode1.prev = doublyHead; doublyNode1.next =
         * doublyNode2;
         * 
         * doublyNode2.data = 3; doublyNode2.prev = doublyNode1; doublyNode2.next =
         * doublyNode3;
         * 
         * doublyNode3.data = 4; doublyNode3.prev = doublyNode2; doublyNode3.next =
         * doublyNode4;
         * 
         * doublyNode4.data = 5; doublyNode4.prev = doublyNode3; doublyNode4.next =
         * null;
         */

        /*
         * AddTwoNumber addTwoNumber = new AddTwoNumber();
         * list.showListNode(addTwoNumber.addTwoNumbers(listHead, listNode3));
         */

        // SwapNodes swapNodes = new SwapNodes();
        // list.showListNode(swapNodes.swapPairs(listHead));
        list.rotateRight(listHead, 2);
    }
}
