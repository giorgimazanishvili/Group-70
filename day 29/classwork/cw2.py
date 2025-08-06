# 2) შექმენით ფუნქცია რომელიც მიიღებს რიცხვების სიას და დაბრუნებს მხოლოდ ლუწების ჯამს.

def sum_of_evens(numbers):
    return sum(num for num in numbers if num % 2 == 0)
