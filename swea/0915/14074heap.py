import sys

sys.stdin = open('14074heap.txt')

def make_heap(node):
    if tree[node] > tree[node // 2]:
        return
    else:
        tree[node], tree[node // 2] = tree[node // 2], tree[node]
        make_heap(node // 2)

for testcase in range(int(input())):
    n = int(input()) # 주어지는 노드의 개수
    lst = list(map(int, input().split()))
    tree = [0] * (n + 1)
    idx = 1
    for _ in range(n):
        tree[idx] = lst.pop(0)
        make_heap(idx)
        idx += 1

    result = 0
    while n > 1:
        result += tree[n // 2]
        n //= 2
    print(f'#{testcase + 1} {result}')