# Study Notes: Abstract Data Types (ADT)

## 1. What Are Data Types?

A **data type** determines:

1. The kind of data that can be stored.
2. The operations that can be performed on that data.

### Examples

| Data Type | Stores        | Operations            |
| --------- | ------------- | --------------------- |
| Integer   | Whole numbers | Addition, subtraction |
| String    | Text          | Concatenation, length |
| Boolean   | true/false    | Logical operations    |

### JavaScript Example

```javascript
let age = 25;          // Number
let name = "John";     // String
let isActive = true;   // Boolean

console.log(age + 5);      // 30
console.log(name.length);  // 4
console.log(!isActive);    // false
```

---

## 2. User-Defined Data Types

A **user-defined data type** is created by the programmer to represent real-world entities and their behavior.

Common examples:

* Structure (struct)
* Class
* Object

### Why Use Them?

Built-in data types are often insufficient for modeling complex objects like:

* Student
* Employee
* Bank Account
* Car

### JavaScript Example (Class)

```javascript
class Student {
    constructor(name, rollNo) {
        this.name = name;
        this.rollNo = rollNo;
    }

    display() {
        console.log(`Name: ${this.name}`);
        console.log(`Roll No: ${this.rollNo}`);
    }
}

const student1 = new Student("Alice", 101);
student1.display();
```

### Practice Questions

1. What is a user-defined data type?

   * A data type created by the programmer.

2. Give two examples of user-defined data types.

   * Struct and Class.

3. Why use classes?

   * To group data and related operations together.

4. Create a class named `Car` with properties `brand` and `model`.

   * Use constructor and store values.

### Common Pitfalls

❌ Creating too many unrelated properties in one class.

✅ Keep classes focused on a single responsibility.

---

## 3. Operator Overloading

### Definition

Operator overloading allows operators such as:

```text
+
-
*
==
```

to behave differently for user-defined types.

### Example (Conceptual)

For numbers:

```text
5 + 10 = 15
```

For strings:

```text
"Hello" + "World"
```

Output:

```text
HelloWorld
```

The `+` operator behaves differently based on data type.

### Note

JavaScript does **not directly support operator overloading** for custom classes like C++ does.

### Example

```javascript
console.log(5 + 10);
console.log("Hello " + "World");
```

Output:

```text
15
Hello World
```

### Practice Questions

1. What is operator overloading?

   * Giving multiple meanings to the same operator.

2. Is operator overloading supported for custom classes in JavaScript?

   * No.

3. Give an example of built-in operator overloading.

   * `+` for numbers and strings.

4. Why is operator overloading useful?

   * Makes code more readable.

### Common Pitfalls

❌ Assuming all languages support operator overloading.

✅ Check language features before using it.

---

# 4. Abstract Data Types (ADT)

## Definition

An **Abstract Data Type (ADT)** is a logical description of a data structure that specifies:

* What data is stored.
* What operations can be performed.
* Without specifying how it is implemented.

In simple words:

> ADT focuses on **what** the structure does, not **how** it does it.

---

## Key Characteristics of ADT

### 1. Type of Data

Defines what kind of information is stored.

Example:

* Stack stores elements.
* Queue stores elements.
* List stores elements.

---

### 2. Operations as Functions

Defines allowed operations.

For a Stack:

```text
push()
pop()
peek()
isEmpty()
```

---

### 3. Implementation Defined

The implementation can vary.

A Stack can be implemented using:

* Array
* Linked List

The user does not need to know the implementation.

---

### 4. Abstracted (Hidden)

Implementation details remain hidden.

Users only interact through provided operations.

This concept is called:

**Data Abstraction**

---

## ADT Analogy

Think of an ATM.

You know:

* Withdraw Money
* Deposit Money
* Check Balance

You do NOT know:

* Database structure
* Server communication
* Internal calculations

The ATM interface is the ADT.

---

## Stack as an ADT

### Operations

```text
push(item)
pop()
peek()
isEmpty()
```

### JavaScript Implementation

```javascript
class Stack {
    constructor() {
        this.items = [];
    }

    push(item) {
        this.items.push(item);
    }

    pop() {
        return this.items.pop();
    }

    peek() {
        return this.items[this.items.length - 1];
    }

    isEmpty() {
        return this.items.length === 0;
    }
}

const stack = new Stack();

stack.push(10);
stack.push(20);

console.log(stack.peek()); // 20
console.log(stack.pop());  // 20
```

Notice that users only call methods.

They do not know how storage is handled internally.

---

## ADT vs Data Structure

| ADT                   | Data Structure                 |
| --------------------- | ------------------------------ |
| Logical view          | Physical implementation        |
| What operations exist | How operations are implemented |
| Abstract              | Concrete                       |
| Example: Stack        | Array-based Stack              |

### Example

**ADT**

```text
Stack
push()
pop()
peek()
```

**Implementation**

```text
Array
Linked List
```

---

## Real-World Examples of ADTs

### Stack

Operations:

```text
push
pop
peek
```

Example:

Browser back button.

---

### Queue

Operations:

```text
enqueue
dequeue
front
```

Example:

Printer queue.

---

### List

Operations:

```text
insert
delete
search
```

Example:

Contact list.

---

## Practice Questions

### Easy

**1. What is an Abstract Data Type?**

Answer:
A logical model that defines data and operations while hiding implementation details.

---

**2. What does ADT focus on?**

Answer:
What operations are performed, not how they are implemented.

---

### Medium

**3. Give two characteristics of ADT.**

Answer:

* Data abstraction
* Defined operations

---

**4. What is the difference between ADT and Data Structure?**

Answer:

ADT defines behavior; Data Structure provides implementation.

---

### Hard

**5. Can the same ADT have multiple implementations?**

Answer:

Yes.

Example:

A Stack can be implemented using:

* Arrays
* Linked Lists

---

## Common Pitfalls and Misconceptions

### Pitfall 1: ADT and Data Structure are the Same

❌ Wrong

Many students think Stack itself is a data structure.

✅ Correct

* Stack = ADT
* Array-based Stack = Data Structure implementation

---

### Pitfall 2: ADT Must Be a Class

❌ Wrong

ADT is a concept, not a programming construct.

✅ Correct

ADT can be implemented using classes, structs, arrays, or linked lists.

---

### Pitfall 3: Knowing Implementation Is Necessary

❌ Wrong

Users should interact only through operations.

✅ Correct

Implementation details should remain hidden.

---

### Pitfall 4: Abstraction Means No Implementation Exists

❌ Wrong

Every ADT has an implementation.

✅ Correct

The implementation is simply hidden from the user.

---

# Quick Revision Summary

### Data Types

* Define stored data and valid operations.

### User-Defined Data Types

* Created by programmers.
* Examples: Struct, Class.

### Operator Overloading

* Same operator behaves differently for different types.
* Supported in languages like C++.
* Limited in JavaScript.

### Abstract Data Type (ADT)

* Defines data + operations.
* Hides implementation details.
* Focuses on **what**, not **how**.

### ADT Characteristics

* Type of data
* Operations as functions
* Implementation defined
* Abstracted/hidden

### Examples

* Stack
* Queue
* List
* Priority Queue

**Exam Tip:** Remember the formula:

> **ADT = Data + Operations + Abstraction (Hidden Implementation)**

This single definition often answers most introductory ADT questions.
