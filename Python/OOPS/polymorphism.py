# polymorphism
# Generally polymorphism means many forms
# Polymorphism allows different classes to implement methods with the same name
# polymorphism in python compare to other programming language
# Method Overloading /compile time polymorphism
#  Method Overloading vs. Overriding
# It is crucial to distinguish how Python handles these two types of polymorphism:
# Method Overriding (Supported): A child class replaces or modifies a method inherited from a parent class .
# Method Overloading (Not Directly Supported): In languages like Java, you can write multiple functions with the identical name but different parameters. Python does not allow this. If you define two methods with the same name, the second definition completely overwrites the first.

class Duck:
    def swim(self): return "Swimming in the pond."

class Fish:
    def swim(self): return "Swimming deep in the ocean."

class Human:
    def swim(self): return "Swimming in the pool."

# A generic function that accepts any object with a .swim() method
def start_swimming(ocean_creature):
    print(ocean_creature.swim())

# Same function call, three completely different outputs
start_swimming(Duck())   # Output: Swimming in the pond.
start_swimming(Fish())   # Output: Swimming deep in the ocean.
start_swimming(Human())  # Output: Swimming in the pool.


# Polymorphism via inheritance
class Document:
    def open(self):
        raise NotImplementedError("Subclass must implement this!")

class PDF(Document):
    def open(self): return "Opening PDF with Adobe Reader."

class Word(Document):
    def open(self): return "Opening DOCX with Microsoft Word."

# Iterating through different document types uniformly
docs = [PDF(), Word()]
for doc in docs:
    print(doc.open())
