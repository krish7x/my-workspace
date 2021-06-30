#include <iostream>
#include <string>

//****MACROS****

#define console_log(a) cout << a <<endl
#define end return 0
#define endmessage puts("Program ends here")
#define NT int32_t

//avoid macros as much as possible

using namespace std;



int main(){
	
    NT age = 21;
    string name = "krishna kumar";
    
    console_log(age);
    console_log(name);
    
    endmessage;
    
    end;
    
	return 0;
}