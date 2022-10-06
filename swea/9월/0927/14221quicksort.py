import sys

sys.stdin = open('14221quicksort.txt')

# 인자로 받은 리스트를 l부터 r까지 quick sort로 정렬해서 정렬된 리스트를 반환
# lomuto partition 사용
# pivot은 리스트의 마지막 원소
def quick_sort(lst, l, r):
    if l < r:
        i = l - 1

        for j in range(l, r):
            if lst[j] <= lst[r]: # lst[r] == pivot
                i += 1
                lst[i], lst[j] = lst[j], lst[i]
        
        lst[i + 1], lst[r] = lst[r], lst[i + 1] # lst[r] == pivot

        quick_sort(lst, l, i)
        quick_sort(lst, i + 2, r)

    return lst


# tc는 testcase, n은 정렬할 수의 개수, lst는 정렬할 정수를 담은 리스트
t = int(input())
for tc in range(1, t + 1):
    n = int(input())
    lst = list(map(int, input().split()))

    lst = quick_sort(lst, 0, n - 1)
    
    print(f'#{tc} {lst[n//2]}')
