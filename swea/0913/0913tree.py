import sys

sys.stdin = open('0913tree.txt')

def inorder(tree, size, node):
    if node <= size:
        inorder(tree, size, node * 2)
        print(tree[node], end='')
        inorder(tree, size, node * 2 + 1)

for testcase in range(10):
    size = int(input())
    tree = [0] * (size + 1)
    for i in range(size):
        lst = list(input().split())
        tree[i + 1] = lst[1]
    print(f'#{testcase + 1}', end=' ')
    inorder(tree, size, 1)
    print()