import sys

sys.stdin = open('sudoku.txt')

def check(lst):
    for line in lst:
        if len(set(line)) != 9:
            return 0
    return 1

def make_lstbox(lst, i, j):
    templst = []
    for k in range(3):
        for l in range(3):
            templst.append(lst[i + k][j + l])
    return templst

for testcase in range(int(input())):
    lst = [list(map(int, input().split())) for _ in range(9)]
    lstreverse = list(map(list, zip(*lst)))
    lstbox = []

    for i in range(3):
        for j in range(3):
            lstbox.append(make_lstbox(lst, 0 + 3 * i, 0 + 3 * j))

    check_row = check(lst)
    check_col = check(lstreverse)
    check_box = check(lstbox)

    if check_row and check_col and check_box:
        result = 1
    else:
        result = 0
    print(f'#{testcase + 1} {result}')