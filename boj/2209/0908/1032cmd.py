import sys

sys.stdin = open('1032cmd.txt')

n = int(input())
files = []
result = ''

for _ in range(n):
    file = input()
    files.append(file)

first_file = files[0]

for i in range(len(first_file)):
    letter = first_file[i]
    for file in files:
        if file[i] != letter:
            temp_result = '?'
            break 
    else:
        temp_result = letter

    result += temp_result

print(result)
