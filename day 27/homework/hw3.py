# 3) შექმენით ფუნქცია, რომელსაც გადაეცემა რიცხვების სია. გადაუარეთ ამ სიას while ციკლით და ჩაამატეთ გაორმაგებული რიცხვები ახალ სიაში. საბოლოოდ დააბრუნეთ ეს სია

def double_numbers(input_list):
    output_list = []
    i = 0
    while i < len(input_list):
        output_list.append(input_list[i] * 2)
        i += 1
    return output_list