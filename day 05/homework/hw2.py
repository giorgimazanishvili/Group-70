# 2)მომხმარებელს შემოატანინეთ ორი რიცხვი გააკეთეთ მათზე მათემატიკური ოპერაციები  ("+, -, *, /, %, <, >, <=, >=, ==, !=. **).

# მომხმარებლისგან ორი რიცხვის მიღება
num1 = float(input("შეიყვანეთ პირველი რიცხვი: "))
num2 = float(input("შეიყვანეთ მეორე რიცხვი: "))

# მათემატიკური ოპერაციები
print(f"{num1} + {num2} = {num1 + num2}")
print(f"{num1} - {num2} = {num1 - num2}")
print(f"{num1} * {num2} = {num1 * num2}")
print(f"{num1} / {num2} = {num1 / num2}" if num2 != 0 else "არ შეიძლება გაყოფა ნულზე!")
print(f"{num1} % {num2} = {num1 % num2}")
print(f"{num1} ** {num2} = {num1 ** num2}")

# შედარების ოპერაციები
print(f"{num1} < {num2} = {num1 < num2}")
print(f"{num1} > {num2} = {num1 > num2}")
print(f"{num1} <= {num2} = {num1 <= num2}")
print(f"{num1} >= {num2} = {num1 >= num2}")
print(f"{num1} == {num2} = {num1 == num2}")
print(f"{num1} != {num2} = {num1 != num2}")