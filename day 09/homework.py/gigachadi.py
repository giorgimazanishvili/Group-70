# 1. Sololearn:

# 2. ახსენით რა განსხვავებაა implicit და explicit datatype comversion-ში.

# 1. Implicit Type Conversion (Type Coercion)
# ეს არის ავტომატური ტიპების კონვერტაცია, რომელსაც პროგრამის ინტერპრეტატორი ან კომპილერი აკეთებს თავად.

# პროგრამის ავტორს არა აქვს საჭირო explicit ბრძანება, რომ მოინდომოს ეს ცვლილება.

# მაგალითად, როდესაც ვამატებთ int და float მნიშვნელობებს, int ავტომატურად გადაყვანილია float-ში, რომ ოპერაცია შედგეს.

# მაგალითი Python-ში:
# python
# Copy
# Edit
# x = 5       int
# y = 3.2     float

# z = x + y   x ავტომატურად გადაყვანილია float-ში
# print(z)    შედეგი 8.2 (float)

# 3. წაიკითხეთ დამატებითი მასალა: https://www.geeksforgeeks.org/type-casting-in-python/


# 4. შექმენით პროგრამა რომელიც მიიღებს მომხარებლისგან input-ს რიხვის სახით და დაბეჭდეთ ამ რიცხვამდე ყველა რიცხვი თანმიმდევრობით. (For loop)

# მომხმარებლისგან რიცხვის მიღება
n = int(input("შეიყვანე რიცხვი: "))

# for ციკლი 1-დან n-მდე (n ჩათვლით)
for number in range(1, n + 1):
    print(number)

# 5. გაალეთეთ მეოთხე დავალება While loop-ის გამოყენებით.

# მომხმარებლისგან რიცხვის მიღება
n = int(input("შეიყვანე რიცხვი: "))

# საწყისი მნიშვნელობა
number = 1

# while ციკლი იმართება მანამ, სანამ number <= n
while number <= n:
    print(number)
    number += 1  # number-ს ვზრდით 1-ით