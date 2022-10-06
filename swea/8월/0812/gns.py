import sys

sys.stdin = open('gns.txt')

for testcase in range(int(input())):
    n = int(list(input().split())[-1])
    lst = list(input().split())

    dic = {
        'ZRO': 0,
        'ONE': 0,
        'TWO': 0,
        'THR': 0,
        'FOR': 0,
        'FIV': 0,
        'SIX': 0,
        'SVN': 0,
        'EGT': 0,
        'NIN': 0,
    }

    for strnum in lst:
        dic[strnum] += 1
    
    print(f'#{testcase + 1}')
    for key, val in dic.items():
        if key == 'NIN':
            print(f'{(key + " ") * val}')
            break
        print(f'{((key + " ") * val)}', end='')
