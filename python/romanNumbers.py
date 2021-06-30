class Solution:
    def romanToInt(self, s: str) -> int:
        romanObj = {
            "I": 1,
            "V": 5,
            "X": 10,
            "L": 50,
            "C": 100,
            "D": 500,
            "M": 1000,
        }

        if(len(s) == 1):
            print(romanObj.get(s))
            return romanObj.get(s)

        prev = 0
        result = 0
        for i in reversed(range(0, len(s))):
            num = romanObj.get(i)

            if(num >= prev):
                result += num
                prev = num
            else:
                result -= num

        return result


print(Solution.romanToInt("X", "LVIII"))
