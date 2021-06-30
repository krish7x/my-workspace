#include <iostream>
using namespace std;

int main(){
	
	int rating;
	puts("Enter your rating...\n");
	cin>>rating;
	
	if(rating == 1){
		puts("rating very poor!\n");
	}else if(rating == 2){
		puts("rating is moderate!\n");
	}else if(rating == 3){
		puts("rating is good!\n");
	}else if(rating == 4) {
		puts("rating is awesome!\n");
	}else if(rating == 5){
		puts("rating is excellent!");
	}else{
		puts("Please enter a rating between (1-5)..Thank You!\n");
	}
	
	
	
	return 0;
}