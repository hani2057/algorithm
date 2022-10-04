import sys
from collections import deque

sys.stdin = open('14279calculation.txt')


def bfs():
    while queue:
        num, cnt = queue.popleft()
        for num_calculated in (num + 1, num - 1, num * 2, num - 10):
            if 1 <= num_calculated <= 1000000:
                if num_calculated == num_to_be:
                    print(f'#{tc} {cnt + 1}')
                    return
                if num_calculated not in visited:
                    queue.append((num_calculated, cnt + 1))
                    visited.add(num_calculated)



t = int(input())
for tc in range(1, t + 1):
    num, num_to_be = map(int, input().split())
    
    queue = deque()
    queue.append((num, 0))

    visited = set()
    visited.add(num)

    bfs()
