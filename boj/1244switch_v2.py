import sys
sys.stdin = open('1244switch.txt')

switch_num = int(input())
switches = [2] + list(map(int, input().split())) + [2]
student_num = int(input())

for _ in range(student_num):
    gen, n = map(int, input().split()) # gen 남학생 1, 여학생 2 / n은 학생이 받은 수

    if gen == 1:
        for i in range(1, switch_num + 1):
            if i % n == 0:
                switches[i] = 1 if switches[i] == 0 else 0
    else:
        i = 0
        while i < min(n, switch_num - n + 1):
            if switches[n - (i + 1)] != switches[n + (i + 1)]:
                break
            i += 1

        for idx in range(n - i, n + i + 1):
            switches[idx] = 1 if switches[idx] == 0 else 0

switches.pop(0)
switches.pop()

for i in range(0, switch_num, 20):
    print(*switches[i:i + 20])
