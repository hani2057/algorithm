import sys

sys.stdin = open('ladder.txt')

for testcase in range(10):
    testnum = int(input())
    ladderboard = [list(map(int, input().split())) for _ in range(100)]

    i = 99
    j = ladderboard[-1].index(2)
    direction = 'up'

    while i >= 0:
        if direction == 'up':
            if j > 0 and ladderboard[i][j - 1] == 1:
                direction = 'left'
                j -= 1
            elif j < 99 and ladderboard[i][j + 1] == 1:
                direction = 'right'
                j += 1
            else:
                i -= 1
        elif direction == 'left':
            if ladderboard[i - 1][j] == 1:
                direction = 'up'
                i -= 1
            else:
                j -= 1
        elif direction == 'right':
            if ladderboard[i - 1][j] == 1:
                direction = 'up'
                i -= 1
            else:
                j += 1

    print(f'#{testnum} {j}')