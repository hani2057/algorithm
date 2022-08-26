import sys

sys.stdin = open('fly.txt')

for testcase in range(int(input())):
    n, m = map(int, input().split())
    lst = [list(map(int, input().split())) for _ in range(n)]
    flycatch = []

    for i in range(n - m + 1):
        for j in range(n - m + 1):
            tempsum = 0
            for k in range(m):
                for l in range(m):
                    tempsum += lst[i + k][j + l]
            flycatch.append(tempsum)
    
    max_flycatch = max(flycatch)
    print(f'#{testcase + 1} {max_flycatch}')
