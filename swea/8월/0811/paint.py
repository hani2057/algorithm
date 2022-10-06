import sys

sys.stdin = open('paint.txt')

for testcase in range(int(input())):
    redarea = set()
    bluearea = set()

    for paint_count in range(int(input())):
        r1, c1, r2, c2, color = map(int, input().split())
        
        for i in range(r1, r2 + 1):
            for j in range(c1, c2 + 1):
                if color == 1:
                    redarea.add((i, j))
                elif color == 2:
                    bluearea.add((i, j))
    
    areacount = len(redarea & bluearea)
    print(f'#{testcase + 1} {areacount}')
