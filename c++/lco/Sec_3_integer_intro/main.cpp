#include <iostream>
#include <cstdint>

using namespace std;

int main(){
	
	//1byte = 8bits
	
	//we are checking in terms of bits
	
	printf("The size of this datatype is %lld \n", sizeof(int64_t) * 8 );
	
	//binary value of 22
	int fun = 0b10110;
	
	//hex value of 22
	int fun_hex = 0x16;
	
	
	printf("The binaryfun value is %d \n",fun);
	
	printf("The hex fun value is %d \n",fun_hex);

	return 0;

}