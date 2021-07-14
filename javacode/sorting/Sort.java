package javacode.sorting;

public class Sort { // BigO -> O(N^2)
    public void insertionSort(int[] nums) {
        int length = nums.length;
        int ans = 0;
        for (int i = 0; i < length - 1; ++i) {
            ans = i;
            for (int j = i; j < length; ++j) {
                if (nums[j] < nums[ans]) {
                    ans = j;
                }
            }
            int temp = nums[i];
            nums[i] = nums[ans];
            nums[ans] = temp;
        }
        print(nums);
    }

    public void quickSort(int[] nums, int left, int right) {
        if (left >= right)
            return;
        int pivot = (left + right) / 2;
        int index = partition(nums, left, right, pivot);
        quickSort(nums, left, index - 1);
        quickSort(nums, index, right);
    }

    private int partition(int[] nums, int left, int right, int pivot) {
        while (left <= right) {

            while (nums[left] < nums[pivot]) {
                left++;
            }
            while (nums[right] > nums[pivot]) {
                right--;
            }
            if (left >= right) {
                int temp = nums[left];
                nums[left] = nums[right];
                nums[right] = temp;
                left++;
                right--;
            }
        }
        return left;
    }

    private void print(int[] nums) {
        for (int i : nums) {
            System.out.println(i);
        }
    }
}
