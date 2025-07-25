class Person:
    def __init__(self, name, age, pay=0, job=None):
        self.name = name
        self.age = age
        self.pay = pay
        self.job = job
    def lastName(self):
        return self.name.split()[-1]
    def giveRaise(self, percent):
        self.pay *= (1.0 + percent)
    def __str__(self):
        return '<%s => %s>' % (self.__class__.__name__, self.name)

if __name__ == '__main__':
    bob = Person('Bob Smith', 42, 30000, 'software engineer')
    sue = Person('Sue Jones', 45, 40000, 'project manager')

    print(bob.name, bob.pay, bob.job, bob.age)
    sue.giveRaise(0.10)
    print(sue.pay)

    print(bob)