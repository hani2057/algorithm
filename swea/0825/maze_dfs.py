import sys
from pprint import pprint

sys.stdin = open('maze.txt')

def find_start(lst, size):
    for i in range(size):
        for j in range(size):
            if lst[i][j] == 2:
                return (i, j)

for testcase in range(10):
    casenum = int(input())
    size = 16
    lst = [list(map(int, input())) for _ in range(size)]

    i, j = find_start(lst, size)

    stack = []
    stack.append((i, j))

    visited = [[0] * size for _ in range(size)]
    visited[i][j] = 1

    di = [0, 0, 1, -1]
    dj = [1, -1, 0, 0]

    result = 0
    while stack:
        (i, j) = stack.pop()

        for d in range(4):
            ni = i + di[d]
            nj = j + dj[d]
            if 0 <= ni < size and 0 <= nj < size:
                if lst[ni][nj] == 0 and visited[ni][nj] == 0:
                    stack.append((ni, nj))
                    visited[ni][nj] = 1
                if lst[ni][nj] == 3:
                    result = 1
                    break

        if result == 1:
            break

    # 또는
    # while stack:
    #     (i, j) = stack[-1]

    #     for d in range(4):
    #         ni = i + di[d]
    #         nj = j + dj[d]
    #         if 0 <= ni < size and 0 < nj <= size:
    #             if lst[ni][nj] == 0 and visited[ni][nj] == 0:
    #                 stack.append((ni, nj))
    #                 visited[ni][nj] = 1
    #                 break
    #             if lst[ni][nj] == 3:
    #                 result = 1
    #                 break
    #     else:
    #         stack.pop()

    #     if result == 1:
    #         break

    print(f'#{casenum} {result}')