package javacode.runner;

import javacode.linkedlist.LinkedList;
import javacode.linkedlist.Node;

public class Runner {

    public static void main(String[] args) {

        Node head   = new Node();
        Node node1  = new Node();
        Node node2  = new Node();
        Node node3  = new Node();
        Node node4  = new Node();
       
        Node head2  = new Node();
        Node merge1 = new Node();
        Node merge2 = new Node();

        Node test   = new Node();

        //head node
        // --> starts here
        head.data = 300;
        head.next = node1;

        node1.data = 40;
        node1.next = node2;

        node2.data = 50;
        node2.next = node3;

        node3.data = 100;
        node3.next = node4;

        node4.data = 200;
        node4.next = null;
        //--> ends here

        //merge node
        //--> starts here
        head2.data = 77;
        head2.next = merge1;

        merge1.data = 88;
        merge1.next = merge2;

        merge2.data = 99;
        merge2.next = null;
        //--> ends here

        //test node
        test.data = 250;
        test.next = null;

        LinkedList list = new LinkedList(head);
       //list.insertDataAtStart(20);
       //list.insertNodeAt(node3, 2);
       //list.deleteAt(4);
       //list.findByValue(30);
       //list.findByIndex(2);
       //list.insertNodeAtStart(test); 
       //list.showNode(list.sortedMergeNodes(head, head2));
       list.reverse(head);
       //list.show();

    }
}
