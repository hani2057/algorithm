import sys 

sys.stdin = open('1049guitar.txt')

for testcase in range(int(input())):
    packages = []
    pieces = []
    n, m = map(int, input().split())
    for _ in range(m):
        package, piece = map(int, input().split())
        packages.append(package)
        pieces.append(piece)

    min_package = min(packages)
    min_piece = min(pieces)
    if min_package > min_piece * 6:
        min_price = min_piece * n
    else:
        if min_package < min_piece * (n % 6):
            min_price = (n // 6 + 1) * min_package
        else:
            min_price = (n // 6) * min_package + (n % 6) * min_piece

    print(min_price)