import sys

sys.stdin = open('14075nodesum.txt')

for testcase in range(int(input())):
    node_num, leaf_num, target_node = map(int, input().split())
    
    tree = [0] * (node_num + 1)
    for _ in range(leaf_num):
        node, val = map(int, input().split())
        tree[node] = val

    # target_node 까지만 돈다
    for i in range(node_num, target_node - 1, -1):
        tree[i // 2] += tree[i]

    print(f'#{testcase + 1} {tree[target_node]}')
