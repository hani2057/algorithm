import sys

sys.stdin = open('palindrome.txt')

for testcase in range(int(input())):
    # n은 글자판 크기(nxn), m은 회문 길이
    n, m = map(int, input().split())
    lst = [input() for _ in range(n)]
    dic = {}

    for i in range(n):
        for j in range(n):
            dic[(i, j)] = lst[i][j]
    
    for i in range(n):
        for e in range(n - m + 1):
            count_row = 0
            count_col = 0
            pal_row = ''
            pal_col = ''

            for j in range(m // 2 + 1):
                if dic[(i, j + e)] != dic[(i, m + e - 1 - j)]:
                    count_row = 0
                    pal_row = ''
                    break
                else:
                    count_row += 1
                    pal_row += dic[(i, j + e)]
            if count_row == m // 2 + 1:
                print(f'#{testcase + 1}', end=' ')
                for _ in range(m):
                    print(dic[i, e + _], end='')

            for j in range(m // 2 + 1):
                if dic[(j + e, i)] != dic[(m + e -1 - j, i)]:
                    count_col = 0
                    pal_col = ''
                    break
                else:
                    count_col += 1
                    pal_col += dic[(j + e, i)]
            if count_col == m // 2 + 1:
                print(f'#{testcase + 1}', end=' ')
                for _ in range(m):
                    print(dic[e + _, i], end='')
    print()



    # for str in lst:
    #     for i in range(n - m + 1):
    #         count = 0
    #         for j in range(m // 2 + 1):
    #             if str[i + j] != str[m - 1 - (i + j)]:
    #                 count = 0
    #                 break
    #             else:
    #                 count += 1
    #         if count == m // 2 + 1:
    #             print(f'#{testcase + 1} {str[i:i + m]}')
    #             break
        