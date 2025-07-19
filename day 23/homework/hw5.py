# 5)სიტყვის ანალიზი — დაითვალე ხმოვნები და თანხმოვნები, სანამ სწორი არ იქნება.

def is_consonant(c):
    vowels = "ბგდზთკლმნპჟრ"
    return c in vowels

while True:
    user_input = input("შეიყვანეთ სიტყვა: ")
    if len(user_input) == 0:
        print("გთხოვთ, შეიყვანოთ სიტყვა.")
        continue

    consonant_count = sum(1 for c in user_input if is_consonant(c))
    vowel_count = len(user_input) - consonant_count

    if is_consonant(user_input[0]) and is_consonant(user_input[-1]):
        print("შესაბამისი სიტყვა:", user_input)
        print("ხმოვნების რაოდენობა:", vowel_count)
        print("თანხმოვნების რაოდენობა:", consonant_count)
        break
    else:
        print("სიტყვა არ არის სწორი, სცადეთ კიდევ.")