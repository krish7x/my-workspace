#include <iostream>
#include <string>

using namespace std;

int fact(int n)
{
    if (n == 1)
        return 1;
    if (n == 2)
        return 2;
    return n * fact(n - 1);
}

int main()
{
    int a = 15;
    cout << fact(a) << "\n";
    return 0;
}