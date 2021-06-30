#include <iostream>
using namespace std;

int main(){
	
	bool isSignedIn = true;
	bool isAdmin = true;
	bool isGoogleAccount = true;
	bool isFacebookAccount = false;
	
	if((isGoogleAccount || isFacebookAccount) && isAdmin){
		cout<<"Welcome admin!!"<<endl;
	}else {
		puts("Access deined\n");
	}
	
	if(isSignedIn || isGoogleAccount || isFacebookAccount){
		puts("Welcome user!!\n");
	}
	else {
		puts("Please sign in first!! \n");
	}
	
	return 0;
}