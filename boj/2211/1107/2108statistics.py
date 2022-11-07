import sys
import statistics
from collections import Counter

n = int(sys.stdin.readline().rstrip())
lst = [int(sys.stdin.readline().rstrip()) for _ in range(n)]

# 평균
print(round(statistics.mean(lst)))

# 중앙값
print(statistics.median(lst))

# 최빈값
counter_dic = Counter(lst)
mode = counter_dic[max(counter_dic, key=lambda x:counter_dic[x])]

counter_dic = dict(filter(lambda x:x[1] == mode, counter_dic.items()))

if len(counter_dic) > 1:
    print(sorted(counter_dic.keys())[1])
else:
    print(list(counter_dic.keys())[0])

# 범위
print(max(lst) - min(lst))