# 2)შექმენით ისეთი სია სადაც გექნებათ სადაც სხვადასხვა მონაცემთა ტიპები შეტანილი საბოოლოდ კი გამოპრინტეთ ისინი.

# სია, რომელიც შეიცავს სხვადასხვა მონაცემთა ტიპებს
mixed_list = [42, 3.14, "გამარჯობა", True, None, [1, 2, 3], {"სახელი": "ანა"}]

# სიის დაბეჭდვა
print("სია სხვადასხვა ტიპის მონაცემებით:")
print(mixed_list)

# ცალკე ელემენტების დაბეჭდვა ტიპებით
print("\nელემენტები და მათი ტიპები:")
for item in mixed_list:
    print(f"მნიშვნელობა: {item} — ტიპი: {type(item)}")