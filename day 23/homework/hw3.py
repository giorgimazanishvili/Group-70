# 3)რობოტმა უნდა დაითვალოს, რამდენჯერ სცადე სწორი სიტყვის შეყვანა.
# ანუ ყოველ ჯერზე, როცა სწორი სიტყვა უთხარი, უნდა დაიმახსოვროს და უთხრას ბოლოს რიცხვი.

def is_consonant(c):
    vowels = "ბგდზთკლმნპჟრ"
    return c in vowels

correct_words = []
attempts = 0

for _ in range(5):
    user_input = input("შეიყვანეთ სიტყვა: ")
    if is_consonant(user_input[0]) and is_consonant(user_input[-1]):
        correct_words.append(user_input)
        attempts += 1

print("შესაბამისი სიტყვები:", correct_words)
print("სწორი სიტყვების რაოდენობა:", attempts)