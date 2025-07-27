def describe_pet(animal_type, pet_name):
    """Display information about a pet."""
    print(f"\nI have a {animal_type}.")
    print(f"My {animal_type}'s name is {pet_name.title()}.")

def describe_pet_default(pet_name, animal_type='dog'):
    describe_pet(animal_type, pet_name)

describe_pet('hamster', 'harry')
describe_pet(animal_type='dog', pet_name='willie')
describe_pet(pet_name='bob', animal_type='hamster')
describe_pet_default('willie')
describe_pet_default(animal_type='hamster', pet_name='harry')