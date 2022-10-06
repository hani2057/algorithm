import sys

sys.stdin = open('1961rotatenumlist.txt')

t = int(input())
for tc in range(1, t + 1):
    n = int(input())
    lst = [list(map(int, input().split())) for _ in range(n)]

    lst_rotate_90 = [[0] * n for _ in range(n)]
    lst_rotate_180 = [[0] * n for _ in range(n)]
    lst_rotate_270 = [[0] * n for _ in range(n)]

    # rotate lst 90 degrees
    for i in range(n):
        for j in range(n):
            lst_rotate_90[i][j] = lst[n - 1 - j][i]

    # rotate lst 180 degrees
    for i in range(n):
        for j in range(n):
            lst_rotate_180[i][j] = lst[n - 1 - i][n - 1 - j]

    # rotate lst 270 degrees
    for i in range(n):
        for j in range(n):
            lst_rotate_270[i][j] = lst[j][n - 1 -i]

    print(f'#{tc}')
    for i in range(n):
        for j in range(n):
            print(lst_rotate_90[i][j], end='')
        print(' ', end='')
        for j in range(n):
            print(lst_rotate_180[i][j], end='')
        print(' ', end='')
        for j in range(n):
            print(lst_rotate_270[i][j], end='')
        print()



#####################################################################
# 다른 사람 풀이

# 첫 번째
t = int(input())
for tc in range(t):
    n = int(input())
    matrix = [list(input().split()) for _ in range(n)]
    result = [[] for _ in range(n)]
    for _ in range(3):
        matrix = list(zip(*matrix[::-1]))
        for i in range(n):
            result[i].append("".join(matrix[i]))
    print(f"#{tc + 1}")
    for j in range(n):
        print(*result[j])


# 두 번째
t = int(input())
def rotate(a, b):
    for i in range(n):
        for j in range(n):
            b[j][n-1-i] = a[i][j]
 
for tc in range(1, t+1):
    n = int(input())
    array = [list(map(int, input().split())) for _ in range(n)]
    array_90 = [[0]*n for _ in range(n)]
    array_180 = [[0]*n for _ in range(n)]
    array_270 = [[0]*n for _ in range(n)]
     
    rotate(array, array_90)
    rotate(array_90, array_180)
    rotate(array_180, array_270)
     
    print(f'#{tc}')
    for i in range(n):
        print(''.join(map(str, array_90[i])), end=' ')
        print(''.join(map(str, array_180[i])), end=' ')
        print(''.join(map(str, array_270[i])), end=' ')
        print()