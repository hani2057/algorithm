n = int(input())

# 5로 나누어떨어지면 5로 나눈 몫을 출력
if not n % 5:
    print(n // 5)

# 아니면 5로 나눈 몫부터 하나씩 줄여가면서 
# 5의 배수를 뺀 수가 3으로 나누어떨어지는지 확인
else:
    share5 = n // 5
    for i in range(share5, -1, -1):
        m = n - 5 * i
        if not m % 3:
            print(i + m // 3)
            break
    else:
        print(-1)
