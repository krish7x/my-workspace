package javacode.searching;

public class BinarySearch {
    public int search(int[] nums, int target) {
        int left = 0, right = nums.length - 1;
        return binarySearch(nums, left, right, target);
    }

    public int binarySearch(int[] nums, int left, int right, int target) {
        if (right >= left) {
            int mid = left + (right - left) / 2;
            if (nums[mid] == target)
                return mid;
            if (nums[mid] > target)
                return binarySearch(nums, left, mid - 1, target);
            return binarySearch(nums, mid + 1, right, target);
        }
        return -1;
    }
}
