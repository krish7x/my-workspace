#include <iostream> 
#include <vector> 
#include <algorithm>

using namespace std; 

int main() 
{ 
	vector<int> g1; 
    vector<int> g2; 
    vector<int> g3; 

    vector<int>::iterator itr;
        
//assign operations in vector
cout << "-----G1------" << endl;
    
    for (int i = 10; i > 0; i--) 
		g1.push_back(i); 

	cout << "Output of begin and end: "; 
	for ( itr = g1.begin(); itr != g1.end(); ++itr) 
		cout << *itr << " "; 
        
        sort(g1.begin(),g1.end());

	cout << "\nOutput of cbegin and cend: "; 
	for ( auto i = g1.cbegin(); i != g1.end(); ++i) 
		cout << *i << " "; 
    
    sort(g1.begin(),g1.end());
	cout << "\nOutput of rbegin and rend: "; 
	for (auto ir = g1.rbegin(); ir != g1.rend(); ++ir) 
		cout << *ir << " "; 
    cout << endl;
    cout << "The size of g1 is : " << g1.size();
    
	cout << "\nOutput of crbegin and crend : "; 
	for(auto itr:g1)
    cout << itr << " ";
    cout << endl;
    
cout << "-----G2------" << endl;
 
   g2.assign(7,100); // It will print 7xtimes of (100) 
   for(auto i : g2){
       cout << "The value of g2 is :" << i << endl;
   }
    cout << "The size of g2 is :" << g2.size();
    cout << endl;
    
cout << "-----G3------" << endl;
    
    g3.assign({1,2,3,4,5});
    for(auto i : g3){
       cout << "The value of g3 is :" << i << endl;
   }
    cout << "The size of g3 is :" << g3.size();
    

    cout << endl;
	return 0; 
} 
