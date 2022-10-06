import sys

sys.stdin = open('strcount.txt')

for testcase in range(int(input())):
    str1 = input()
    str2 = input()

    max_count = 0
    for char1 in str1:
        count = 0
        for char2 in str2:
            if char1 == char2:
                count += 1
        if count > max_count:
            max_count = count

    print(f'#{testcase + 1} {max_count}')