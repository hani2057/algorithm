from itertools import count
import sys

sys.stdin = open('binarysearch.txt')

def binary_search_count(total, target):
    count = 1
    start = 1
    end = total
    while start <= end:
        half = int((start + end) / 2)
        if target == half:
            return count
        elif target < half:
            end = half
            count += 1
        elif target > half:
            start = half
            count += 1

for testcase in range(int(input())):
    totalpage, page_a, page_b = map(int, input().split())

    count_a = binary_search_count(totalpage, page_a)
    count_b = binary_search_count(totalpage, page_b)

    if count_a < count_b:
        winner = 'A'
    elif count_a > count_b:
        winner = 'B'
    else:
        winner = 0

    print(f'#{testcase + 1} {winner}')