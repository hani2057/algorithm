from ast import Num
import sys

sys.stdin = open('14073binarysearchtree.txt')

def inorder(i):
    if i <= n:
        inorder(i * 2)
        global num
        tree[i] = num
        num += 1
        inorder(i * 2 + 1)


for testcase in range(int(input())):
    n = int(input())
    tree = [0] * (n + 1)
    num = 1
    inorder(1)

    print(f'#{testcase + 1} {tree[1]} {tree[n // 2]}')
