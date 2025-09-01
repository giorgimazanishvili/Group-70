# 5) უკვე შექმნილ Dictionary-დან, შეცვალე key ისე, რომ value იგივე დარჩეს და დაბეჭდე Dictionary საბოლოო   სახით (გააკეთეთ pop-ით).

my_dict = {
    "name": "Ana",
    "age": 25,
    "city": "Tbilisi",
    "favorite_color": "blue"
}

# შეცვალე key "favorite_color" -> "color"
my_dict["color"] = my_dict.pop("favorite_color")

# დაბეჭდე საბოლოო Dictionary
print(my_dict)