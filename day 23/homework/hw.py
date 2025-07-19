# 1) შეიყვანე სიტყვა, სანამ პირველი და ბოლო ასო არ იქნება თანხმოვანი.

def is_consonant(c):
    vowels = "ბგდზთკლმნპჟრ"
    return c in vowels

user_input = input("შეიყვანეთ ტექსტი: ")

while not (is_consonant(user_input[0]) and is_consonant(user_input[-1])):
    user_input = input("შეიყვანეთ ტექსტი: ")

print("შესაბამისი ტექსტი:", user_input)