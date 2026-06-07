class Vehicle: #parent class
    no_of_wheels=4
    
    def moveForward(self): 
        print("Vehilce is moving forward")

class car(Vehicle):  #child class / Sub class
    no_of_airbags=5

class maruti(car):
    milage=25

class toyota(car):
    milage=30

class maruto(maruti,toyota):
    weight=200

car1=maruto()
print(car1.no_of_wheels)
print(car1.no_of_airbags)
print(car1.milage)
car1.moveForward()


# inheritance
# Inheritance allows a new class (the child or derived class) to adopt all the methods and properties from an existing class (the parent or base class). This technique simplifies code maintenance and ensures code reusability by avoiding duplicated logic across multiple classes

# Types of inheritance
# single inheritance
# A child class inherits from exactly one parent class.
# hierarchical inheritance
# Multiple child classes inherit from the exact same parent class.
# multi level inheritance
# A child class inherits from another child class, creating a multi-generational chain (e.g., Grandchild → Child → Parent).
# multiple inheritance
# : A child class inherits directly from more than one parent class (e.g., class Smartphone(Camera, Phone):).

# super keyword
# The super() function is used to gain access to inherited methods from the parent class.
# mro
# When dealing with multiple inheritance, Python needs a structured path to determine which class method to run first if the parents share identical method names. for that we use method resolution order built in method
# Method Overriding If a child class needs specific behavior that differs from the parent class, it can override a method by defining a function with the exact same nam

# Helpful Built-In Functions
# isinstance(object, class): Returns True if an object is an instance of that specific class or any of its parent classes.
# issubclass(child_class, parent_class): Returns True if the first class directly or indirectly inherits from the second clas