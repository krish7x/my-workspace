#include <iostream>
using namespace std;

int main(){
	
	int n[] = {1,2,3,4,5,6,7,8,9,10};
	
	int len = sizeof(n)/sizeof(n[0]);
	
	for(int i = 0; i < len ; i++){
		cout<<n[i] <<endl;
	}
	
	//modern forrange syntax
	
	puts("For range loop!!");
	
	for(int i : n){
     cout<< i <<endl;
	}
	
	return 0;
}