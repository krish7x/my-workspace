def checkValidParenthesis(s: str) -> bool:
    stack = []
    checkObj = {
        ")": "(",
        "}": "{",
        "]": "["
    }

    for data in s:
       # print(data)
        if data in checkObj:
            print(data)
            if stack and stack[-1] == checkObj[data]:
                stack.pop()
            else:
                return False
        else:
            stack.append(data)
    return True if not stack else False


print(checkValidParenthesis("[()]"))
