def greet_users(names):
    """Print a simple greeting to each user in the list."""
    [print(f"Hello, {name.title()}!") for name in names]

usernames = ['hannah', 'ty', 'margot']
greet_users(usernames)