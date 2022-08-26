import sys

sys.stdin = open('palindrome2.txt')

def is_pal(str, start_idx, pal_len):
    for i in range((pal_len - 1) // 2 + 1):
        if str[start_idx] != str[start_idx + pal_len - 1]:
            return False
    return True


for testcase in range(10):
    casenum = int(input())
    lst = [input() for _ in range(100)]
    lst_reverse = list(map(lambda x: ''.join(x), zip(*lst)))
    lst.extend(lst_reverse)
    def func():
        for pal_len in range(100, 1, -1):
            for str in lst:
                for start_idx in range(100 - pal_len + 1):
                    result = is_pal(str, start_idx, pal_len)
                    if result:
                        print(f'#{casenum} {pal_len}')
                        return
    func()
