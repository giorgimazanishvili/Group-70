# 2) შექმენით ფუნქცია, რომელიც მიიღებს წინადადებას და დაბეჭდავს მის თითოეულ სიტყვაში სიმბოლოების რაოდენობას(ცალ-ცალკე)

def print_word_lengths(sentence):
    words = sentence.split()
    
    for word in words:
        print(f"'{word}' - {len(word)} სიმბოლო")
