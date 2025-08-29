from pathlib import Path

def count_words(path):
    """Count the approximate number of words in file"""
    try:
        contents = path.read_text(encoding="utf-8")
    except FileNotFoundError:
        print(f"Sorry, the file {path} doesn't exist!")
    else:
        # Count the approximate number of words in the file:
        words = contents.split()
        num_words = len(words)
        print(f"The file {path} has about {num_words} words!")

filenames = ['alice.txt', 'siddhartha.txt', 'moby_dick.txt', 'little_women.txt']
for filename in filenames:
    count_words(Path(filename))