import sys

sys.stdin = open('4466score.txt')

t = int(input())
for tc in range(1, t + 1):
    n, k = map(int, input().split())
    scores = list(map(int, input().split()))

    scores.sort(reverse=True)
    
    result = 0
    for i in range(k):
        result += scores[i]

    print(f'#{tc} {result}')