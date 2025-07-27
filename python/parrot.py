prompt = "\n Tell me something, and I will repeat it back to you: "
prompt += "\n (Type 'quit' to exit.)"

message = ""
while message.lower() != 'quit':
    message = input(prompt).strip()
    if len(message) == 0:
        print("You didn't say anything. Please try again.")
        continue
    if message.lower() != 'quit':
        print(f"You said: {message}")