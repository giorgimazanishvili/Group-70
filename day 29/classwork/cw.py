# 1) შექმენით ფუნქცა რომელიც იღებს წინადადებას და აბრუნებ რამდენი სიტყვაა მასში.

def count_words(sentence):
    words = sentence.split()
    return len(words)