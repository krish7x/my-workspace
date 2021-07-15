#include <iostream>
using namespace std;

void merge(int arr[], int from, int middle, int to) {

    int left_length = middle - from + 1;
    int right_length = to - middle;

    int *left = new int[left_length];
    int *right = new int[right_length];

    for (int i = 0; i < left_length; i++) {
        left[i] = arr[from + i];
    }
    for (int i = 0; i < right_length; i++) {
        right[i] = arr[middle + i + 1];
    }

    left[left_length] = INT_MAX;
    right[right_length] = INT_MAX;

    int left_pointer = 0;
    int right_pointer = 0;
    for (int i = from; i <= to; i++) {
        if (left[left_pointer] > right[right_pointer]) {
            arr[i] = right[right_pointer];
            right_pointer++;
        }
        else {
            arr[i] = left[left_pointer];
            left_pointer++;
        }
    }
}

void merge_sort(int arr[], int from, int to) {
    if (from < to) {
        int middle = from + (to - from) / 2;
        merge_sort(arr, from, middle);
        merge_sort(arr, middle + 1, to);
        merge(arr, from, middle, to);
    }
}

void merge_sort_execute(int arr[], int to) {
    merge_sort(arr, 0, to);
}

void print_array(int arr[], int n) {
    for (int i = 0; i < n; i++) {
        cout << arr[i] << endl;
    }
    cout << endl;
}

int main() {

    int arr[] = {5, 4, 3, 2, 1};
    int n = sizeof(arr) / sizeof(arr[0]);

    merge_sort_execute(arr, n - 1);
    print_array(arr, n);

    return 0;
}