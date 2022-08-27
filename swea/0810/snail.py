import sys

sys.stdin = open('snail.txt')

def move(x, y, idx):
    if idx == 0:
        y += 1
    elif idx == 1:
        x += 1
    elif idx == 2:
        y -= 1
    elif idx == 3:
        x -= 1
    return x, y, idx

for testcase in range(int(input())):
    snailsize = int(input())

    # 순서 y+1, x+1, y-1, x-1
    # 횟수 n-1 번부터 1번까지, 처음은 3번 그다음 2번씩 반복
     
    lst = [[0] * snailsize for _ in range(snailsize)]

    mark = snailsize - 1
    count = 3
    subcount = mark
    idx = 0
    x = 0
    y = 0

    for i in range(snailsize ** 2):
        lst[x][y] = i + 1
        x, y, idx = move(x, y, idx)
        subcount -= 1
        if subcount == 0:
            subcount = mark
            count -= 1
            idx += 1
        if count == 0:
            mark -= 1
            count = 2
            subcount = mark
        if idx == 4:
            idx = 0
    
    print(f'#{testcase + 1}')
    for sublst in lst:
        for el in sublst:
            print(el, end=' ')
        print()