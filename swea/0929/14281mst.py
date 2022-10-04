import sys

sys.stdin = open('14281mst.txt')

def find_set(x):
    while x != parent[x]:
        x = parent[x]
    return x

def union(x, y):
    parent[find_set(y)] = find_set(x)

# tc는 testcase, nodes는 노드의 수, edges는 간선의 수
t = int(input())
for tc in range(1, t + 1):
    nodes, edges = map(int, input().split())

    # 리스트 lst에 연결된 두 개의 노드와 가중치 정보를 튜플로 저장 후 
    # 가중치를 기준으로 오름차순으로 정렬
    lst = []
    for _ in range(edges):
        s, e, weight = map(int, input().split())
        lst.append((weight, s, e))
    lst.sort()

    # 상호배타집합에서 각 노드의 parent 정보를 저장할 리스트
    # 인덱스와 같은 값(자기자신)으로 초기화한다.
    # make_set과 동일한 내용
    parent = [i for i in range(nodes + 1)]

    # sum은 최소신장트리 간선들의 가중치의 합을 저장할 변수
    sum = 0
    for weight, s, e in lst:
        if find_set(s) != find_set(e):
            union(s, e)
            sum += weight

    print(f'#{tc} {sum}')
