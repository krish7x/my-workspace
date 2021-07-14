#include <bits/stdc++.h>
using namespace std;

struct Node {
	int data;
	Node* next;
};

void print(Node *n){
    while(n != NULL) {
        cout << n->data << endl;
        n = n-> next;
    }
}


int main(){
	Node* head = NULL;
	Node* second = NULL;
	Node* third = NULL;
    Node* fourth = NULL;
	
	head = new Node();
	second = new Node();
	third = new Node();
    fourth = new Node();
	
	head -> data = 1;
	head -> next = second;
        
	second -> data = 2;
	second -> next = third;
	
	third -> data = 3;
	third -> next = fourth;
    
    
    fourth -> data = 4;
    fourth -> next = NULL;
    
    print(head);
	
	return 0;
}