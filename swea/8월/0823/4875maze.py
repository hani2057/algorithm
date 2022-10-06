import sys

sys.stdin = open('4875maze.txt')

t = int(input())
for tc in range(1, t + 1):
    n = int(input())
    lst = [list(map(int, list(input()))) for _ in range(n)]

    try:
        i = n - 1
        j = lst[-1].index(2)

        di = [1, -1, 0, 0]
        dj = [0, 0, 1, -1]

        visited = [[0] * n for _ in range(n)]
        stack = [(i, j)]
        exists = False

        while stack and not exists:
            now = stack[-1]
            i, j = now[0], now[1]
            visited[i][j] = 1
            for d in range(4):
                ni = i + di[d]
                nj = j + dj[d]
                if 0 <= ni < n and 0 <= nj < n:
                    if lst[ni][nj] == 3:
                        exists = True
                        break
                    if not visited[ni][nj]:
                        stack.append((ni, nj))
                        break
            else:
                stack.pop()
        print(f'#{tc} {int(exists)}')
    except:
        print(f'#{tc} error')