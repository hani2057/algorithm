######## 2023 카카오 공채 블라인드 코테 1차


### 1번

# privacy의 날짜정보와 약관 종류, 약관별 유효기간 정보를 받아
# 유효기간이 만료되는 날짜정보를 리턴
def expire_date(p_y, p_m, p_d, p_term, terms_dic):
    e_y = p_y
    e_m = p_m + terms_dic[p_term]
    e_d = p_d - 1
    if not e_d:
        e_d = 28
        e_m -= 1
    if e_m > 12:
        e_m -= 12
        e_y += 1
    return e_y, e_m, e_d

def solution(today, terms, privacies):
    answer = []
    # today의 year, month, day 정보를 int로 변환
    t_y, t_m, t_d = map(int, today.split('.'))

    # terms 정보를 dictionary로 저장
    terms_dic = {}
    for term in terms:
        k, v = term.split()
        terms_dic[k] = int(v)

    # privacies 배열에 대해 today의 날짜와 비교한 뒤
    # 유효기간이 지났을 경우 index + 1 값을 answer 배열에 저장
    for idx, privacy in enumerate(privacies):
        p_get_date, p_term = privacy.split()
        p_y, p_m, p_d = map(int, p_get_date.split('.'))
        e_y, e_m, e_d = expire_date(p_y, p_m, p_d, p_term, terms_dic)
        if t_y > e_y:
            answer.append(idx + 1)
        elif t_m > e_m:
            answer.append(idx + 1)
        elif t_d > e_d:
            answer.append(idx + 1)

    return sorted(answer)










### 2번


def solution(cap, n, deliveries, pickups):
    # index 사용을 위해 앞에 [0] 추가
    deliveries = [0] + deliveries
    pickups = [0] + pickups
    answer = 0
    # target은 현시점에서 방문해야 할 가장 먼 집의 위치
    target = n
    while target:
        if deliveries[target] or pickups[target]:
            answer += 2 * target

            # 배달
            d_target = target
            d_cap = cap
            while d_cap and d_target:
                if deliveries[d_target] >= d_cap:
                    deliveries[d_target] -= d_cap
                    break
                else:
                    d_cap -= deliveries[d_target]
                    deliveries[d_target] = 0
                    d_target -= 1

            # 수거
            p_target = target
            p_cap = cap
            while p_cap and p_target:
                if pickups[p_target] >= p_cap:
                    pickups[p_target] -= p_cap
                    break
                else:
                    p_cap -= pickups[p_target]
                    pickups[p_target] = 0
                    p_target -= 1
        else:
            target -= 1

    return answer










####################
### 5


from collections import defaultdict

def merge_check(r, c, merged):
    for merged_set in merged.values():
        if (r, c) in merged_set:
            return list(merged_set)

def solution(commands):
    answer = []
    cells = defaultdict()
    merged = defaultdict()
    idx = 0
    for command in commands:
        lst = list(command.split())
        if lst[0] == 'UPDATE':
            if len(lst) == 4:
                cells[(lst[1], lst[2])] = lst[3]
                m_lst = merge_check(lst[1], lst[2], merged)
                if m_lst:
                    for (r, c) in m_lst:
                        cells[(r,c)] = lst[3]
            else:
                for key, value in cells.items():
                    if value == lst[1]:
                        cells[key] = lst[2]
                        r, c = key
                        m_lst = merge_check(r, c, merged)
                        if m_lst:
                            for (r, c) in m_lst:
                                cells[(r, c)] = lst[2]
                        # for merged_set in merged.values():
                        #     if key in merged_set:
                        #         merged_lst = list(merged_set)
                        #         for (r, c) in merged_lst:
                        #             cells[(r, c)] = lst[2]
        elif lst[0] == 'MERGE':
            if cells[(lst[1], lst[2])]:
                cells[(lst[3], lst[4])] = cells[(lst[1], lst[2])]
            elif cells[(lst[3], lst[4])]:
                cells[(lst[1], lst[2])] = cells[(lst[3], lst[4])]
            for merged_set in merged.values():
                if (lst[1], lst[2]) in merged_set:
                    merged_set.add((lst[3], lst[4]))
                elif (lst[3], lst[4]) in merged_set:
                    merged_set.add((lst[1], lst[2]))
            else:
                merged[idx] = {(lst[1], lst[2]), (lst[3], lst[4])}
                idx += 1
        elif lst[0] == 'UNMERGE':
            tmp = cells[(lst[1], lst[2])]
            for merged_set in merged.values():
                if (lst[1], lst[2]) in merged_set:
                    merged_lst = list(merged_set)
                    for (r, c) in merged_lst:
                        cells[(r, c)] = None
                    cells[lst[1], lst[2]] = tmp
        elif lst[0] == 'PRINT':
            if cells[(lst[1], lst[2])]:
                answer.append(cells[(lst[1], lst[2])])
            else:
                answer.append('EMPTY')

    print(cells)
    return answer


##### 5번 문제 주석 단 버전


from collections import defaultdict

# update 실행시 cell의 merge 여부를 확인하기 위한 함수
def merge_check(r, c, merged):
    for merged_set in merged.values():
        if (r, c) in merged_set:
            return list(merged_set)

def solution(commands):
    answer = []
    # cells는 값을 저장할 딕셔너리
    # merged는 병합 정보를 저장할 딕셔너리, idx는 merged의 키 값으로 사용
    cells = defaultdict()
    merged = defaultdict()
    idx = 0
    # 명령어를 리스트에 담아 if로 분기
    for command in commands:
        lst = list(command.split())

        # 명령어의 단어 수를 기준으로 if처리 및 각각의 경우에 대해 병합 여부 체크
        if lst[0] == 'UPDATE':
            if len(lst) == 4:
                cells[(lst[1], lst[2])] = lst[3]
                m_lst = merge_check(lst[1], lst[2], merged)
                if m_lst:
                    for (r, c) in m_lst:
                        cells[(r,c)] = lst[3]
            else:
                for key, value in cells.items():
                    if value == lst[1]:
                        cells[key] = lst[2]
                        r, c = key
                        m_lst = merge_check(r, c, merged)
                        if m_lst:
                            for (r, c) in m_lst:
                                cells[(r, c)] = lst[2]

        # 값을 가지고 있는 셀 기준으로 값 업데이트(r1, c1 우선) 후 merged 딕셔너리 업데이트
        elif lst[0] == 'MERGE':
            if cells[(lst[1], lst[2])]:
                cells[(lst[3], lst[4])] = cells[(lst[1], lst[2])]
            elif cells[(lst[3], lst[4])]:
                cells[(lst[1], lst[2])] = cells[(lst[3], lst[4])]

            for merged_set in merged.values():
                if (lst[1], lst[2]) in merged_set:
                    merged_set.add((lst[3], lst[4]))
                elif (lst[3], lst[4]) in merged_set:
                    merged_set.add((lst[1], lst[2]))
            else:
                merged[idx] = {(lst[1], lst[2]), (lst[3], lst[4])}
                idx += 1

        # (r, c)의 값을 tmp 변수에 저장한 후 병합된 셀들의 값을 None으로 만들고 다시 (r, c)에 값 부여
        elif lst[0] == 'UNMERGE':
            tmp = cells[(lst[1], lst[2])]
            for merged_set in merged.values():
                if (lst[1], lst[2]) in merged_set:
                    merged_lst = list(merged_set)
                    for (r, c) in merged_lst:
                        cells[(r, c)] = None
                    cells[(lst[1], lst[2])] = tmp

        # 값이 있을 경우 answer 리스트에 값 추가
        elif lst[0] == 'PRINT':
            if cells[(lst[1], lst[2])]:
                answer.append(cells[(lst[1], lst[2])])
            else:
                answer.append('EMPTY')

    return answer