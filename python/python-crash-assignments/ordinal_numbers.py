numbers = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten']
for index, number in enumerate(numbers):
    if index == 0:
        print(f"1st element is {number}")
    elif index == 1:
        print(f"2nd element is {number}")
    else:
        print(f"{index}th element is {number}")
