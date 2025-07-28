# 2) შექმენით ფუნქცია რომელიც არგუმენტად იღებს სიტყვას/წინადადებას და ასოს, ის აბრუნებს პირველი სად შეხვდა ასო ამ სიტყვაში.

def find_first_occurrence(text, char):
    for i in range(len(text)):
        if text[i] == char:
            return i
    return -1

sityva = input("შეიყვანე სიტყვა ან წინადადება: ")
aso = input("შეიყვანე ასო: ")

result = find_first_occurrence(sityva, aso)
if result != -1:
    print(f"ასო '{aso}' პირველად გამოჩნდა პოზიციაზე: {result}")
else:
    print(f"ასო '{aso}' არ მოიძებნა ტექსტში.")