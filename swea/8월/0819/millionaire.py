import sys

sys.stdin = open('millionaire.txt')

for testcase in range(int(input())):
    days = int(input())
    lst = list(map(int, input().split()))

    print(lst)