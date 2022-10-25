m, n = map(int, input().split())

def is_prime(num):
    for i in range(2, int(num**0.5) + 1):
        if not num % i:
            return False
    return True

if m == 1:
    m += 1

for i in range(m, n + 1):
    if is_prime(i):
        print(i)