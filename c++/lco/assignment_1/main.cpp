#include <iostream>
#include <string>
using namespace std;

int main(){
	string first_name;
	string last_name;
	cout<< "Enter your first name : \n";
	getline(cin,first_name);
	cout<<"Enter your last name : \n";
	getline(cin,last_name);
	cout<< "Hey "<<first_name<<" "<<last_name<< " welcome to my project! \n";
	return 0;
}