import sys
from collections import defaultdict

sys.stdin = open('1970change.txt')

t = int(input())
for tc in range(1, t + 1):
    money = int(input())
    money_unit_lst = [50000, 10000, 5000, 1000, 500, 100, 50, 10]

    dic = {money_unit: 0 for money_unit in money_unit_lst}

    for key, value in dic.items():
        dic[key] += money // key
        money -= key * dic[key]

    print(f'#{tc}')
    print(*dic.values())