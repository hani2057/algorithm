import sys

a_len, b_len = map(int, input().split())
a = set(map(int, sys.stdin.readline().rstrip().split()))
b = set(map(int, sys.stdin.readline().rstrip().split()))

print(len(a ^ b))
