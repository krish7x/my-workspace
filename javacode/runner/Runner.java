package javacode.runner;

import javacode.linkedlist.LinkedList;
import javacode.linkedlist.Node;

public class Runner {
    
    public static void main(String[] args) {
        LinkedList list = new LinkedList();

      /*   list.insert(5);
        list.insert(10);
        list.insert(15);
        list.insert(20);
        list.insert(25);
        list.show(); */

        Node head = new Node();
        Node node2 = new Node();
        Node node3 = new Node();

        head.data = 30;
        head.next = node2;

        node2.data = 40;
        node2.next = node3;

        node3.data = 50;
        node3.next = null;

        System.out.println("Given Linked list");
        list.showNode(head);
        System.out.println("\nReversed linked list ");
        list.reverse(head);
    }
}
