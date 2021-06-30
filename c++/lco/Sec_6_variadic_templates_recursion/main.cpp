#include <iostream>
#include <string>
using namespace std;

template <typename T>

void func(T name){
    cout << "Coming from func1  .." <<name << endl;
}
template <typename T, typename... Args>

void func(T t, Args... args){
    cout<< "Coming from func2  .." <<t << endl;
    func(args...);
}

int main(){
	
    string name = "krishna";
    
    func(8);
    func(10,5,66,12.3,5,name);
    
	return 0;
}