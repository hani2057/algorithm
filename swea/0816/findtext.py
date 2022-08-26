import sys

sys.stdin = open('findtext.txt')

def findtext(pattern, target):
    for i in range(len(target) - len(pattern) + 1):
        count = 0
        for j in range(len(pattern)):
            if target[i + j] != pattern[j]:
                break
            else:
                count += 1
        if count == len(pattern):
                return 1
    return 0

for testcase in range(int(input())):
    pattern = input()
    target = input()

    print(f'#{testcase + 1} {findtext(pattern, target)}')