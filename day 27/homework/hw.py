# 1) შექმენით ფუნქცია, რომელსაც გადაეცემა სიმბოლოების სია. ფუნქციამ უნდა დააბრუნოს ეს სია პირველი და ბოლო ელემენტების გარეშე, გამოიყენეთ slicing-ი.


def remove_first_last(symbols):
    return symbols[1:-1]

symbols = ['a', 'b', 'c', 'd', 'e']
result = remove_first_last(symbols)
print(result)
