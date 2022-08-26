import sys

sys.stdin = open('13994busstop.txt')

# def stops(lst, departure, arrive, step):
#     for i in range(departure, arrive, step):
#         lst[i] += 1
#     lst[arrive] += 1
#     return lst

for testcase in range(int(input())):
    n = int(input()) # n은 노선의 수
    busstop = [0] * 1001

    for _ in range(n):
        bustype, departure, arrive = map(int, input().split())

        if bustype == 1:
            for i in range(departure, arrive + 1):
                busstop[i] += 1
        elif bustype == 2:
            for i in range(departure, arrive, 2):
                busstop[i] += 1
            busstop[arrive] += 1
        else:
            if departure % 2:
                for i in range(departure, arrive):
                    if i % 3 == 0 and i % 10 != 0:
                        busstop[i] += 1
                busstop[arrive] += 1
            else:
                for i in range(departure, arrive):
                    if i % 4 == 0:
                        busstop[i] += 1
                busstop[arrive] += 1

    print(f'#{testcase + 1} {max(busstop)}')