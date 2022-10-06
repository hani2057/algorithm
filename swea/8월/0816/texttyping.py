import sys

sys.stdin = open('texttyping.txt')

for testcase in range(int(input())):
    target, pattern = input().split()

    count = 0
    for i in range(len(target)):
        subcount = 0
        for j in range(len(pattern)):
            if target[i + j] != pattern[j]:
                break
            else:
                subcount += 1
        if subcount == len(pattern):
            count += 1

    print(f'#{testcase + 1} {len(target) + count * (1 - len(pattern))}')