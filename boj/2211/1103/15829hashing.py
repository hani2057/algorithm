from string import ascii_lowercase

alphabet_dic = {}
for idx, alphabet in enumerate(ascii_lowercase):
    alphabet_dic[alphabet] = idx + 1

h, r, m = 0, 31, 1234567891

l = int(input())
s = input()

for idx, c in enumerate(s):
    h += alphabet_dic[c] * (r ** idx)

print(h % m)