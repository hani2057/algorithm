import sys

sys.stdin = open('1240binarycode.txt')

code_lst = {
    '0001101': '0',
    '0011001': '1',
    '0010011': '2',
    '0111101': '3',
    '0100011': '4',
    '0110001': '5',
    '0101111': '6',
    '0111011': '7',
    '0110111': '8',
    '0001011': '9',
}

# tc == testcase
for tc in range(int(input())):
    # input을 받아서 암호가 포함된 행을 codes 변수에 저장하고 56개로 자름
    n, m = map(int, input().split())
    for _ in range(n):
        temp = input().rstrip('0')
        if temp:
            codes = temp
    codes = codes[-56:]

    # codes를 7개씩 잘라서 변환하여 암호를 알아내고 code 변수에 저장
    code = ''
    for i in range(8):
        temp_code = codes[0 + 7 * i : 7 + 7 * i]
        code += code_lst.get(temp_code)

    odd_sum = 0
    even_sum = 0
    for i in range(0, 8, 2):
        odd_sum += int(code[i])
    for i in range(1, 9, 2):
        even_sum += int(code[i])
    
    if not (odd_sum * 3 + even_sum) % 10:
        print(f'#{tc + 1} {odd_sum + even_sum}')
    else:
        print(f'#{tc + 1} 0')
