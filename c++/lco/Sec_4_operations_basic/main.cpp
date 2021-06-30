#include <iostream>
using namespace std;

int main(){
	
	int age = 21;
    
    long int age_into_days = age; 
     age_into_days *= 365;
    
    printf("No of days i lived %ld\n",age_into_days);
    
    if(age >= 20) {
        puts("Adulthood");
    }
    if(age >=13 && age <= 19){
        puts("Teenage");
    }
	
	return 0;
}