import sys

sys.stdin = open('numcard.txt')

for testcase in range(1, int(input()) + 1):
    n = int(input())
    lst = list(map(int, input()))
    
    max_counted_num = lst[0]
    max_count = 0
    countlst = [0] * 10
    
    for i in range(n):
        countlst[lst[i]] += 1
    
    for i in range(10):
        if countlst[i] >= max_count:
            max_count = countlst[i]
            max_counted_num = i

    print(f'#{testcase} {max_counted_num} {max_count}')