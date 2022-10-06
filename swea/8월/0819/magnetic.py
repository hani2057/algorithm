import sys

sys.stdin = open('magnetic.txt')

'''
가로로 바꿔서 진행, 각 라인별로
(1) 0 전부 없애기
(2) 앞에서 2(s극성질)를 빼고 뒤에서 1(n극성질)을 빼기
(3) 순회하면서 체크: 같으면 바꾸고 카운트 += 1
(4) 카운트 // 2 <- result
'''

for testcase in range(10):
    n = int(input())
    lst = [list(map(int, input().split())) for _ in range(100)]
    count = 0

    # 전치로 방향 전환
    for i in range(100):
        for j in range(100):
            if i < j:
                lst[i][j], lst[j][i] = lst[j][i], lst[i][j]
    
    for line in lst:
        line = [i for i in line if i in {1, 2}]
        while True:
            if line[0] == 2:
                del line[0]
            else:
                break
        while True:
            if line[-1] == 1:
                del line[-1]
            else:
                break
        
        subcount = 1
        for i in range(1, len(line)):
            if line[i] != line[i - 1]:
                subcount += 1
        count += subcount // 2

    print(f'#{testcase + 1} {count}')