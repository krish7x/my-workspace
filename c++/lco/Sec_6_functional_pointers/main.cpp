#include <iostream>
using namespace std;

void myName(){
    puts("Krishna Kumar.G");
}

int main(){
	
    //creating a functional pointer
    
    void (*my_functional_pointer)() = myName;
    
    //data type should be the same and in order to use the calling paranthesis we shlould wrap the pointer variable
    //inside the paranthesis
    
    my_functional_pointer();
    (*my_functional_pointer)() ; //another way of calling it
    
    
	return 0;
}