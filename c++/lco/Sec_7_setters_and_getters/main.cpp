#include <iostream>
#include <string>
using namespace std;

class User {
    
    int age = 21; //Private Variable cannot be accessed by an object 
    
    // _age -> private variable // __age -> system variable
    
public : 
    string name = "default";
    
    void greetingMessage() {
        cout<<"Hello, How are you ? Mr."<<name<<endl;
    }
    
    void setAge(const int & newAge) {
        age = newAge; //setting the private variable into a new reference variable
    }
    
    int getAge(){
        return age; //getting the age
        }
    
    
};


int main(){
	
    User krish;
    krish.name = "Krishna Kumar";
    krish.greetingMessage();
    krish.setAge(22);
    cout<<krish.getAge()<<endl;
    
	return 0;
}