# 3)შექმენი სეტი fruit1 და fruit2 შეინახეტ სხვადასხვა ხილები და გააკეთეთ ყველა მანიპულაცია რაც გახსენდებათ ოპერატორების დახმარებით, შემდეგ ახხსენით კომენტარებით.

# სეტების შექმნა
fruit1 = {"apple", "banana", "cherry"}
fruit2 = {"banana", "kiwi", "mango"}

# 1. Union - ერთიანი სეტი
union_fruits = fruit1 | fruit2
print("Union (|):", union_fruits)

# 2. Intersection - გადაკვეთა
intersection_fruits = fruit1 & fruit2
print("Intersection (&):", intersection_fruits)

# 3. Difference - განსხვავება
difference_fruits = fruit1 - fruit2
print("Difference (-):", difference_fruits)

# 4. Symmetric Difference - სიმეტრიული განსხვავება
symmetric_difference_fruits = fruit1 ^ fruit2
print("Symmetric Difference (^):", symmetric_difference_fruits)

# 5. Clear - გასუფთავება
fruit1.clear()
print("Fruit1 after clear:", fruit1)

# 6. Add - ელემენტის დამატება
fruit2.add("orange")
print("Fruit2 after add(orange):", fruit2)

# 7. Remove - ელემენტის ამოღება
fruit2.remove("kiwi")
print("Fruit2 after remove(kiwi):", fruit2)

# შედეგები:
# Union (|): {'banana', 'kiwi', 'mango', 'cherry', 'apple'}
# Intersection (&): {'banana'}
# Difference (-): {'apple', 'cherry'}
# Symmetric Difference (^): {'apple', 'cherry', 'kiwi', 'mango'}
# Fruit1 after clear: set()
# Fruit2 after add(orange): {'banana', 'orange', 'mango'}
# Fruit2 after remove(kiwi): {'banana', 'orange', 'mango'}