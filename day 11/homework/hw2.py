# 2) მომხმარებელს სთხოვე შეიყვანოს თავისი ასაკი და მიუთითოს, აქვს თუ არა სტუდენტური ბარათი.
  
age = int(input(" enter your age: "))

has_student_card = input("Do you have a student card? (yes/no): ").strip().lower()

print(f"Your age is: {age}")
print(f"Student card: {'Yes' if has_student_card == 'yes' else 'No'}")