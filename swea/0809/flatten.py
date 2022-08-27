import sys

sys.stdin = open('flatten.txt')

for testcase in range(1, 11):
    dumpCount = int(input())
    lst = list(map(int, input().split()))
    result = 0

    for _ in range(dumpCount):
        maxval = 0
        maxidx = 0
        minval = 100
        minidx = 0
        
        for idx, val in enumerate(lst):
            if val > maxval:
                maxval = val
                maxidx = idx
            if val < minval:
                minval = val
                minidx = idx
        
        lst[maxidx] = maxval - 1
        lst[minidx] = minval + 1

    result = max(lst) - min(lst)
    print(f'#{testcase} {result}')
