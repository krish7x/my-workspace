#include <iostream>
using namespace std;

int main(){
	
	int rating =  6;
	
	if(rating == 5) {
		puts("Rating is five");
	}
	else if(rating == 6){
		puts("Rating is six");
	}
	else{
		puts("Rating is other than five");
	}
	
	if(12) {
		puts("It executes"); //any integer other than 0 or NULL will be executed
	}
	
	if(0) {
		puts("It does not execute"); //O and NULL cannot execute
	}
	
	
	//ternary operations
	
	rating == 5 ? puts("True Block") : puts ("False Block");
	
	int rating_feedback = 4;
	
	rating_feedback == 4 ? puts("Rating is awesome!!") : puts("We'll work on it!");
	
	return 0;
}