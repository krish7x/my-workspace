#include <iostream>
#include <string>
using namespace std;

int main(){
	
	string superheros[7] = {"superman","spiderman","batman","aquaman","antman","ironman","thor"};
	
	int i = 0;
	
	puts("-----while loop-------");
	
	while(i < 7) {
		if(i == 1) {
			i++;
			cout<<"I dont like "<<superheros[1]<<" that much but still i love the following superheros"<<endl;
			continue;
		}
		if(i == 3) {
			cout<<"I would like to break here"<<endl<<endl;
			break;
		}
		cout<<"I love "<<superheros[i]<<endl;
		i++;
	}
	i = 0;
	
	puts("-----do while loop-------");

	do {
		
		cout<<"I love "<<superheros[i]<<endl;
		i++;
	}while(i < 7);
	
	return 0;
}