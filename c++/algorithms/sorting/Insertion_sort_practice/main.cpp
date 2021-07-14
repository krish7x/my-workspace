#include <iostream>
using namespace std;

void insertion_sort(int arr[], int n) {
	int smaller_ele;
	for (int i = 0; i < n - 1; ++i) {
		smaller_ele = i;
		for (int j = i; j < n; ++j) {
			if (arr[j] < arr[smaller_ele])
				smaller_ele = j;
		}
		int temp = arr[i];
		arr[i] = arr[smaller_ele];
		arr[smaller_ele] = temp;
	}
}

void print_array(int arr[], int n) {
	for (int i = 0; i < n; ++i) {
		cout << arr[i] << endl;
	}
	cout << endl;
}

int main() {
	int arr[] = {12, 56, 78, 10, 23, 45, 62, 98};
	int size = sizeof(arr) / sizeof(arr[0]);
	insertion_sort(arr, size);
	print_array(arr, size);
	return 0;
}