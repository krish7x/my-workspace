#include <iostream>
#include <string>

using namespace std;

void bubble_sort(int arr[], int n)
{
    for (int i = 0; i < n ; i++)
    {
        bool success = false;

        for (int j = i + 1; j  < n ; j++)
        {
            if (arr[i] > arr[j])
            {
                success = true;
                int temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
        if (!success)
        {
            return;
        }
    }
}

void print_array(int arr[], int n)
{
    for (int i = 0; i < n; ++i)
    {
        cout << arr[i] << endl;
    }
    cout << endl;
}

int main()
{

    int arr[] = {5,4,3,2,1};
    int n = sizeof(arr) / sizeof(arr[0]);

    bubble_sort(arr, n - 1);
    print_array(arr, n);

    return 0;
}