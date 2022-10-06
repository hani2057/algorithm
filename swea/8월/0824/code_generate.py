from operator import truediv
import sys

sys.stdin = open('code_generate.txt')

for testcase in range(10):
    casenum = int(input())
    lst = list(map(int, input().split()))

    isdone = False

    while not isdone:
        for i in range(1, 6):
            temp = lst.pop(0)
            if temp - i <= 0:
                temp = 0
                lst.append(temp)
                isdone = True
                break
            else:
                temp -= i
                lst.append(temp)
        
    print(f'#{casenum}', end=' ')
    print(*lst)
