import sys

sys.stdin = open('pascal.txt')

# tc는 testcase, n은 파스칼삼각형의 크기
# grid는 값을 저장할 이차원배열, 0번 인덱스는 1로 미리 채움
for tc in range(int(input())):
    n = int(input())
    grid = [[1] + [0] * (n - 1) for _ in range(n)]

    for i in range(1, n):
        for j in range(1, i + 1):
            grid[i][j] = grid[i - 1][j - 1] + grid[i - 1][j]

    # 출력 예쁘게 하려고 0인 값들을 제거
    # 이때 `line = [el for el in line if el not in {0}]`과 같이 코드를 짜게 되면, 
    # line이라는 변수를 grid와 상관없이 별도로 정의한 것으로 되어 원하는 동작을 하지 않음
    for idx, line in enumerate(grid):
        grid[idx] = [el for el in line if el not in {0}]

    # unpack을 이용한 출력
    print(f'#{tc + 1}')
    for line in grid:
        print(*line)
