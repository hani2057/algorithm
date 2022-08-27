import sys

sys.stdin = open('prefixsum.txt')

def my_max(lst):
    maxval = lst[0]
    for el in lst:
        if el > maxval:
            maxval = el
    return maxval

def my_min(lst):
    minval = lst[0]
    for el in lst:
        if el < minval:
            minval = el
    return minval


for testcase in range(1, int(input()) + 1):
    n, m = map(int, input().split())
    lst = list(map(int, input().split()))

    prefixsum_lst = []

    for i in range(n - m + 1):
        prefixsum = 0
        for j in range(m):
            prefixsum += lst[i + j]
        prefixsum_lst.append(prefixsum)

    result = my_max(prefixsum_lst) - my_min(prefixsum_lst)
    print(f'#{testcase} {result}')