import sys

sys.stdin = open('1242hexacode.txt')

hex_to_bin = {
    '0': '0000',
    '1': '0001',
    '2': '0010',
    '3': '0011',
    '4': '0100',
    '5': '0101',
    '6': '0110',
    '7': '0111',
    '8': '1000',
    '9': '1001',
    'A': '1010',
    'B': '1011',
    'C': '1100',
    'D': '1101',
    'E': '1110',
    'F': '1111',
}

# tc == testcase
for tc in range(int(input())):
    print(f'#{tc +1}')
    code_lst = []
    bin_code = ''
    n, m = map(int, input().split())
    for _ in range(n):
        input_value = input().strip('0')
        if input_value:
            hex_code = input_value
    
    # print(hex_code)
    # print()
    # print(hex_code[-14:], '+', hex_code[-28:-14], '+', hex_code[-42:-28])
    # print()
    # print()

    for hexnum in hex_code:
        bin_code += hex_to_bin.get(hexnum)
    bin_code = bin_code.rstrip('0')
    if len(bin_code) < 56:
        bin_code = '0' * (56 - len(bin_code)) + bin_code


    print(len(bin_code))
    print(bin_code)

print()
for i in range(6):
    print(56 * i)
