#include <iostream>
using namespace std;

int main(){
	
	unsigned int a = 6;
	unsigned int b = 7;
	
	unsigned int c = a & b; //AND
	unsigned int d = a | b; //OR
	unsigned int e =  ~ b; //NOT
	unsigned int f = a ^ b; //XOR
	unsigned int g = a << b; //LEFT SHIFT
	unsigned int h = a >> b; // RIGHT SHIFT
	
	cout<<c<<endl;
	cout<<d<<endl;
	cout<<e<<endl;
	cout<<f<<endl;
	cout<<g<<endl;
	cout<<h<<endl;
	
	
	return 0;
}