# 2)მოცემულია ორი სეტი: A = {1, 2, 3} და B = {3, 4, 5}.
# იპოვე ამ სეტების გაერთიანება.
# იპოვე ამ სეტების გადაკვეთა.
# იპოვე სეტ A-დან ის ელემენტები, რომლებიც არ ეკუთვნის სეტ B-ს.

# Python კოდი:
A = {1, 2, 3}
B = {3, 4, 5}

# 1. გაერთიანება
union_set = A | B
print("Union (|):", union_set)

# 2. გადაკვეთა
intersection_set = A & B
print("Intersection (&):", intersection_set)

# 3. განსხვავება
difference_set = A - B
print("Difference (-):", difference_set)