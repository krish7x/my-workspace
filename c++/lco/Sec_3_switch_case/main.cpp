#include <iostream>
using namespace std;

int main(){
	
	int rating = 10;
	
	switch(rating) {
		case 1: 
			puts("Rating is one");
			break;
		case 2: 
			puts("Rating is two");
			break;
		case 3: 
			puts("Rating is three");
			break;
		case 4: 
			puts("Rating is four");
			break;
		case 5: 
			puts("Rating is five");
			break;
		default : 
			puts("Please Enter a rating between (1-5) ! ");
			break;
	}
	
	
	
	return 0;
}