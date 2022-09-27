import sys

sys.stdin = open('14220mergesort.txt')

# 인자로 받은 리스트의 원소를 병합정렬해서 반환
def merge_sort(lst):
    n = len(lst)

    if n == 1:
        return lst

    left = lst[:n//2]
    right = lst[n//2:]

    left = merge_sort(left)
    right = merge_sort(right)

    return merge(left, right)


# merge_sort함수로부터 왼쪽 반, 오른쪽 반이 담긴 리스트를 인자로 받아
# 작은 값부터 비교하여 result에 담아 반환
# left의 마지막 원소가 right의 마지막 원소보다 클 경우 global 변수 cnt를 1 증가
def merge(left, right):
    result = []

    global cnt
    if left[-1] > right[-1]:
        cnt += 1

    left = left[::-1]
    right = right[::-1]

    while left or right:
        if left and right:
            if left[-1] <= right[-1]:
                result.append(left.pop())
            else:
                result.append(right.pop())
        elif left:
            result.extend(left[::-1])
            break
        elif right:
            result.extend(right[::-1])
            break

    return result

# tc는 testcase, n은 정렬할 수의 개수, lst는 정렬할 정수를 담은 리스트
t = int(input())
for tc in range(1, t + 1):
    n = int(input())
    lst = list(map(int, input().split()))

    # cnt는 global 변수로, 병합정렬 과정에서
    # 왼쪽 반의 마지막 원소가 오른쪽 반의 마지막 원소보다 큰 경우 1씩 증가
    cnt = 0
    lst = merge_sort(lst)

    print(f'#{tc} {lst[n//2]} {cnt}')
