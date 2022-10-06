import sys

sys.stdin = open('wordpuzzle.txt')

def check(board, boardsize, wordlen):
    count = 0
    # 라인별로 체크
    for line in board:
        i = 0
        while i <= (boardsize - wordlen):
            # 까만색(0)이면 i(기준)를 다음으로 넘김
            if line[i] == 0:
                i += 1
                continue
            
            # i(기준)에서부터 타겟길이만큼 j 더해가면서 체크
            j = 1
            while j < wordlen:
                # 타겟길이보다 이전에 까만색(0) 만나면 i(기준)를 그만큼 더해줌
                if line[i + j] == 0:
                    i += j
                    break
                else:
                    j += 1
            
            # j(더해주는 길이)가 타겟길이와 같을 때 즉 다 돌았을 때 
            # 끝까지 갔으면 count += 1 
            # 빈칸(1)이 연속되면 i(기준)에 타겟길이를 더해줘 그 다음부터 다시 체크
            if j == wordlen:
                if i + wordlen >= boardsize:
                    count += 1
                    break
                elif line[i + wordlen] == 1:
                    i += wordlen + 1
                    continue
                else:
                    count += 1
            i += 1
    return count


for testcase in range(int(input())):
    boardsize, wordlen = map(int, input().split())
    board = [list(map(int, input().split())) for _ in range(boardsize)]
    boardreverse = list(map(list, zip(*board)))
    
    count = 0
    count += check(board, boardsize, wordlen)
    count += check(boardreverse, boardsize, wordlen)
    print(f'#{testcase + 1} {count}')
