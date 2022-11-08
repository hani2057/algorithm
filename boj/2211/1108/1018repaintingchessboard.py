import sys

n, m = map(int, input().split())
lst = [list(sys.stdin.readline().rstrip()) for _ in range(n)]
result = []

for i in range(n - 7):
    for j in range(m - 7):
        b_cnt = 0
        w_cnt = 0
        for k in range(i, i + 8):
            for l in range(j, j + 8):
                if (k + l) % 2:
                    if lst[k][l] != 'W':
                        w_cnt += 1
                    if lst[k][l] != 'B':
                        b_cnt += 1
                else:
                    if lst[k][l] != 'B':
                        w_cnt += 1
                    if lst[k][l] != 'W':
                        b_cnt += 1
        result.append(min(b_cnt, w_cnt))

print(min(result))