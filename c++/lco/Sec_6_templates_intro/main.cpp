#include <iostream>
using namespace std;

template<typename K>


K addMe(K a, K b)
{
    return a + b;
}


//Templates can be used as a functions but it should be predefined and we can use any keywords instead of the
//data type and it can adopt with any kinds of a data type and acts as just as a template

int main(){
	
    int a1 = 5;
    int a2 = 10;
    float b1 = 10.3;
    float b2 = 6.9;
    
    cout<<addMe(a1,a2)<<endl;
    cout<<addMe(b1,b2)<<endl;
    
	return 0;
}