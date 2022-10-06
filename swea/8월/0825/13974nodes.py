from dis import dis
import sys
from collections import deque

sys.stdin = open('13974nodes.txt')

# tc는 testcase, nodes는 노드의 수, edges는 간선의 수
t = int(input())
for tc in range(1, t + 1):
    nodes, edges = map(int, input().split())

    # 리스트 lst에 노드 간 연결정보 저장
    lst = [[] for _ in range(nodes + 1)]
    for _ in range(edges):
        s, e = map(int, input().split())
        lst[s].append(e)
        lst[e].append(s)
    
    # 문제에서 찾고자 하는 출발노드, 도착 노드
    s_find, s_goal = map(int, input().split())

    # distance는 bfs를 수행하면서 depth를 저장할 리스트
    # queue = deque()
    queue = []
    queue.append(s_find)
    visited = set()
    distance = [0] * (nodes + 1)

    # bfs 수행
    while queue:
        value = queue.pop(0)
        cnt = distance[value] + 1
        for node in lst[value]:
            if node not in visited:
                queue.append(node)
                visited.add(node)
                distance[node] = cnt
    
    print(f'#{tc} {distance[s_goal]}')


'''
참고.
queue를 deque로 구현하려고 했더니 메모리 초과가 떠서 찾아봤더니
deque는 최소 메모리 공간이 크다고 한다.
추가로, deque의 구현은 더블 링크드 리스트라서 앞뒤에서 추가 연산이 O(1)의 시간 복잡도를 가지는 듯.
'''