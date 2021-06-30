#include <iostream>
using namespace std;

int main(){
	
	char google_api = 'k';
    
    try{
        
        puts("fetching the google api\n");
        puts("did some testing based on some conditions\n");
        puts("if the condition is true will return or throw the value\n");
        throw google_api;
        puts("After the return or throw statements the below code never gets executed\n");
        
    }catch(int x){
        puts("Integer exceptions are handled here!\n");
    }catch(float f){
        puts("float exceptions are handled here!\n");
    }catch(...){
        puts("Something unusal happened\n");
    }
    
    puts("The code will continue executing after the try/catch block\n");
	
	return 0;
}