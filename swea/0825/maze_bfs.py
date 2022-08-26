import sys

sys.stdin = open('maze.txt')

def find_start(lst, size):
    for i in range(size):
        for j in range(size):
            if lst[i][j] == 2:
                return (i, j)

# def bfs():
    
#     while queue:
#         (i, j) = queue.pop(0)
#         for d in range(4):
#             ni = i + di[d]
#             nj = j + dj[d]
#             if 0 <= ni <= size and 0 <= nj <= size:
#                 if lst[ni][nj] == 3:
#                     return 1
#                 if lst[ni][nj] == 0 and not visited[(ni, nj)]:
#                     queue.add((ni, nj))
#                     visited[ni][nj] = 1

for testcase in range(10):
    casenum = int(input())
    size = 16
    lst = [list(map(int, input())) for _ in range(size)]

    i, j = find_start(lst, size)

    queue = []
    queue.append((i, j))

    visited = [[0] * size for _ in range(size)]
    visited[i][j] = 1

    result = 0
    di = [0, 0, 1, -1]
    dj = [1, -1, 0, 0]

    while queue:
        (i, j) = queue.pop(0)
        for d in range(4):
            ni = i + di[d]
            nj = j + dj[d]
            if 0 <= ni < size and 0 <= nj < size:
                if lst[ni][nj] == 3:
                    result = 1
                    break
                if lst[ni][nj] == 0 and visited[ni][nj] == 0:
                    queue.append((ni, nj))
                    visited[ni][nj] = 1
        if result == 1:
            break
    
    print(f'#{casenum} {result}')