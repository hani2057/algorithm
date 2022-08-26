import sys
from pprint import pprint

sys.stdin = open('maze.txt')

def find_start(lst, size):
    for i in range(size):
        for j in range(size):
            if lst[i][j] == 2:
                return (i, j)

def dfs(i, j, visited):
    for (di, dj) in [(0, 1), (0, -1), (1, 0), (-1, 0)]:
        ni = i + di
        nj = j + dj
        if 0 <= ni < size and 0 <= nj < size:
            if lst[ni][nj] == 3:
                return 1
            if lst[ni][nj] == 0 and (ni, nj) not in visited:
                visited.add((ni, nj))
                tmp = dfs(ni, nj, visited)
                if tmp:
                    return tmp

                # 또는
                # if dfs(ni, nj, visited) == 1:
                #     return 1
                
                # 또는 이거는 지금 이 상황에서는 안 되지만 이런 방식
                # return dfs(ni, nj, visited)
    return 0

## 질문: 라인 21 부분(재귀 끝내기) 다른 방법?

for testcase in range(10):
    casenum = int(input())
    size = 16
    lst = [list(map(int, input())) for _ in range(size)]

    i, j = find_start(lst, size)

    visited = set()
    visited.add((i, j))

    result = dfs(i, j, visited)

    print(f'#{casenum} {result}')