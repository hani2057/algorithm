n = int(input())

people = []
for _ in range(n):
    w, h = map(int, input().split())
    people.append([w, h, 1])

for person in people:
    for compare in people:
        if person[0] < compare[0] and person[1] < compare[1]:
            person[2] += 1
    print(person[2])
