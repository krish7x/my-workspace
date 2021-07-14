#include <iostream>
using namespace std;

void Bubble_sort(int arr[], int n)
{
	for (int i = 0; i < n - 1; i++)
	{
		bool success = false;
		for (int j = 0; j + 1 < n - 1; j++)
		{
			if (arr[j] > arr[j + 1])
			{
				success = true;
				int temp = arr[j];
				arr[j] = arr[j + 1];
				arr[j + 1] = temp;
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
	for (int i = 0; i < n; i++)
	{
		cout << arr[i] << endl;
	}
	cout << endl;
}

int main()
{
	int arr[] = {98, 96, 94, 92, 88, 86, 84, 82, 78, 76, 74};
	int size = sizeof(arr) / sizeof(arr[0]);

	Bubble_sort(arr, size);
	print_array(arr, size);
}