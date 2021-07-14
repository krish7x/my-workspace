#include <iostream>
using namespace std;

struct Node
{
    int data;
    Node *next;
};

Node *new_node;

void Insert(Node *prev_node, int data)
{

    if (prev_node != NULL)
    {
        new_node = NULL;
        new_node = new Node();
        new_node->data = data;
        new_node->next = prev_node->next;
        prev_node->next = new_node;
    }
}

void Print(Node *n)
{
    while (n != NULL)
    {
        cout << n->data << endl;
        n = n->next;
    }
    cout << endl;
}

int main()
{

    Node *value = NULL;
    value = new Node();
    Insert(value, 10);
    int n;
    int s;
    cout << "Enter count :" << endl;
    cin >> n;
    for (int i = 0; i < n; ++i)
    {
        cout << "Enter Data :" << endl;
        cin >> s;
        Insert(new_node, s);
    }
    Print(value);

    return 0;
}