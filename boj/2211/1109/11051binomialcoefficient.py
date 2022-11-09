n, k = map(int, input().split())

new_n = 1
new_k = 1

for i in range(n, n - k, -1):
    new_n *= i
for j in range(k, 0, -1):
    new_k *= j

print((new_n // new_k) % 10007)