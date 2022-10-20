def d(n):
    lst = [int(i) for i in str(n)]
    result = n
    for i in lst:
        result += i
    return result

non_self_nums = set()
for num in range(1, 10001):
    if num in non_self_nums:
        continue
    else:
        num_result = d(num)
        while num_result <= 10000:
            non_self_nums.add(num_result)
            num_result = d(num_result)

self_nums = sorted(list(set(range(1, 10001)) - non_self_nums))

for self_num in self_nums:
    print(self_num)
