package javacode.runner;

import javacode.linkedlist.LinkedList;
import javacode.linkedlist.Node;

public class Runner {

    public static void main(String[] args) {

        // list.insertData(5);
        // list.insertData(10);
        // list.insertData(15);
        // list.insertData(20);
        // list.insertData(25);
        // list.show();

        Node head = new Node();
        Node node1 = new Node();
        Node node2 = new Node();
        Node node3 = new Node();
        Node node4 = new Node();
        Node node5 = new Node();
       
        Node head2 = new Node();
        Node node7 = new Node();
        Node node8 = new Node();

        // System.out.println("Given Linked list");
        // list.showNode(head);
        // System.out.println("\nReversed linked list ");
        // list.reverse(head);

        head.data = 30;
        head.next = node1;

        node1.data = 40;
        node1.next = node2;

        node2.data = 50;
        node2.next = node3;

        // new node
        node3.data = 100;
        node3.next = node4;

        node4.data = 200;
        node4.next = null;

        //test node
        node5.data = 250;
        node5.next = null;


        //merge node
        head2.data = 77;
        head2.next = node7;

        node7.data = 88;
        node7.next = node8;

        // new node
        node8.data = 99;
        node8.next = null;

        LinkedList list = new LinkedList(head);
       //list.insertNodeAt(node3, 2);
       //list.deleteAt(3);
       //list.findByValue(30);
       //list.findByIndex(2);
       //list.insertNodeAtStart(node5); 
       list.showNode(list.sortedMergeNodes(head, head2));

    }
}
