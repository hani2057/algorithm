import sys

sys.stdin = open('6190increase.txt')

for testcase in range(int(input())):
    n = int(input()) # n은 주어진 정수의 개수
    lst = list(map(int, input().split()))

    com_result = []
    multiples = []
    ans = 0
 
    def com(idx, n, r, res):
        if idx == r:
            com_result.append(res[:])
            return

        start = 0
        if res:
            start = max(res) + 1

        for i in range(start, n):
            res.append(i)
            com(idx+1, n, r, res)
            res.pop()
    
    com(0, n, 2, [])

    for combi in com_result:
        multiples.append(lst[combi[0]] * lst[combi[1]])
    
    def f():
        for num in multiples[::-1]:
            if num < 10:
                ans = num
                return
            
            while num < 10:
                temp1 = num % 10
                num //= 10
                temp2 = num % 10
                if temp2 > temp1:
                    break
            else:
                ans = num
                return
    f()


    print(f'#{testcase + 1} {ans}')
