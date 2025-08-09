guests = ["Damon", "Ian", "Elodie"]
for guest in guests:
    print(f"Welcome to our dinner: {guest.title()}")
print("Damon can't make it.")
guests.remove("Damon")
guests.append("Zoe")
for guest in guests:
    print(f"Welcome to our dinner: {guest.title()}")

print("We found a bigger dinner table!!")
guests.insert(0, "Ashin")
guests.insert(int(len(guests)/2), "Ashika")
guests.append("Damon")
for guest in guests:
    print(f"Welcome to our dinner: {guest.title()}")

print("Plan changed. I can only invite two persons...")
while len(guests) > 2:
    print(f"Sorry, {guests.pop()}, we cannot invite you this time.")
print(f"Now the size of guests list is {len(guests)}")

for guest in guests[:]:
    print(f"{guest.title()}, you are still invited.")
    guests.remove(guest)
#guests.clear()
#guests = []
print(f"Is the guest list empty? {len(guests) == 0}")
