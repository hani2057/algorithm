import sys

for i in range(int(input())):
    state = list(sys.stdin.readline().rstrip().split())
    if len(state) < 2:
        continue
    if state[0] == 'Simon' and state[1] == 'says':
        print("",*state[2:])
        # print(' '.join(state[2:]))
    
# print(state)
