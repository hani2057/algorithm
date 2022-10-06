import sys

sys.stdin = open('specialsort.txt')

for testcase in range(int(input())):
    n = int(input())
    nums = list(map(int, input().split()))

    print(f'#{testcase + 1}', end=' ')
    for _ in range(5):
        maxnum = nums[0]
        minnum = nums[0]
        
        for num in nums:
            if num > maxnum:
                maxnum = num
            if num < minnum:
                minnum = num
        print(f'{maxnum} {minnum}', end=' ')
        
        trash = nums.pop(nums.index(maxnum))
        trash = nums.pop(nums.index(minnum))
    print()
