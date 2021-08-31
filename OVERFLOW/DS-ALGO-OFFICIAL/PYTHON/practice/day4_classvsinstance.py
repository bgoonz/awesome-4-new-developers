# This input is provided in the challenge.
t = int(input())
for i in range(0, t):
    age = int(input())
    p = Person(age)
    p.amIOld()
    for j in range(0, 3):
        p.yearPasses()
    p.amIOld()
    print("")


class Person:
    def __init__(self, initialAge):
        # Add some more code to run some checks on initialAge
        if initialAge < 0:
            self.age = 0
            print("Age is not valid, setting age to 0.")
        else:
            self.age = initialAge

    def amIOld(self):
        # Do some computations in here and print out the correct statement to the console
        if self.age < 13:
            print("You are young.")
        if self.age >= 13 and self.age < 18:
            print("You are a teenager.")
        if self.age >= 18:
            print("You are old.")

    def yearPasses(self):
        # Increment the age of the person in here
        self.age += 1
