import sys

sys.stdin = open('input.txt')

for testcase in range(1, 11):
    n = int(input())
    lst = list(map(int, input().split()))
    result = 0

    for i in range(2, n - 2):
        if lst[i] > lst[i - 1] and lst[i] > lst[i - 2] and lst[i] > lst[i + 1] and lst[i] > lst[i +2]:
            result += lst[i] - max(lst[i - 1], lst[i - 2], lst[i + 1], lst[i + 2])
        else:
            continue

    print(f'#{testcase} {result}')
