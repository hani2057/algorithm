import sys

sys.stdin = open('sum.txt')
# sys.stdin = open ('sum_input.txt')

for testcase in range(20): # 테스트케이스 수 고칠 것
    t = int(input())
    lst = [list(map(int, input().split())) for _ in range(100)]
    sum_lst = []

    for i in range(100):
        temp_sum = 0
        for j in range(100):
            temp_sum += lst[i][j]
        sum_lst.append(temp_sum)
    
    for j in range(100):
        temp_sum = 0
        for i in range(100):
            temp_sum += lst[i][j]
        sum_lst.append(temp_sum)
    
    for i in range(100):
        temp_sum1 = 0
        temp_sum2 = 0
        for j in range(100):
            if i == j:
                temp_sum1 += lst[i][j]
            elif i + j == 99:
                temp_sum2 += lst[i][j]
        sum_lst.append(temp_sum1)
        sum_lst.append(temp_sum2)

    print(f'#{testcase + 1} {max(sum_lst)}')

#테스트케이스 수 10개로 고칠 것