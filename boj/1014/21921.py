n, x = map(int, input().split())
lst = list(map(int, input().split()))

max_lst = []
max_visit = 0
for i in range(x):
    max_visit += lst[i]
max_lst.append(max_visit)

for j in range(n - x):
    max_visit = max_visit - lst[j] + lst[j + x]
    max_lst.append(max_visit)

max_visit = max(max_lst)


if max_visit:
    print(max_visit)
    print(max_lst.count(max_visit))
else:
    print('SAD')