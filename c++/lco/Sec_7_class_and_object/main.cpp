#include <iostream>
#include <string>
using namespace std;

class User {
    
    int age = 21; //Private Variable cannot be accessed by an object
    
public : 
    string name = "default";
    
    void greetingMessage(){
        cout<<"Hello, How are you ? Mr."<<name<<endl;
    }
    
    
};


int main(){
	
    User krish;
    krish.name = "Krishna Kumar";
    krish.greetingMessage();
    
    User akash;
    akash.name = "Akash";
    akash.greetingMessage();
    
	return 0;
}