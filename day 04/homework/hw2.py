# 2) მომხმარებელს შემოატანინეთ ორი რიცხვითი მნიშვნელობა (სიგანე და სიმაღლე). ტერმინალში გამოიტანეთ ფართობი/პერიმეტრი. S = ფართობი (S = width*height)/P = პერიმეტრი (P = (width+height)*2


width = float(input("Enter width: "))
height = float(input("Enter height: "))

S = width * height
P = (width + height) * 2


print(f"ფართობი (S) = {S}")
print(f"პერიმეტრი (P) = {P}")