import sys

sys.stdin = open('1959numlists.txt')

# 숫자 2개와 해당 숫자만큼의 길이를 가진 리스트 2개를 받아
# 작은 리스트를 옮겨가며 자리에 맞는 값들을 곱한 후 모두 더해
# 해당 더한 값들 중 최대값을 반환
def return_result(sm, lg, lst_sm, lst_lg):
    result = []
    for i in range(lg - sm + 1):
        tmp_lst = []
        for j in range(sm):
            tmp_lst.append(lst_lg[i + j] * lst_sm[j])
        result.append(sum(tmp_lst))
    return max(result)

# tc는 testcase, n, m은 각 리스트의 길이
t = int(input())
for tc in range(1, t + 1):
    n, m = map(int, input().split())
    lst_n = list(map(int, input().split()))
    lst_m = list(map(int, input().split()))

    if n <= m:
        print(f'#{tc} {return_result(n, m, lst_n, lst_m)}')
    else:
        print(f'#{tc} {return_result(m, n, lst_m, lst_n)}')



    # lst_a = [list(map(int,input().split())) for _ in range(n)]
