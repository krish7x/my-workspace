package javacode.runner;

import javacode.sorting.Sort;

// import javacode.hashing.Hashing;

public class Runner {

    public static void main(String[] args) {
        // Hashing goes here
        /*
         * Hashing hashing = new Hashing(); Integer[] nums = { 1, 2, 3, 4, 5, 6, 7, 8,
         * 9, 10, 11, 12 }; hashing.hashTable(nums, 8);
         */

        // Sorting goes here
        int[] arr = { 5, 8, 2, 5, 8, 20, 445, 22, 67 };
        // Sort.mergeSort(arr, 0, arr.length - 1);
        Sort.selectionSort(arr);
        Sort.print(arr);
    }
}
