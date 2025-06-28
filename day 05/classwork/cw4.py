# 4) შემოატანინეთ მომხმარებელს ასო თუ ეს ასო არის 'A' მაშინ გამოიტანეთ რიცხვი 100, თუ ის არის 'B' - 80, თუ 'C' - 60, თუ 'D' - 40, ხოლო თუ 'F' მაშინ სიტყვა 'Failed!'

letter = input("შეიყვანეთ ასო: ")

if letter == 'A':
    print(100)
elif letter == 'B':
    print(80)
elif letter == 'C':
    print(60)
elif letter == 'D':
    print(40)
elif letter == 'F':
    print("Failed!")
else:
    print("მცდარი ასო!")