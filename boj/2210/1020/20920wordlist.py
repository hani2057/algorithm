import sys

n, m = map(int, input().split())

words_dict = {}
for _ in range(n):
    word = sys.stdin.readline().rstrip()
    if len(word) < m:
        continue
    if not words_dict.get(word):
        words_dict[word] = [1, len(word), word]
    else:
        words_dict[word][0] += 1

wordlist = sorted(words_dict.items(), key=lambda x: (-x[1][0], -x[1][1], x[1][2]))

for word in wordlist:
    print(word[0])



# words = [sys.stdin.readline().rstrip() for _ in range(n)]

# words = [word for word in words if len(word) >= m]
# for 

# words_not_duplicated = list(set(words))
# words_count_length_word = []
# for word in words_not_duplicated:
#     words_count_length_word.append((words.count(word), len(word), word))

# words_count_length_word.sort(key=lambda word: word[2])
# words_count_length_word.sort(key=lambda word: word[1], reverse=True)
# words_count_length_word.sort(key=lambda word: word[0], reverse=True)

# for word in words_count_length_word:
#     print(word[2])
