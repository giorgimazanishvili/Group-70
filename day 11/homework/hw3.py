# 3) მომხმარებელს სთხოვე შეიყვანოს ორი რიცხვი. შემდეგ:
# თუ ორივე რიცხვი დადებითია → დაბეჭდე "ორივე დადებითია"
# თუ მხოლოდ ერთი დადებითია → "მხოლოდ ერთი დადებითი რიცხვია"
# თუ არცერთი არ არის დადებითი → "არცერთი არ არის დადებითი"


num1 = int(input("enter the first number:"))
num2 = int(input("enter the second number:"))

if num1 > 0 and num2 > 0:
    print("Both numbers are positive.")
elif num1 > 0 or num2 > 0:
    print("Only one number is positive.")
else:
    print("Neither of the numbers is positive.")