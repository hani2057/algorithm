import sys

sys.stdin = open('7567bowl.txt')

bowls = input()
total = len(bowls)

if total == 0:
    result = 0
elif total == 1:
    result = 10

prev = bowls[0]
result = 10
for i in range(1, total):
    if bowls[i] == prev:
        result += 5
    else:
        result += 10
    prev = bowls[i]

print(result)
