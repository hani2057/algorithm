import sys

sys.stdin = open('subset.txt')

lst_a = [(i + 1) for i in range(12)]

for testcase in range(int(input())):
    n, k = map(int, input().split()) # n은 set_a의 부분집합 필요 원소 개수, k는 부분집합 원소의 합
    count = 0

    subsets = []
    for i in range(1 << 12):
        subset = []
        for j in range(12):
            if i & (1 << j):
                subset.append(lst_a[j])
        subsets.append(subset)

    for subset in subsets:
        if len(subset) == n and sum(subset) == k:
            count += 1
    print(f'#{testcase + 1} {count}')
