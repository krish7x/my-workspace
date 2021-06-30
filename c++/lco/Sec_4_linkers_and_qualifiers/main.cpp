#include <iostream>
using namespace std;


//Refrences to linkers

//https://stackoverflow.com/questions/9248533/how-does-a-linker-know-what-all-libraries-to-link
//https://stackoverflow.com/questions/3322911/what-do-linkers-do



int lifeUp(){
    static int life = 3;
    
    return ++life;
}


int main(){
	
	int life = 3;
    
    cout<<"Your Current life is: "<<life<<endl;
    
    life = lifeUp();
    
    cout<<"Your first updated life is: "<<life<<endl;
    
    life = lifeUp();
    
    cout<<"Your second updated life is: "<<life<<endl;
	
	return 0;
}