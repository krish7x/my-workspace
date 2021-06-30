#include <iostream>
using namespace std;

int main(){
	
	int * my_pointer;
	
	//To avoid memory leaks we use try catch blocks and also delete method to delete unused space in an pointer array
	
	try{
		my_pointer = new int[1000];
		cout<<"Memory gets allocated\n";
	}
	catch(...){
		cout<<"Memory allocation failed!\n";
	}
	
	delete [] my_pointer;
	
	return 0;
}