package javacode.linkedlist;

import java.math.BigInteger;

public class AddTwoNumber {
    public ListNode addTwoNumbers(ListNode l1, ListNode l2) {

        String l1String = "";
        String l2String = "";

        ListNode l1temp = reverse(l1);
        ListNode l2temp = reverse(l2);

        while (l1temp.next != null) {
            l1String += String.valueOf(l1temp.val);
            l1temp = l1temp.next;
        }
        l1String += String.valueOf(l1temp.val);

        while (l2temp.next != null) {
            l2String += String.valueOf(l2temp.val);
            l2temp = l2temp.next;
        }
        l2String += String.valueOf(l2temp.val);

        // String sum = String.valueOf(Integer.valueOf(l1String) +
        // Integer.valueOf(l2String));
        String sum = String.valueOf(new BigInteger(l1String).add(new BigInteger(l2String)));

        System.out.println(sum);

        ListNode temp = new ListNode();
        temp.val = Integer.parseInt(String.valueOf(sum.charAt(0)));
        ListNode temp1 = temp;

        for (int i = 1; i < sum.length(); i++) {
            ListNode node = new ListNode();
            node.val = Integer.parseInt(String.valueOf(sum.charAt(i)));
            temp1.next = node;
            temp1 = temp1.next;
        }

        return reverse(temp);

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

}
