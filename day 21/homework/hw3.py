# 3)დაიბეჭდოს ყოველი მესამე ელემენტი სიიდან, დაწყებული მეორე ელემენტიდან.

# items = ['x', 'y', 'z', 'a', 'b', 'c', 'd']

#  შედეგი უნდა იყოს: ['y', 'a', 'd']

items = ['x', 'y', 'z', 'a', 'b', 'c', 'd']

index1 = 1   # 'y'
index2 = 3   # 'a'
index3 = 6   # 'd'

result = items[index1], items[index2], items[index3]

print(result)