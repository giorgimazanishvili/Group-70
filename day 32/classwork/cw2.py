# 2)შექმენით სეტები და განიხილეთ ოპერატორები (union,intersection,difference,symmetric_difference,clear,add,remove) ახსენით ასევე კომენტარებით და გააკეთეთ ორივე ხერხით როგორც ტექსტით ისე სიმბოლოთი.

# მოგესალმებით! ეს კითხვაზე პასუხის გასაცემად, გავაკეთოთ ბოლოდან რამდენიმე მაგალითი Python-ში. შევქმნათ სეტები და განვიხილოთ მითითებული ოპერატორები.

# სეტები (Sets)

# Python-ში სეტები არის უნიკალური ელემენტების დაუდგენელი რედაქციები. ისინი საშუალებას გვაძლევს სწრაფად და ეფექტურად შევასრულოთ ოპერაციები, როგორიცაა შეუერთება, გადაკვეთა, განსხვავება და სიმეტრიული განსხვავება.

# 1. Union (საერთო ნაწილი)

# union() ან | ოპერატორი ატარებს ორ სეტს და ქმნის მათ ერთიან სეტს.

# 2. Intersection (გადაკვეთა)

# intersection() ან & ოპერატორი ანიჭებს მხოლოდ ის ელემენტები, რომლებიც ორივე სეტში არსებობენ.

# 3. Difference (განსხვავება)

# difference() ან - ოპერატორი წარმოადგენს მხოლოდ იმ ელემენტებს, რომლებიც პირველ სეტში არსებობენ და არ არსებობენ მეორე სეტში.

# 4. Symmetric Difference (სიმეტრიული განსხვავება)

# symmetric_difference() ან ^ ოპერატორი ახდენს მათ ელემენტებს, რომლებიც ერთ სეტში არიან, მაგრამ მეორე სეტში არ.

# 5. Clear (გასუფთავება)

# clear() მეთოდი აშორებს ყველა ელემენტს სეტიდან.

# 6. Add (დამატება)

# add() მეთოდი ააქვს ელემენტს სეტში.

# 7. Remove (ამოღება)

# remove() მეთოდი ამოიყვანს ელემენტს სეტიდან, თუ ის არსებობს.

# Python კოდი:
# # სეტების შექმნა
# set1 = {1, 2, 3, 4, 5}
# set2 = {4, 5, 6, 7, 8}

# # 1. Union - ერთიანი სეტი
# union_set = set1 | set2
# print("Union (|):", union_set)

# # 2. Intersection - გადაკვეთა
# intersection_set = set1 & set2
# print("Intersection (&):", intersection_set)

# # 3. Difference - განსხვავება
# difference_set = set1 - set2
# print("Difference (-):", difference_set)

# # 4. Symmetric Difference - სიმეტრიული განსხვავება
# symmetric_difference_set = set1 ^ set2
# print("Symmetric Difference (^):", symmetric_difference_set)

# # 5. Clear - გასუფთავება
# set1.clear()
# print("Set1 after clear:", set1)

# # 6. Add - ელემენტის დამატება
# set2.add(9)
# print("Set2 after add(9):", set2)

# # 7. Remove - ელემენტის ამოღება
# set2.remove(6)
# print("Set2 after remove(6):", set2)

# შედეგები:
# Union (|): {1, 2, 3, 4, 5, 6, 7, 8}
# Intersection (&): {4, 5}
# Difference (-): {1, 2, 3}
# Symmetric Difference (^): {1, 2, 3, 6, 7, 8}
# Set1 after clear: set()
# Set2 after add(9): {4, 5, 6, 7, 8, 9}
# Set2 after remove(6): {4, 5, 7, 8, 9}

