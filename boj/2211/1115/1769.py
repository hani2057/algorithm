x = input()

cnt = 0
n = 0
while len(x) > 1:
    for char in x:
        n += int(char)
    x = str(n)
    n = 0
    cnt += 1

print(cnt)
print('YES') if x in ('3', '6', '9') else print('NO')




# x = int(input())

# cnt = 0
# n = 0
# while x >= 10:
#     while x >= 1 :
#         n += x % 10
#         x = x // 10
#     x = n
#     n = 0
#     cnt += 1

# print(cnt)
# print('YES') if x in (3, 6, 9) else print('NO')
