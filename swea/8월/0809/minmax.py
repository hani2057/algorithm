import sys

sys.stdin = open('minmax.txt')

for testcase in range(1, int(input()) + 1):
    n = int(input())
    lst = list(map(int, input().split()))

    maxval = lst[0]
    minval = lst[0]
    for num in lst:
        if num > maxval:
            maxval = num
        elif num < minval:
            minval = num
    print(f'#{testcase} {maxval - minval}')