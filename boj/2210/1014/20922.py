import sys
from collections import defaultdict

n, k = map(int, input().split())
lst = list(map(int, sys.stdin.readline().split()))

l, r, dic = 0, 0, defaultdict(int)
max_len = 1
while r < n:
    if dic[lst[r]] < k:
        dic[lst[r]] += 1
        r += 1
    else:
        dic[lst[l]] -= 1
        l += 1
    if max_len < r - l:
        max_len = r - l

print(max_len)