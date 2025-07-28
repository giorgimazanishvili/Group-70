# 4) შექმენით ფუნქცია, რომელსაც გადაეცემა რიცხვების სია. გადაუარეთ ამ სიას for ციკლით და ჩაამატეთ მხოლოდ ლუწი რიცხვები ახალ სიაში. საბოლოოდ დააბრუნეთ ეს სია.

def filter_even_numbers(input_list):
    output_list = []
    for num in input_list:
        if num % 2 == 0:
            output_list.append(num)
    return output_list
