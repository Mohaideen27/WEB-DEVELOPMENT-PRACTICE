# Bank Quiz
class Bank_Account:
    customerName=""
    balance=0.0
    account_number=0

customer1=Bank_Account()
customer1.customerName="sameer"
customer1.balance=200000
customer1.account_number=32948230094

print(customer1.customerName)
print(customer1.balance)
print(customer1.account_number)

# CONSTRUCTOR

# constructor is a special method that is automatically called when an object of a class is created. Its primary purpose is to allocate memory and initialize the new object by assigning initial values to its attributes or executing required setup tasks

# Self keyword acts as a reference to the specific object or instance of a class currently being created or interacted with.
class Car:
    def __init__(self,carName, noOfWheels, noOfAirbags, mileage):
        print("This is a constructor")
        self.noOfWheels=noOfWheels
        self.noOfAirbags=noOfAirbags
        self.mileage=mileage
        self.carName=carName
        print(self.noOfWheels,self.noOfAirbags,self.mileage)

# a special member function that automatically executes when an object is destroyed or goes out of scope.
# Its primary purpose is to release system resources—such as freeing dynamically allocated memory or closing open file streams—preventing resource and memory leaks
    def __del__(self):
        print("This is a Destructor",self)
# When you print an object or convert it to a string, Python looks for this(__str__) method inside the object's class. If it exists, Python executes it and returns the custom text you designed instead of a generic, ugly memory address
    def __str__(self):
        return (self.carName)

    def moveForward(self,speed):
        print("Car is moving with a speed of ",speed)
    
    def moveBackward(self):
        print("Car is moving backward")

car1=Car("nano",4,6,19.7)
car2=Car("Innova",3,5,17.7)
# print(car1)

