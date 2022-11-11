import sys

n = int(input())
nums = sorted(list(map(int, sys.stdin.readline().rstrip().split())))

# while문으로 숫자 순서대로 범위 바꿔가면서 => 안 됨

# i = 0
# start = 2
# res = []
# while i < n:
#     now_num = nums[i]
#     if now_num == 1:
#         i += 1
#         continue
    
#     for j in range(start, now_num):
#         if not now_num % j:
#             start = nums[i]
#             i += 1
#             break
#     else:
#         res.append(now_num)
#         start = nums[i]
#         i += 1

# print(len(res))



# for문으로 n 이하의 소수를 모두 찾아서 판별

max_num = max(nums)
prime_nums = set()
prime_nums.add(2)

if max_num < 3:
    print(1) if max_num == 2 else print(0)
else:
    for i in range(3, max_num + 1):
        for j in range(2, i):
            if not i % j:
                break
        else:
            prime_nums.add(i)
    
    res = []
    for num in nums:
        if num in prime_nums:
            res.append(num)
    print(len(res))
