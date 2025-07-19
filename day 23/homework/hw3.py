# 3) დაითვალე, რამდენჯერ სცადა სწორი სიტყვის შეყვანა.

def is_consonant(c):
    vowels = "ბგდზთკლმნპჟრ"
    return c in vowels

correct_words = []
attempts = 0

for _ in range(5):
    user_input = input("შეიყვანეთ სიტყვა: ")
    attempts += 1
    if is_consonant(user_input[0]) and is_consonant(user_input[-1]):
        correct_words.append(user_input)

print("შესაბამისი სიტყვები:", correct_words)
print("სცადეთ სწორი სიტყვის შეყვანა:", attempts, "ჯერ.")