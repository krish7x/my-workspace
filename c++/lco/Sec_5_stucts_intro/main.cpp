#include <iostream>
using namespace std;

struct User {
	const int uId;
	const char *name;
	const char *email;
	int course_count;
};


int main(){
	
	User krish = {001, "krishna", "krishnakumar99g@gmail.com", 3};
	User akash = {002, "akash", "akash99m@gmail.com", 6};
	
	krish.name = "krishna kumar";//no error the const is only for the pointer and not for the values
	//krish.uId = 1212; -> but if we change like this it will gives an error
	
	User *krishna = &krish;
	krishna -> course_count = 5;
	
	cout<<krish.uId<<endl;
	cout<<krish.course_count<<endl;
	cout<<akash.email<<endl;
	
	return 0;
}