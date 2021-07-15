package javacode.sorting;

public class Sort {

    public static void insertionSort(int[] nums) { // BigO -> O(N) best case
        int prev, key;
        for (int i = 1; i < nums.length; ++i) {
            key = nums[i];
            prev = i - 1;
            while (prev >= 0 && nums[prev] > key) {
                nums[prev + 1] = nums[prev];
                prev = prev - 1;
            }
            nums[prev + 1] = key;
        }
    }

    public static void selectionSort(int[] nums) { // BigO -> O(N^2)
        int length = nums.length;
        int ans = 0;
        for (int i = 0; i < length - 1; ++i) {
            ans = i;
            for (int j = i + 1; j < length; ++j) {
                if (nums[j] < nums[ans]) {
                    ans = j;
                }
            }
            swap(nums, i, ans);
        }
    }

    public static void quickSort(int[] nums, int left, int right) { // BigO -> O(logn)

        if (left >= right)
            return;
        int pivot = (left + right) / 2;
        int index = partition(nums, left, right, pivot);
        quickSort(nums, left, index - 1);
        quickSort(nums, index, right);
    }

    private static void merge(int[] nums, int left, int middle, int right) {

        int leftSize = middle - left + 1;
        int rightSize = right - middle;

        int[] leftArr = new int[leftSize];
        int[] rightArr = new int[rightSize];

        for (int i = 0; i < leftSize; ++i) {
            leftArr[i] = nums[left + i];
        }
        for (int i = 0; i < rightSize; ++i) {
            rightArr[i] = nums[middle + 1 + i];
        }

        int leftIndex = 0, rightIndex = 0, intialIndex = left;

        while (leftIndex < leftSize && rightIndex < rightSize) {
            if (leftArr[leftIndex] <= rightArr[rightIndex]) {
                nums[intialIndex] = leftArr[leftIndex];
                leftIndex++;
            } else {
                nums[intialIndex] = rightArr[rightIndex];
                rightIndex++;
            }
            intialIndex++;
        }

        while (leftIndex < leftSize) {
            nums[intialIndex] = leftArr[leftIndex];
            leftIndex++;
            intialIndex++;
        }

        while (rightIndex < rightSize) {
            nums[intialIndex] = rightArr[rightIndex];
            rightIndex++;
            intialIndex++;
        }

    }

    public static void mergeSort(int[] nums, int left, int right) { // BigO -> O(n logn)
        if (left < right) {
            int middle = left + (right - left) / 2;
            mergeSort(nums, left, middle);
            mergeSort(nums, middle + 1, right);
            merge(nums, left, middle, right);
        }
    }

    private static int partition(int[] nums, int left, int right, int pivot) {

        while (left <= right) {

            while (nums[left] < nums[pivot]) {
                left++;
            }
            while (nums[right] > nums[pivot]) {
                right--;
            }
            if (left >= right) {
                swap(nums, left, right);
                left++;
                right--;
            }
        }
        return left;
    }

    public static void print(int[] nums) {
        for (int i : nums) {
            System.out.print(i + " ");
        }
    }

    private static void swap(int[] nums, int a, int b) {
        int temp = nums[a];
        nums[a] = nums[b];
        nums[b] = temp;
    }
}
