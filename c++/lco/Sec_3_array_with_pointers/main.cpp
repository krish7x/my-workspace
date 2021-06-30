#include <iostream>
using namespace std;

int main(){

	//creating an array
	int int_array[5] = {1,2,3,4,5};
	cout<<int_array[1]<<endl;
	
	//initialzing and assinging the values with an index
	int array_one[4];
	array_one[0] = 10;
	array_one[1] = 20;

	
	cout<<array_one[0] <<endl;
	//cout<<array_one[1] <<endl; //if we try to access the variable which doesn't exist it will print the default value '0'
	
	//creating a pointer for array_one and changing its values
	//usually pointer deontes to the first position of an array
	*array_one = 20;
	cout<<array_one[0] <<endl;
	
	//creating a new pointer named pointer_one and assinging the array 
	int *pointer_one = array_one;
	
	//increementing the pointer
	//pointer_one++;
	
	//changing the value of array_one[1]
	*pointer_one = 100;
	cout<<array_one[0] <<endl;


	
	return 0;
}