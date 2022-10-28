import sys

n = int(input())
lst = list(map(int, sys.stdin.readline().rstrip().split()))

m = max(lst)
new_lst = [num / m * 100 for num in lst]
print(sum(new_lst) / n)