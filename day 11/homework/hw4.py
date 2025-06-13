# 4) მომხმარებელი შეიყვანს ორ რიცხვს და ოპერაციას (+, -, *, /)
# დაბეჭდე შედეგი შესაბამისი მოქმედებით.
# თუ ოპერაცია არასწორია (მაგ 0-ს გაყოფა ან ტექსტი ან უცხო სიმბოლო) → "არასწორი ოპერაცია!"

num1 = float(input("Please enter the first number: "))
num2 = float(input("Please enter the second number: "))
operation = input("Please enter an operation (+, -, *, /): ").strip()

try:
    if operation == "+":
        result = num1 + num2
    elif operation == "-":
        result = num1 - num2
    elif operation == "*":
        result = num1 * num2
    elif operation == "/":
        if num2 == 0:
            print("Cannot divide by zero!")
            result = None
        else:
            result = num1 / num2
    else:
        print("Invalid operation!")
        result = None

    if result is not None:
        print(f"The result is: {result}")

except ValueError:
    print("Invalid input! Please enter valid numbers.")