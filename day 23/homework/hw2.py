# 2) 5 სიტყვის შეყვანა, და შენახვა მხოლოდ სწორების.

def is_consonant(c):
    vowels = "ბგდზთკლმნპჟრ"
    return c in vowels

correct_words = []

for _ in range(5):
    user_input = input("შეიყვანეთ სიტყვა: ")
    if is_consonant(user_input[0]) and is_consonant(user_input[-1]):
        correct_words.append(user_input)

print("შესაბამისი სიტყვები:", correct_words)