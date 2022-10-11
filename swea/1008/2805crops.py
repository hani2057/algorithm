import sys

sys.stdin = open('2805crops.txt')

t = int(input())
for tc in range(1, t + 1):
    n = int(input())
    lst = [list(map(int, list(input()))) for _ in range(n)]

    # result는 결과값을 저장할 변수
    result = 0
    
    # s, e를 중앙의 인덱스로 초기화한 뒤
    # 각 행에 대해서 처음 반은 s 인덱스와 e 인덱스를 벌리고
    # 나머지 반은 s 인덱스와 e 인덱스를 좁히면서 순회
    s, e = n // 2, n // 2
    for i in range(n):
        for j in range(s, e + 1):
            result += lst[i][j]

        if i < n // 2:
            s -= 1
            e += 1
        else:
            s += 1
            e -= 1
    
    print(f'#{tc} {result}')