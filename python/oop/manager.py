from person_start import Person

class Manager(Person):
    def __init__(self, name, age=0, pay=0):
        """Initialize a Manager with name, age, pay, and job."""
        Person.__init__(self, name, age, pay, 'manager')

    def giveRaise(self, percent, bonus=0.1):
        """Give a raise to the person."""
        Person.giveRaise(self, percent + bonus)

if __name__ == '__main__':
    tom = Manager('Tom Doe', age=50, pay=50000)
    print(tom.lastName())
    tom.giveRaise(0.20)
    print(tom.pay)
    print(tom.job)