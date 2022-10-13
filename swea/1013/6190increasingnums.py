import sys

sys.stdin = open('6190increasingnums.txt')

t = int(input())
for tc in range(1, t + 1):
    n = int(input())
    lst = list(map(int, input().split()))

    multiples = []
    for i in range(n - 1):
        for j in range(i + 1, n):
            multiples.append(lst[i] * lst[j])
    
    max_num = 0
    for num in multiples:
        num = str(num)
        for i in range(len(num) - 1):
            if num[i] > num[i + 1]:
                break
        else:
            max_num = max(int(num), max_num)
    
    if max_num == 0:
        max_num = -1

    print(f'#{tc} {max_num}')



#################################################################
# 다른 사람 풀이

T = int(input())
for tc in range(1, T+1):
    N = int(input())
    A = list(map(int, input().split()))
    max_value = -1
    for i in range(N-1):
        for j in range(i+1, N):
            x = A[i] * A[j]
            r = x % 10
            while x:
                if x % 10 <= r:
                    r = x % 10
                    x //= 10
                else:
                    break
            else:
                if A[i] * A[j] > max_value:
                    max_value = A[i] * A[j]
 
    print(f'#{tc} {max_value}')



# 다른 사람 풀이 
t = int(input())

def danjo(n):
    n = str(n)
    for i in range(len(n)-1):
        if n[i] > n[i+1]:
            return 0
    return 1

for tc in range(1,t+1):
    n = int(input())
    a = list(map(int,input().split()))
    maxn = 0
    for i in range(n-1):
        for j in range(i+1,n):
            num = a[i]*a[j]
            if danjo(num):
                maxn = max(num,maxn)
        if maxn == 0:
            maxn = -1

    print('#%d %d' % (tc,maxn))