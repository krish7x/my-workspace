#include <iostream>
#include <string>
using namespace std;

class User {
    
    int age = 21;
    int rollno = 16;
    
public : 
    string name = "default";
    
    void greetingMessage();
    
    void setAge(const int & newAge) {
        age = newAge; 
    }
    
    int getAge() const //like here 
        {
        return age; 
        };
    int getRollno() const; //we should add const here
    
    
};

//METHOD SEPERATIONS USING SCOPE RESOLUTION OPERATOR

void User :: greetingMessage() {
        cout<<"Hello, How are you ? Mr."<<name<<endl;
    }

int User :: getRollno() const //as well as here for const Objects
    {
        return rollno;
    }

int main(){
	
    User krish;
    krish.name = "Krishna Kumar";
    krish.greetingMessage();
    krish.setAge(22);
    cout<<"Krishna's age is "<<krish.getAge()<<endl;
    
    
    //CREATING A CONST OBJECT
    const User akash; 
    // -> creating a const object but if we want to access any methods inside the class
    //we should add const in front of that particular methods
    cout <<"Akash's age is "<<akash.getAge()<<endl;
    cout <<"Akash's roll no is  "<<akash.getRollno()<<endl;

    
    
	return 0;
}