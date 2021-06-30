#include <iostream>
using namespace std;
#define NULL 0 //redefining null as 0

//same function name used many times --> function overloading

void getMe(int a){
    printf("The integer value is %d\n",a);
}

void getMe(double a){
    printf("The float value is %f\n", a);
}

void getMe(int * a){
    printf("The pointer value is %p\n",a);
}

int main(){
	
    
    getMe(nullptr); //we can use nullptr to point out the pointer but we should be more cautious in using it
    
	return 0;
}