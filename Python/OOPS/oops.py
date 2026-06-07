#class - template
#object - instant
# instantiation is the process of creating a concrete object from a class blueprint
# a class is a blueprint or template, while an object is a real-world instance created from that blueprint
class Car:
    no_of_wheels = 0
    mileage = 0.0
    no_of_airbags=0
    def moveForward(self):
        print("car is moving!")
    def moveBackward(self):
        print("car is moving backward!")
# variable and members inside class are called class members


car1 =Car() #instance of class - object - instantiation happening
print(car1.no_of_wheels)
print(car1.mileage)

car2=Car()
car2.mileage=25.0
print(car2.no_of_wheels)
print(car2.mileage)
car2.moveForward()

# Destructor

