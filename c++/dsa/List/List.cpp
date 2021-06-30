#include <iostream>
#include <list>
#include <algorithm>

using namespace std;

int main()
{

    list<int> numbers = {1, 2, 31, 4, 51, 42};
    numbers.sort();
    for (int &i : numbers)
    {
        cout << i << endl;
    }

    return 0;
}