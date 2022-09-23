from collections import defaultdict
import sys

sys.stdin = open('1219findroute.txt')

for _ in range(10):
    tc, n = map(int, input().split())
    lst = list(map(int, input().split()))

    dic = defaultdict(list)

    for i in range(n):
        dic[lst[2 * i]].append(lst[2 * i + 1])

    visited = set()
    stack = [0]
    exists = False

    while stack and not exists:
        node_now = stack[-1]
        visited.add(node_now)
        for next_node in dic[node_now]:
            if next_node == 99:
                exists = True
                break
            if next_node not in visited:
                stack.append(next_node)
                break
        else:
            stack.pop()

    print(f'#{tc} {int(exists)}')
