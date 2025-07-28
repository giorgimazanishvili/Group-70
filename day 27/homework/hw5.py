# 5) შექმენით ფუნქცია, რომელსაც გადაეცემა სახელების სია. შექმენით ახალის სია, სადაც ჩაამატებთ გადმოცემული სიიდან მხოლოდ იმ სახელებს, რომლებიც იწყება "N"-ზე`. საბოლოოდ დააბრუნეთ ეს სია.

def filter_names_starting_with_n(names_list):
    filtered_list = []
    for name in names_list:
        if name.startswith("N"):
            filtered_list.append(name)
    return filtered_list
