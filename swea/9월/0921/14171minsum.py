import sys
 
sys.stdin = open('14171minsum.txt')

# tc == testcase, n == 가로/세로 길이
for tc in range(int(input())):
    # n은 배열의 크기, lst는 input에 대한 이차원배열
    n = int(input())
    lst = [list(map(int, input().split())) for _ in range(n)]

    for i in range(1, n):
        lst[0][i] += lst[0][i - 1]
        lst[i][0] += lst[i - 1][0]

    for i in range(1, n):
        for j in range(1, n):
            up = lst[i - 1][j]
            left = lst[i][j - 1]
            if up <= left:
                lst[i][j] += up
            else:
                lst[i][j] += left
    print(f'#{tc + 1} {lst[-1][-1]}')
