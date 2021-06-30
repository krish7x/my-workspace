#include <iostream>
using namespace std;

int main(){
	int life = 5;
	
	//pointer decleration
	
	int *my_pointer;
	my_pointer = &life;
	printf("The pointer address of my life variable is %p\t",my_pointer);
	
	return 0;
}