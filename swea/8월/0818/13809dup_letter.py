import sys

sys.stdin = open('13809dup_letter.txt')

# tc == testcase
t = int(input())
for tc in range(1, t + 1):
    dup_word = input()

    isDuplicated = True
    while isDuplicated:
        for i in range(len(dup_word) - 1):
            if dup_word[i] == dup_word[i + 1]:
                dup_word = dup_word[:i] + dup_word[i + 2:]
                break
        else:
            isDuplicated = False

    print(f'#{tc} {len(dup_word)}')
    