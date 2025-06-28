# # 1. მომხმარებელს შემოატანინეთ სამი რიცხვი, start/end/step და ჩასვით for loop-ში სათანადო ადგილას.

# მომხმარებლისგან ვიღებთ სამ რიცხვს: start, end, step
start = int(input("შეიყვანეთ დასაწყისი (start): "))
end = int(input("შეიყვანეთ დასასრული (end): "))
step = int(input("შეიყვანეთ ნაბიჯი (step): "))

# for loop გამოყენება user-ის შეყვანილი start, end და step-სთან ერთად
for i in range(start, end, step):  # თავი - მომხმარებლის შეყვანილი პარამეტრები
    print(i)  # სხეული - i-ს გამოშვება