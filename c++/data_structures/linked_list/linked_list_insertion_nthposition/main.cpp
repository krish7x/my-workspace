#include <bits/stdc++.h>
using namespace std;

struct Node
{
public:
	int data;
	Node *next;
};

Node *head;

void Insert(int data, int n)
{
	Node *temp1 = NULL;
	temp1 = new Node();
	temp1->data = data;
	temp1->next = NULL;

	if (n == 1)
	{
		temp1->next = head;
		head = temp1;
		return;
	}

	Node *temp2 = head;
	for (int i = 0; i < n - 2; i++)
	{
		temp2 = temp2->next;
	}
	temp1->next = temp2->next;
	temp2->next = temp1;
}

void Print()
{
	Node *temp = head;
	while (temp != NULL)
	{
		printf("%d", temp->data);
		temp = temp->next;
		cout << " ";
	}
	printf("\n");
}

int main()
{
	head = NULL;
	Insert(5, 1);
	Insert(6, 2);
	Insert(10, 1);
	Insert(9, 3);
	Print();
	return 0;
}
