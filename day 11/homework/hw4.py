# 4) მომხმარებელი შეიყვანს ორ რიცხვს და ოპერაციას (+, -, *, /)
# დაბეჭდე შედეგი შესაბამისი მოქმედებით.
# თუ ოპერაცია არასწორია (მაგ 0-ს გაყოფა ან ტექსტი ან უცხო სიმბოლო) → "არასწორი ოპერაცია!"


num1 = float(input("შეიყვანეთ პირველი რიცხვი: "))
num2 = float(input("შეიყვანეთ მეორე რიცხვი: "))
operation = input("შეიყვანეთ ოპერაცია (+, -, *, /): ")

if operation == "+":
    result = num1 + num2
    print(f"შედეგი: {result}")
elif operation == "-":
    result = num1 - num2
    print(f"შედეგი: {result}")
elif operation == "*":
    result = num1 * num2
    print(f"შედეგი: {result}")
elif operation == "/":
    if num2 == 0:
        print("არასწორი ოპერაცია! 0-ს გაყოფა შეუძლებელია.")
    else:
        result = num1 / num2
        print(f"შედეგი: {result}")
else:
    print("არასწორი ოპერაცია!")