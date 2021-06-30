#include <iostream>
#include <string>
using namespace std;

class Laptop {
    string _name = "";
    string _model = "";
    int _price = 0;
    Laptop(); //default constructor --> Shortcut to disable the constructor
    
public:

//constructors
   
    Laptop(const string &name, const string &model, const int & price); //Parametarized constructor
    Laptop(const Laptop &); //Copy Constructor
    ~Laptop(); //destructor
    
    //Methods of class
    string getName(){return _name;}
    string getModel(){return _model;}
    int getPrice(){
        printf("The memory is %p\n",this); // -> this pointer points to the current memory location of an object
        return _price;}
};

//Default constructor
Laptop :: Laptop() : _name("TUF Gaming"), _model("Fx5050Dt"), _price(70000){
    puts("Default constructor");
}

//parameteraized construtor
Laptop :: Laptop(const string &name, const string &model, const int & price): _name(name),
_model(model), _price(price){
    puts("Parametarized Constructor");
}

//Copy constructor

Laptop :: Laptop(const Laptop & values){
    puts("Copy Constructor");
    _name = values._name+"1";
    _model = "Gaming " + values._model;
    _price = 10000 + values._price;
}

Laptop :: ~Laptop() {
    
   
    printf("Destroyed :%s\n",_name.c_str());
}

int main(){
	
    
//Default constructor
//    Laptop asus;
//    cout<<"The name of the laptop is : "<<asus.getName()<<endl;
//    cout<<"The model name of the laptop is : "<<asus.getModel()<<endl; --> disabled
//    cout<<"The price of the laptop is : "<<asus.getPrice()<<endl;
//    cout<<"\n";
    
//parameteraized construtor
    Laptop lenovo("Lenovo", "Legion", 90000);
    cout<<"The name of the laptop is : "<<lenovo.getName()<<endl;
    cout<<"The model name of the laptop is : "<<lenovo.getModel()<<endl;
    cout<<"The price of the laptop is : "<<lenovo.getPrice()<<endl;
    printf("The memory of lenovo is %p\n", &lenovo);
    cout<<"\n";
    
    
//Copy constructor

    //copying the object -> just like variable we can also copy the object properties
    Laptop lenovo1 = lenovo;
    cout<<"The name of the laptop is : "<<lenovo1.getName()<<endl;
    cout<<"The name of the laptop is : "<<lenovo1.getModel()<<endl;
    cout<<"The name of the laptop is : "<<lenovo1.getPrice()<<endl;
    printf("The memory of lenovo1 is %p\n", &lenovo1);

    
    cout<<"\nDestructor"<<endl;
	return 0;
}