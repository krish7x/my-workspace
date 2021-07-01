package javacode.linkedlist;

public class LinkedList {
    Node head; // no new instance, since it will inserted by the new

    public LinkedList(Node node) {
        this.head = node;
    }

    public void insertData(int data) {
        Node node = new Node(); // new instance to insert to grab data and address
        node.data = data;
        node.next = null;
        if (head == null) {
            head = node;
        } else {
            Node n = head; // no new instance, since we replace it to the head
            while (n.next != null) {
                n = n.next;
            }
            n.next = node;
        }
    }

    public void insertDataAtStart(int data) {
        Node node = new Node();
        node.data = data;
        node.next = head; // link
        head = node; // switch
    }

    public void insertDataAt(int data, int index) {
        Node node = new Node();
        node.data = data;
        node.next = null;

        if (index == 0) {
            insertDataAtStart(data);
        } else {
            Node n = head;
            for (int i = 0; i < index - 1; ++i) {
                n = n.next;
            }
            node.next = n.next; // link
            n.next = node; // switch
        }
    }

    public void insertNode(Node node) {
        if (head == null) {
            head = node;
        } else {
            Node n = head;
            while (n.next != null) {
                n = n.next;
            }
            n.next = node;
        }
    }

    public void insertNodeAtStart (Node node) {
            node.next = head;
            head = node;
    }

    public void insertNodeAt(Node node, int index) {
        if (head == null) {
            return;
        } else {
            Node n = head;
            for (var i = 0; i < index - 1; ++i) {
                n = n.next;
            }
            node.next = n.next;
            n.next = node;
        }
    }

    public void findByValue (int data) {
        if (head == null) return;  
        Node n = head;
        int index = 0;
        while (n != null) {
            if(n.data == data) {
                System.out.println("Index --> "+ index);
            }
            index ++;
            n = n.next; 
        }
    }

    public void findByIndex (int index) {
        if (head == null) return;
        Node n = head;
        for (int i = 0; i < index; ++i) {
            n = n.next;
        }
        Node result = n;
        System.out.println(" Data --> " + result.data);
    }

    public void deleteAt(int index) {
        if (index == 0) {
            head = head.next;
        } else {
            Node n = head;
            Node node = null;
            for (int i = 0; i < index - 1; ++i) {
                n = n.next;
            }
            node = n.next; // link
            n.next = node.next; // move forward
        }
    }

    public Node sortedMergeNodes(Node n1, Node n2) { //recursive function
       if(n1 == null) return n2;
       if(n2 == null) return n1;
       
       if(n1.data < n2.data) {
           n1.next = sortedMergeNodes(n1.next, n2);
           return n1;
       } else {
           n2.next = sortedMergeNodes(n1, n2.next);
           return n2;
       }
    }

    public void reverse(Node node) {
        Node prevNode = null;
        Node currentNode = node;
        Node nextNode = null;

        while (currentNode != null) {
            nextNode = currentNode.next;
            currentNode.next = prevNode;
            prevNode = currentNode;
            currentNode = nextNode;
        }

        node = prevNode;
        showNode(node);
    }

    public void show() {
        Node node = head;
        while (node.next != null) {
            System.out.println("Data -> " + node.data);
            node = node.next;
        }
        System.out.println("Data -> " + node.data);
    }

    public void showNode(Node node) {
        while (node.next != null) {
            System.out.println("Data -> " + node.data);
            node = node.next;

        }
        System.out.println("Data -> " + node.data);
    }
}
