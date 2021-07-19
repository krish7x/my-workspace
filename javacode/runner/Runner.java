package javacode.runner;

import javacode.sorting.Sort;

// import javacode.hashing.Hashing;

public class Runner {

    public static void main(String[] args) {
        int[] nums = { 33, 44, 11, 4 };
        int left = 0, right = nums.length - 1;

        // Sorting goes here
        // Sort.insertionSort(nums);
        // Sort.selectionSort(nums);
        // Sort.bubbleSort(nums);
        // Sort.quickSort(nums, left, right);
        // Sort.mergeSort(nums, left, right);
        Sort.print(nums);
    }
}
