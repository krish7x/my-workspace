#include <iostream>
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

int End_Partition(int arr[], int start, int end){
    int pivot = arr[end];
    int wall = start;
    
    for(int i = start; i < end; ++i){
        if(arr[i] <= pivot){
            int temp = arr[wall];
            arr[wall] = arr[i];
            arr[i] = temp;
            wall ++;
        }
    }
    arr[end] = arr[wall];
    arr[wall] = pivot;
    
    return wall;
}

int MedianOfThree(int arr[], int start, int middle , int end) {
    int array[] = {arr[start], arr[middle], arr[end]}; 
    Selection_sort(array,3);
    if(array[1] == arr[start]) {
        return start;
    }
    else if(array[1] == arr[middle]) {
        return middle;
    }
    else {
        return end;
    }
  }

int Median_Partition(int arr[], int start, int end){
    int median_value = MedianOfThree(arr, start, (start + end ) / 2, end);
    int pivot = arr[median_value];
    if(median_value != end){
        arr[median_value] = arr[end];
    }
   // cout << "PIVOT --- >" << pivot << endl;
    int wall = start;
    
    for(int i = start; i < end; ++i){
        if(arr[i] <= pivot){
            int temp = arr[wall];
            arr[wall] = arr[i];
            arr[i] = temp;
            wall ++;
        }
    }
    arr[end] = arr[wall];
    arr[wall] = pivot;
    
    return wall;
}




void Quick_sort(int arr[], int start, int end) {
    if(start < end) {
        int median = Median_Partition(arr,start,end);
        Quick_sort(arr, start, median -1);
        Quick_sort(arr, median + 1 , end);
    }
}


void Print(int arr[], int n){
    for(int i=0; i < n; ++i) {
        cout << arr[i] << endl;
    }
    cout << endl;
}




int main() {
    
    int arr[] = {5,4,3,2,1,10,19,52,42,65};
    int size = sizeof(arr) / sizeof(arr[0]);
    Quick_sort(arr,0,size - 1);
    Print(arr,size);
    
    return 0;
}