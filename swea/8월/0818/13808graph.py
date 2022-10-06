import sys

sys.stdin = open('13808graph.txt')

# '방향성 그래프' means 방향이 있다 즉 단방향임


# def dfs(s, e):
#     # if len(visited) == node_num:
#     global visited
#     visited.add(s)
#     for node in dic.get(s, []):
#         if node == e:
#             return 1
#         if node not in visited:
#             dfs(node, e)
#     return 0

t = int(input())
for tc in range(1, t + 1):
    node_num, trunk_num = map(int, input().split())
    
    # dic은 노드간 연결정보를 저장할 딕셔너리
    dic = {}
    for _ in range(trunk_num):
        node_s, node_e = map(int, input().split())

        # get 메서드를 사용할 때 주의할 점:
        # default값으로 빈 리스트를 할당해주더라도 값이 없을 때 get 메서드 자체의 리턴값은 None임
        # `dic.get(node_s, []).append(node_e)`와 같이 사용시 에러 발생
        dic[node_s] = dic.get(node_s, []) + [node_e]


    # 딕셔너리 value로 빈 리스트 넣어주기: for문 돌려서 넣어줘도 됨
    # for i in range(1, node_num + 1):
    #     dic[i] = []

    # 또는 defaultdict 사용가능
    # from collections import defaultdict
    # defaultdict는 어떤 키값에 대해서도 무조건 빈 리스트를 기본적으로 넣어줌
    # 예를 들어 defaultdict에 대해 print(dic(100000000))을 해도 해당 키와 빈 리스트를 넣어줌

    check_s, check_e = map(int, input().split())
    
    visited = set()
    stack = [check_s]
    exists = False

    while stack and not exists:
        node_now = stack[-1]
        visited.add(node_now)
        for node in dic.get(node_now, []):
            if node == check_e:
                exists = True
                break
            if node not in visited:
                stack.append(node)
                break
        else:
            stack.pop()

    print(f'#{tc} {int(exists)}')

    # print(f'#{tc} {dfs(check_s, check_e)}')
