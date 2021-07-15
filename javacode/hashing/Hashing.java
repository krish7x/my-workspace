package javacode.hashing;

import java.util.Hashtable;

public class Hashing {
    public void hashTable(Integer[] nums, int element) {
        Hashtable<Integer, Integer> ht = new Hashtable<>();
        for (Integer n : nums) {
            ht.put(hashFunction(n, 10), n);
        }
        System.out.println(ht.toString());
        System.out.println(ht.get(hashFunction(element, 10)));
    }

    private Integer hashFunction(int num, int mod) {
        return num % mod;
    }
}
