# 1. მომხმარებელს შემოატანინეთ სამი რიცხვი, start/end/step და ჩასვით for loop-ში სათანადო ადგილას.

# მომხმარებელს ვთხოვთ ჩავწეროს საწყისი, საბოლოო და ნაბიჯის მნიშვნელობები
start = int(input("შეიყვანე საწყისი რიცხვი (start): "))
end = int(input("შეიყვანე საბოლოო რიცხვი (end): "))
step = int(input("შეიყვანე ნაბიჯის ზომა (step): "))

# for ციკლი იმეორებს რიცხვებს start-დან end (end ჩათვლით) ნაბიჯით step
for number in range(start, end + 1, step):
    print(number)

# 2. მომხმარებელს შემოატანინეთ რიცხვი და დაპრინტეთ რიცხვი ყოველ იტერაციაზე იქამდე, სანამ რიცხვი მომხმარებლის რიცხვს არ გაუტოლდება (While Loop)

# მომხმარებელს ვთხოვთ რიცხვის შეყვანას
target = int(input("შეიყვანე რიცხვი: "))

# საწყისი მნიშვნელობა
number = 1

# ციკლი ირთვება მანამ, სანამ number არ გაუტოლდება target-ს
while number <= target:
    print(number)
    number += 1

# 3. გააკეთეთ {2.} classwork For loop-ის გამოყენებით

# მომხმარებელს ვთხოვთ რიცხვის შეყვანას
target = int(input("შეიყვანე რიცხვი: "))

# for ციკლი 1-დან target-მდე (target ჩათვლით)
for number in range(1, target + 1):
    print(number)