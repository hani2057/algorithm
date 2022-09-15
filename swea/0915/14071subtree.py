import sys

sys.stdin = open('14071subtree.txt')

def node_count(node):
    if not left[node] and not right[node]:
        return 1
    elif left[node] and right[node]:
        return node_count(left[node]) + node_count(right[node]) + 1
    elif left[node]:
        return node_count(left[node]) + 1
    else:
        return node_count(right[node]) + 1

for testcase in range(int(input())):
    # e는 간선의 수
    e, root = map(int, input().split())
    lst = list(map(int, input().split()))
    tree = [0] * (e + 2)
    left = [0] * (e + 2)
    right = [0] * (e + 2)

    for i in range(e):
        parent_node = lst[2 * i]
        child_node = lst[2 * i + 1] 
        if not left[parent_node]:
            left[parent_node] = child_node
        else:
            right[parent_node] = child_node
    
    print(f'#{testcase + 1} {node_count(root)}')
