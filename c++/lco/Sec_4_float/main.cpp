#include <iostream>
using namespace std;

int main(){
	
    
    printf("The size of this datatype is %lld bits \n",sizeof(float) * 8);
        
	
    float num = 10.5 + 10.7;
    
    
    //if we want to find the original value of the float means we have to add %1.30f to find out the precised value
    
    //printf("The value of num is %1.30f \n",num);

    
    printf("The value of num is %f \n",num);
    
	if(num == 21.200001){
        puts("Got it right!");
    }else {
        puts("May be something else");
    }
    
	return 0;
}