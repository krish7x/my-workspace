#include <bits/stdc++.h>

using namespace std;

struct Node
{
public:
	int data;
	Node *next;
};

Node *head; //global variable

void Insert(int x)
{
	Node *temp = NULL;
	temp = new Node();
	temp ->data = x;
	temp ->next = head;
	head = temp;
}

void Print(Node *n)
{
	puts("After Insertion :");
	while (n != NULL)
	{
		cout << n->data << endl;
		n = n->next; //exit condition
	}
}

int main()
{

	head = NULL;
	int n, s;
	puts("Total no.of insertion :");
	cin >> n;

	for (int i = 0; i < n; i++)
	{
		puts("Enter the number :");
		cin >> s;
		Insert(s);
		Print(head);
	}

	return 0;
}