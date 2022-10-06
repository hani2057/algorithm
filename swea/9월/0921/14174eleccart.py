import sys

sys.stdin = open('14174eleccart.txt')

# i부터 r까지 순열을 구해 orders에 리스트로 저장
def perm(i, r, res):
    if i == r:
        orders.append(res[:])
        return
    for x in range(1, r):
        if x not in res:
            res.append(x)
            perm(i + 1, r, res)
            res.pop()



# tc는 testcase, n은 배열의 크기, lst는 input을 받은 이차원배열
# orders는 순열로 구한 가능한 순서들을 저장한 리스트
# sums는 구하고자 하는 합계들을 저장한 리스트(최소값을 구해 출력예정)
for tc in range(int(input())):
    n = int(input())
    lst = [list(map(int, input().split())) for _ in range(n)]
    orders = []
    sums = []
    perm(1, n, [])

    # 앞뒤로 0을 붙여 (0,0)에서 출발, (0,0)으로 도착하는 순서를 만들어주고,
    # 각 순서대로 lst의 값들을 더해 temp_sum을 구한 뒤 sums 리스트에 추가해주고 min값을 출력
    for i in range(len(orders)):
        order = [0] + orders[i] + [0]
        temp_sum = 0
        for j in range(n):
            temp_sum += lst[order[j]][order[j + 1]]
        sums.append(temp_sum)

    print(f'#{tc + 1} {min(sums)}')
