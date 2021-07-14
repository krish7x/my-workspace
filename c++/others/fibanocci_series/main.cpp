#include <iostream>

using namespace std;


int main() {
    
    int first = 0, second = 1, next , n;
    cout << "Enter the positive number\n";
    cin >> n;
    
    
    cout << second << endl;
    next = first + second;
    
   for(int i = 0; i < n ; i++) {
       cout << next << endl;
       first = second;
       second = next;
       next = first + second;
   }
    
    
    
    return 0;
}