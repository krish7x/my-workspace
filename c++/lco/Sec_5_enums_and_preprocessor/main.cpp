#include <iostream>
#include <string>

struct User{
	const int id;
	int age;
	
	User() : id(001), age(21) {}
};

int main(){
	
	using namespace std;

	//stack 
	
	string name = "krishna";
	User krish;
	
	//heap
	
	int* heap_id = new int;
	*heap_id = 120;
	
	User* akash = new User();
	
	delete heap_id;
	delete akash;
	
	
	return 0;
}