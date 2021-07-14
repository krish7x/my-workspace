#include <bits/stdc++.h>

using namespace std;

void rotatebyleft(int arr[],int n)
{
    int temp = arr[0],i;
    for(i = 0;i<n-1;i++)
    {
        arr[i] = arr[i+1];
    }
    arr[i] = temp;
}

void rotatetimes(int arr[], int d, int n)
{
    for(int i=0;i<d;i++)
        rotatebyleft(arr,n);



}

void printArray(int arr[],int n)
{
    for(int i=0; i<n; i++)
    {
        cout<<arr[i]<<"";
    }
}

int main()
{
 int arr[] = {1,2,3,4,5,6,7,8,9,10};
 int n = 10;
 int d =  4;
 rotatetimes(arr,d,n);
 printArray(arr,n);
}
