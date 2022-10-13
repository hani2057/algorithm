import sys

sys.stdin = open('2491.txt')

n = int(input())
lst = list(map(int, input().split()))

count = 1
max_len = 1

for i in range(1, n):
    if lst[i - 1] <= lst[i]:
        count += 1
    else:
        count = 1
    
    if max_len < count:
        max_len = count

count = 1
for i in range(1, n):
    if lst[i - 1] >= lst[i]:
        count += 1
    else:
        count = 1
    
    if max_len < count:
        max_len = count

print(max_len)





















i = 0
while True:
    if lst[i] < lst[i + 1]:
        is_increasing = True
        break
    elif lst[i] > lst[i + 1]:
        is_increasing = False
        break
    i += 1

for i in range(1, n):
    if lst[i - 1] == lst[i]:
        same_len += 1
        tmp_len += 1
        continue

    if lst[i - 1] <= lst[i] and is_increasing:
        tmp_len += 1
        if i == n - 1:
            max_len = tmp_len
    elif lst[i - 1] >= lst[i] and not is_increasing:
        tmp_len += 1
        if i == n - 1:
            max_len = tmp_len
    elif lst[i - 1] > lst[i] and is_increasing:
        max_len = max(max_len, tmp_len)
        is_increasing = False
        tmp_len = 1 + same_len
        same_len = 1
    elif lst[i - 1] < lst[i] and not is_increasing:
        max_len = max(max_len, tmp_len)
        is_increasing = True
        tmp_len = 1 + same_len
        same_len = 1

print(max_len)
