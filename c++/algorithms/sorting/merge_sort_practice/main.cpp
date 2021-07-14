#include <iostream>

using namespace std;

void merge(int arr[], int start, int middle, int end)
{
    int left_length = middle - start + 1;
    int right_length = end - middle;

    int *left = new int[left_length];
    int *right = new int[right_length];

    for (int i = 0; i < left_length; i++)
    {
        left[i] = arr[start + i];
    }
    for (int i = 0; i < right_length; i++)
    {
        right[i] = arr[middle + i + 1];
    }

    left[left_length] = INT_MAX;
    right[right_length] = INT_MAX;

    int left_ptr = 0;
    int right_ptr = 0;

    for (int i = start; i <= end; i++)
    {
        if (left[left_ptr] < right[right_ptr])
        {
            arr[i] = left[left_ptr];
            left_ptr++;
        }
        else
        {
            arr[i] = right[right_ptr];
            right_ptr++;
        }
    }
}

void merge_sort(int arr[], int start, int end)
{
    if (start < end)
    {
        int middle = (start + end) / 2;
        merge_sort(arr, start, middle);
        merge_sort(arr, middle + 1, end);
        merge(arr, start, middle, end);
    }
}

void print_array(int arr[], int size)
{
    for (int i = 0; i < size; ++i)
    {
        cout << arr[i] << endl;
    }
    cout << endl;
}

int main()
{

    int arr[] = {10, 50, 12, 36, 45, 78, 10, 25, 65, 98, 19, 32, 34, 56, 5};
    int size = sizeof(arr) / sizeof(arr[0]);
    merge_sort(arr, 0, size - 1);
    print_array(arr, size);

    return 0;
}