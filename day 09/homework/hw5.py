# 5) გაალეთეთ მეოთხე დავალება While loop-ის გამოყენებით.

# მომხმარებლისგან ვიღებთ start, end და step მნიშვნელობებს
start = int(input("შეიყვანეთ საწყისი რიცხვი (start): "))
end = int(input("შეიყვანეთ საბოლოო რიცხვი (end): "))
step = int(input("შეიყვანეთ ნაბიჯი (step): "))

i = start  # ცვლადი ციკლის დასაწყებად

# while loop — სანამ i < end ან i > end, დამოკიდებულია step-ზე
if step > 0:
    while i < end:
        print(i)
        i += step
elif step < 0:
    while i > end:
        print(i)