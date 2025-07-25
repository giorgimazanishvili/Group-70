# 5) შეიყვანე სიტყვა და რობოტმა უნდა დათვალოს რამდენი ხმოვანია და რამდენი თანხმოვანი აქვს მას.
# გაიმეორებს ამას მანამ, სანამ არ შეიყვან სწორ სიტყვას.

#  ანუ რობოტს ეუბნები სიტყვას → ის გეუბნება:

# "ამ სიტყვაში არის 3 ხმოვანი და 4 თანხმოვანი"

# და გთხოვს ახალს, სანამ სწორ სიტყვას არ ეტყვი

vowels = "აეიოუ"
correct_word = "სწორია"

while True:
    word = input("შეიყვანე სიტყვა: ").lower()


    vowel_count = sum(1 for letter in word if letter in vowels)
    consonant_count = sum(1 for letter in word if letter.isalpha() and letter not in vowels)

    print(f"ამ სიტყვაში არის {vowel_count} ხმოვანი და {consonant_count} თანხმოვანი")

    if word == correct_word:
        print("სიტყვა სწორია! დასრულდა.")
        break