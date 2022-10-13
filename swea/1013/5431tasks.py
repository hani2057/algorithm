import sys

sys.stdin = open('5431tasks.txt')

t = int(input())
for tc in range(1, t + 1):
    n, k = map(int, input().split())
    lst = list(map(int, input().split()))
    
    students = set(range(1, n + 1))
    task_submitted = set()
    for i in lst:
        task_submitted.add(i)

    task_unsubmitted = students - task_submitted
    task_unsubmitted = list(task_unsubmitted)
    
    print(f'#{tc}', end=' ')
    print(*sorted(task_unsubmitted))
