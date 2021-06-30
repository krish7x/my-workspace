#include <iostream>
using namespace std;

class Rectangle {
    double _length;
    double _breadth;
    
public :
    Rectangle(double l = 1, double b = 1){
        _length = l;
        _breadth = b;
    }
    
    double Area(){
        return _length * _breadth;
    }
    int compare(Rectangle r){
        return this->Area() > r.Area(); //using 'this' if we miss this also the answer will be fine
    }
};

int main(){

    Rectangle r1(8.5,3.5);
    Rectangle r2(5.0,8.3);
    
   
    
    cout<<"Value of r1 is : "<<r1.Area()<<endl;
    cout<<"Value of r2 is : "<<r2.Area()<<endl;
    
    if(r1.compare(r2)){
        puts("r1 is bigger");
    }else {
        puts("r2 is bigger");
    }

    cout<<r1.compare(r2)<<endl;
    
	return 0;
}