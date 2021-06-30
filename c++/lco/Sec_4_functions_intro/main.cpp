#include <iostream>
#include "adder.h"
using namespace std;


void lifeUp(int life) {
   ++life; 
}

void lifeDown(int *life){
    --(*life);
}

void lifeNew(int &life){
    ++life;
}



int main(){
	
	int life = 3;
    
    lifeUp(life);
    cout<<life<<endl;
    
    /*
     call by value if we pass just an integer it never gets change unless and untill we pass the reference of the 
    variable and it should catch up with the pointer
    */
    
    int lifeD = 3;
    lifeDown(&lifeD);
    cout<<lifeD<<endl;
    
    /*
    we should pass the reference of the variable we created to the function which we have created
    */
    
    int lifeN = 4;
    lifeNew(lifeN);
    cout<<lifeN<<endl;
    
    /*
    call by reference can also be down passing just an variable without the reference but in the function we 
    should use the parameter as a reference so that even the copy of the variable also changes because the memory
    pointer gets changed
    */
    
    int a1 = 5;
    int a2 = 9;
    float b1 = 4.2;
    float b2 = 5.2;
    
    
    cout<<addMe(a1,a2)<<endl;
    cout<<addMe(b1,b2)<<endl;
    
    
	return 0;
}