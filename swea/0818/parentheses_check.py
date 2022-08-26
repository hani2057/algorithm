import sys

sys.stdin = open('parentheses_check.txt')

def parentheses_check(target):
    stack = []
    for char in target:
        if char == '(':
            stack.append(char)
        elif char == '{':
            stack.append(char)
        elif char == ')':
            if len(stack) == 0:
                return 0
            elif stack.pop(-1) != '(':
                return 0
        elif char == '}':
            if len(stack) == 0:
                return 0
            elif stack.pop(-1) != '{':
                return 0
    if len(stack) != 0:
        return 0
    return 1

for testcase in range(int(input())):
    text_given = input()
    print(f'#{testcase + 1} {parentheses_check(text_given)}')
