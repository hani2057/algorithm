import sys

sys.stdin = open('calculator.txt')

for testcase in range(10):
    n = int(input())
    s = input()
    stack = []
    result = []

    for char in s:
        if char.isdecimal():
            result.append(char)
        else:
            if not stack:
                stack.append(char)
            elif char == '+':
                while stack:
                    result.append(stack.pop())
                stack.append(char)
            elif char == '*':
                stack.append(char)
    while stack:
        result.append(stack.pop())

    for el in result:
        if len(stack) == 0 or el.isdecimal():
            stack.append(int(el))
        elif el == '+':
            temp1 = stack.pop()
            temp2 = stack.pop()
            stack.append(temp2 + temp1)
        elif el == '*':
            temp1 = stack.pop()
            temp2 = stack.pop()
            stack.append(temp2 * temp1)

    print(f'#{testcase + 1} {stack.pop()}')
