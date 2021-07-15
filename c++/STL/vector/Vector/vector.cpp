#include <iostream>
#include <vector>
#include <string>

using namespace std;

int main() {
    vector<int> numbers;
    vector<string> myProfile{"Krishna Kumar", "M.C.A", "DGVC", "21"};

    for (int i = 0; i < 100; ++i) {
        numbers.push_back(i);
    }

    for (auto i = numbers.begin(); i != numbers.end(); ++i) {
        cout << *i << endl;
    }

    cout << numbers.size() << "\n"
         << numbers.capacity() << "\n"
         << numbers.empty() << "\n";

    for (string i : myProfile) {
        cout << i << endl;
    }

    return 0;
}