# 4) შემოატანინეთ მომხმარებელს ორი რიცხვი და დაპრინტეთ მათი ჯამი, სხვაობა, ნამრავლი და განაყოფი.


num1 = float(input("Enter a number: "))  
num2 = float(input("Enter another number: "))
sum_result = num1 + num2

difference = num1 - num2

product = num1 * num2

if num2 != 0:  
    quotient = num1 / num2
else:
    quotient = "Undefined (division by zero)" 

print(f"Sum: {sum_result}")
print(f"Difference: {difference}")
print(f"Product: {product}")
print(f"Quotient: {quotient}")