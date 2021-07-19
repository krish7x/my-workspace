#include <iostream>
#include <string>
using namespace std;

void bubble_sort(int arr[], int n) {
   for (int i = 0; i < n - 1; i++) {
		// i represents how many elements have bubbled to correct place
		bool swapped = false;
		for (int j = 0; j + 1 < n - i; j++) {
			if (arr[j] > arr[j + 1]) {
				//swap
				swapped = true;
				int temp = arr[j];
				arr[j] = arr[j + 1];
				arr[j + 1] = temp;
			}
		}
		if (!swapped) {
			return;
		}
	}
}

void print_array(int arr[], int n) {
    for (int i = 0; i < n; ++i) {
        cout << arr[i] << endl;
    }
    cout << endl;
}

int main() {
    int arr[] = { 5, 8, 2, 5, 8, 20, 445, 22, 67 };
    int n = sizeof(arr) / sizeof(arr[0]);

    bubble_sort(arr, n - 1);
    print_array(arr, n);

    return 0;
}