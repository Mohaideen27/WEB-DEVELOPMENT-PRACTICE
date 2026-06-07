# Bank Practice Program

class Bank:
    def __init__(self,name,accNo,Pass,Bal):
        self.name=name
        self.accNo=accNo
        self.__Pass=Pass
        self.Bal=Bal

    def __str__(self):
        return self.name
    
    # getter
    def gpass(self):
        print(self.__Pass)

    # setter
    def spass(self,cPass):
        self.__Pass=cPass

    def details(self):
        print (f"""the Account holder name is {self}
the Account No is {self.accNo}
the Bal of the Acc holder is {self.Bal}""")
        
sam=Bank("sameer", 3298403948,987,934974958394 )
sam.details()
sam.gpass()
sam.spass(898)
sam.gpass()

# Four pillars of OOPS
# Encapsulation
# Inheritance
# Polymorphism
# Abstraction


# Encapsulation
#  the practice of bundling data (variables) and the methods (functions) that operate on that data into a single unit, called a class. At the same time, it restricts direct access to some of an object's components. to hide data, restrict access and public interface(getters and setters).
# getters and setters
# Getters and setters are public methods used to read and update private variables inside an object.
# Getter: A method used to retrieve (read) the value of a private variable.
# Setter: A method used to change (write) the value of a private variable.
# access specifier: used in Object-Oriented Programming (OOP) to define the visibility and accessibility of classes, variables, and methods.
# public, protected(single underscore), private(double underscore). 