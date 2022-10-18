import sys

sys.stdin = open('14501.txt')

n = int(input())

terms = []
payments = []
dp = [0] * (n + 1)

for i in range(n):
    t, p = map(int, input().split())
    terms.append(t)
    payments.append(p)

for j in range(n - 1, -1, -1):
    if terms[j] + j > n:
        dp[j] = dp[j + 1]
    else:
        dp[j] = max(dp[j + 1], payments[j] + dp[j + terms[j]])

print(dp[0])