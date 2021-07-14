#include <bits/stdc++.h>
using namespace std;

 

void Selection_sort(int arr[], int n){
    int smallerNumber;
    for(int i = 0; i < n-1; i++){
         smallerNumber = i;
        for(int j = i + 1; j < n ; j++){
            if(arr[j] < arr[smallerNumber])
                smallerNumber = j;
        }
        
   int temp = arr[i];
   arr[i] = arr[smallerNumber];
   arr[smallerNumber] = temp;
    
}
    
    
};

void printArray(int arr[], int size)  
{  
    for (int i = 0; i < size; i++)  
        cout << arr[i] << " ";  
    cout << endl;  
}  

int main() {
    
    int arr[] = {19,45,12,5,65,2,32,14,9,37,42,89,74,13};
    int n = sizeof(arr)/sizeof(arr[0]); 
    cout << "Original Array :\n";
    printArray(arr,n);
    Selection_sort(arr,n);
    cout << "Sorted Array :\n";
    printArray(arr,n);
    
    return 0;
}