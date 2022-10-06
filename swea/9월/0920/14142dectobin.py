import sys

sys.stdin = open('14142dectobin.txt')

for tc in range(int(input())):
    num = float(input())
    result = ''
    for i in range(12):
        if not num:
            break

        num *= 2
        if num >= 1:
            result += '1'
            num -= 1
        elif num > 0:
            result += '0'
    
    if num:
        print(f'#{tc + 1} overflow')
    else:
        print(f'#{tc + 1} {result}')
