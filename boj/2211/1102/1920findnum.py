import sys

n = int(input())
n_set = set(map(int, sys.stdin.readline().rstrip().split()))

m = int(input())
m_lst = list(map(int, sys.stdin.readline().rstrip().split()))

for num in m_lst:
    if num in n_set:
        print(1)
    else:
        print(0)
