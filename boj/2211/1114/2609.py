from collections import defaultdict

n, m = map(int, input().split())

if n == 1 or m == 1:
    print(1)
    print(max(n, m))
else:
    nd = defaultdict(int)
    md = defaultdict(int)

    for i in range(2, n + 1):
        while not (n % i):
            nd[i] += 1
            n /= i
    for j in range(2, m + 1):
        while not (m % j):
            md[j] += 1
            m /= j

    # least common multiple, greatest common factor
    lcm = 1
    gcf = 1

    for key in nd.keys():
        if key in md.keys():
            lcm *= key ** min(nd[key], md[key])
    
    for key in nd.keys():
        if key in md.keys():
            gcf *= key ** max(nd[key], md[key])
        else:
            gcf *= key ** nd[key]
    for key in md.keys():
        if key not in nd.keys():
            gcf *= key ** md[key]

    print(lcm)
    print(gcf)