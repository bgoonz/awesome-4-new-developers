def balance(arr):
    open_bracket = ["[", "{", "("]
    close_bracket = ["]", "}", ")"]
    stack = []
    for i in arr:
        if i in open_bracket:
            stack.append(i)
        elif i in close_bracket:
            pos = close_bracket.index(i)
            if len(stack) >= 0 and (open_bracket[pos] == stack[len(stack) - 1]):
                stack.pop()
            else:
                return "unbalanced"
    if len(stack) == 0:
        return "balanced"
    else:
        return "unbalanced"


arr = ["{", "[", "]", "}"]
print(balance(arr))
