# import sys

# sys.stdin.readline()

total_price = int(input())
products_num = int(input())

valid = 0

for _ in range(products_num):
    price, quantity = map(int, input().split())
    valid += price * quantity

if total_price == valid:
    print('Yes')
else:
    print('No')
