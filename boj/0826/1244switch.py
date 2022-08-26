import sys
sys.stdin = open('input.txt')

switch_num = int(input())
switches = list(map(int, input().split()))
student_num = int(input())
for _ in range(student_num):
    gen, n = map(int, input().split()) # gen 남학생 1, 여학생 2 / n은 학생이 받은 수

    if gen == 1:
        for i in range(switch_num):
            if (i + 1) % n == 0:
                switches[i] = 0 if switches[i] == 1 else 1
    else:
        n_idx = n - 1 # 숫자 인덱스 == 숫자 번호 - 1
        i = 0
        while i < min(n, switch_num - n) - 1:
            if switches[n_idx - (i + 1)] != switches[n_idx + (i + 1)]:
                break
            i += 1

        for idx in range(n - 1 - i, n + i):
            switches[idx] = 0 if switches[idx] == 1 else 1
    

for i in range(0, switch_num, 20):
    print(*switches[i:i + 20])

