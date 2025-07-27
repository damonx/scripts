def greet_user(username='John Doe'):
    """Display a simple greeting."""
    if len(username) == 0:
        username = 'John Doe'
    print(f"HELLO! {username.title()}!")

inputuser = ''
while inputuser.lower() != 'quit' and inputuser.lower() != 'exit':
    inputuser = input("Enter your name (or type 'quit' or 'exit' to exit): ").strip()
    if len(inputuser) == 0:
        print("You didn't enter a name. Please try again.")
        continue
    if inputuser.lower() == 'quit' or inputuser.lower() == 'exit':
        print("Exiting the program. Goodbye!")
        exit(0)
    else:
        greet_user(inputuser)