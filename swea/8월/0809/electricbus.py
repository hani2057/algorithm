import sys

sys.stdin = open('electricbus.txt')

for testcase in range(int(input())):
    max_move, busstop, charge_num = map(int, input().split())
    charge_stations = list(map(int, input().split()))
    charge_stations.append(busstop)
    count = 0
    now = 0

    for i in range(charge_num):
        if charge_stations[i] <= (now + max_move) and charge_stations[i + 1] <= (now + max_move):
            continue
        elif charge_stations[i] <= (now + max_move):
            count += 1
            now = charge_stations[i]
        else:
            count = 0
            break

    print(f'#{testcase + 1} {count}')