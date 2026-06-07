# Abstraction - Means hiding unnecessary details
# abstract class
# abstract method
# decorator


from abc import ABC, abstractmethod

class Car(ABC):
    @abstractmethod
    def moveForward(self):
        pass
    @abstractmethod
    def moveBackward(self):
        pass
    @abstractmethod
    def fm(self):
        pass
    
class Swift(Car):
    def moveForward(self):
        print("Moving forward")
    def moveBackward(self):
        print("Moving backward")
    def fm(self):
        print("PLAYING")

class Innova(Car):
    def moveForward(self):
        print("Moving forward")
    def moveBackward(self):
        print("Moving backward")
    def fm(self):
        print("PLAYING")
     
swift=Swift()
swift.moveBackward()
