from collections import deque

n = int(input())

q = deque(range(1, n + 1))

while len(q) >= 2:
    top1 = q.popleft()
    top2 = q.popleft()
    q.append(top2)
print(q.pop())
