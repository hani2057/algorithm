import sys

# n은 단어의 개수
n = int(input())
word_dic = {}

# 입력되는 단어를 딕셔너리에 저장
# 이때 정렬하기 위해 key는 단어로, value는 정렬기준으로 넣어줌
for _ in range(n):
    word = sys.stdin.readline().rstrip()
    if not word_dic.get(word):
        word_dic[word] = [len(word), word]

# 딕셔너리를 정렬
word_lst = sorted(word_dic.items(), key=lambda x: (x[1][0], x[1][1]))

# 단어 출력
for word in word_lst:
    print(word[0])
