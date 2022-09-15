import sys

sys.stdin = open('1232arithmetic_operation.txt')

def cal(v):
    if tree[v].isdigit():
        return int(tree[v])
    else:
        left_child = cal(left[v])
        right_child = cal(right[v])
        if tree[v] == '+':
            return left_child + right_child
        if tree[v] == '-':
            return left_child - right_child
        if tree[v] == '*':
            return left_child * right_child
        if tree[v] == '/':
            return left_child / right_child

for testcase in range(10):
    n = int(input()) # 노드의 개수
    tree = [0] * (n + 1)
    left = [0] * (n + 1)
    right = [0] * (n + 1)

    for i in range(n):
        lst = list(input().split())
        tree[i + 1] = lst[1]
        if len(lst) == 4:
            left[int(lst[0])] = int(lst[2])
            right[int(lst[0])] = int(lst[3])
    
    print(f'#{testcase + 1} {int(cal(1))}')
