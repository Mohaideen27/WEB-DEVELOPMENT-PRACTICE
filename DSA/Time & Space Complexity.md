# Study Notes: Time and Space Complexity

Understanding time and space complexity helps developers write efficient code and compare different solutions to the same problem.

---

# 1. Time Complexity

## What is Time Complexity?

Time Complexity measures how the execution time of an algorithm grows as the input size increases.

It does **not** measure actual seconds. Instead, it measures how the number of operations changes relative to input size (**n**).

### Why is it important?

* Helps predict performance on large datasets.
* Allows comparison between multiple solutions.
* Helps identify inefficient code.

### Example

```javascript
function printNumbers(n) {
    for (let i = 1; i <= n; i++) {
        console.log(i);
    }
}
```

If `n = 5`, loop runs 5 times.

If `n = 1000`, loop runs 1000 times.

Growth is proportional to n → **O(n)**.

---

## Practice Questions

### Q1. What does time complexity measure?

**Answer:** Growth of operations as input size increases.

### Q2. Is time complexity measured in seconds?

**Answer:** No. It measures growth rate, not actual execution time.

### Q3. What is the time complexity of:

```javascript
console.log("Hello");
```

**Answer:** O(1)

### Q4. What is the complexity of a loop running n times?

**Answer:** O(n)

### Q5. Why do developers use time complexity?

**Answer:** To compare algorithm efficiency.

---

## Common Pitfalls

❌ Thinking time complexity equals runtime in seconds.

✅ It only measures growth relative to input size.

❌ Counting every operation exactly.

✅ Focus on dominant growth.

---

# 2. Big O Notation (Worst Case Time Complexity)

## What is Big O?

Big O describes the **upper bound (worst-case performance)** of an algorithm.

It tells us the maximum growth rate as input increases.

### Example

```javascript
function findElement(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return true;
        }
    }
    return false;
}
```

Worst case:

* Element not found
* Entire array is scanned

Complexity = **O(n)**

---

## Common Big O Rules

### Ignore Constants

```javascript
for (let i = 0; i < n; i++) {}
for (let i = 0; i < n; i++) {}
```

Operations = 2n

Complexity = **O(n)**

---

### Keep Highest Order Term

```javascript
n² + n + 100
```

Complexity = **O(n²)**

---

## Practice Questions

### Q1. What does Big O represent?

**Answer:** Worst-case growth rate.

### Q2. Simplify:

```javascript
3n + 20
```

**Answer:** O(n)

### Q3. Simplify:

```javascript
n² + 10n
```

**Answer:** O(n²)

### Q4. Why ignore constants?

**Answer:** They become insignificant for very large inputs.

### Q5. Is O(n) better than O(n²)?

**Answer:** Yes, because it grows slower.

---

## Common Pitfalls

❌ Writing O(2n)

✅ Simplify to O(n)

❌ Writing O(n² + n)

✅ Simplify to O(n²)

---

# 3. Time Complexity Graph

The growth order from fastest to slowest:

```
O(1)
O(log n)
O(n)
O(n log n)
O(n²)
O(n³)
O(2ⁿ)
O(n!)
```

Visual representation:

```text
|
|                           O(n³)
|                      /
|                 O(n²)
|              /
|         O(n log n)
|       /
|    O(n)
|  /
| O(log n)
|/
| O(1)
+--------------------------
          Input Size
```

As input grows, higher-order complexities become much slower.

---

# 4. O(1) – Constant Time

## Explanation

Execution time remains the same regardless of input size.

### Example

```javascript
function getFirst(arr) {
    return arr[0];
}
```

Whether array has:

* 10 items
* 1000 items
* 1 million items

Only one operation occurs.

Complexity = **O(1)**

---

## Practice Questions

### Q1. What is O(1)?

**Answer:** Constant-time execution.

### Q2. Accessing array index:

```javascript
arr[5]
```

Complexity?

**Answer:** O(1)

### Q3. Does array size matter?

**Answer:** No.

### Q4. Is O(1) the fastest complexity?

**Answer:** Yes.

### Q5. Is variable assignment O(1)?

**Answer:** Yes.

---

## Common Pitfalls

❌ Assuming O(1) means instant execution.

✅ It means execution doesn't grow with input size.

---

# 5. O(n) – Linear Time

## Explanation

Operations increase directly with input size.

### Example

```javascript
function printArray(arr) {
    for (let item of arr) {
        console.log(item);
    }
}
```

Array size doubles → work doubles.

Complexity = **O(n)**

---

## Practice Questions

### Q1. Loop runs n times. Complexity?

**Answer:** O(n)

### Q2.

```javascript
for(let i=0;i<n;i++){}
```

Complexity?

**Answer:** O(n)

### Q3. Searching an unsorted array?

**Answer:** O(n)

### Q4. Is O(n) scalable?

**Answer:** Generally yes.

### Q5. Doubling input doubles work?

**Answer:** Yes.

---

## Common Pitfalls

❌ Forgetting loop depends on n.

✅ Count iterations carefully.

---

# 6. O(n²) – Quadratic Time

## Explanation

Typically occurs with nested loops.

### Example

```javascript
for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        console.log(i, j);
    }
}
```

Total operations:

```
n × n = n²
```

Complexity = **O(n²)**

---

## Practice Questions

### Q1. Two nested loops over n?

**Answer:** O(n²)

### Q2. If n becomes 10x larger?

**Answer:** Work becomes 100x larger.

### Q3. Bubble Sort average complexity?

**Answer:** O(n²)

### Q4. Why expensive?

**Answer:** Growth increases rapidly.

### Q5. Is O(n²) slower than O(n)?

**Answer:** Yes.

---

## Common Pitfalls

❌ Thinking nested loops always mean O(n²).

✅ Depends on loop ranges.

---

# 7. O(n × m)

## Explanation

Occurs when loops depend on different inputs.

### Example

```javascript
for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
        console.log(i, j);
    }
}
```

Operations:

```
n × m
```

Complexity:

```text
O(n × m)
```

---

### Real Example

Comparing two arrays:

```javascript
for (let user of users) {
    for (let order of orders) {
        console.log(user, order);
    }
}
```

Complexity = O(users × orders)

---

## Practice Questions

### Q1. What if outer loop uses n and inner uses m?

**Answer:** O(n × m)

### Q2. Is O(n × m) always O(n²)?

**Answer:** No. Only if n = m.

### Q3. Two arrays of different lengths?

**Answer:** O(n × m)

### Q4. Why use two variables?

**Answer:** Inputs grow independently.

### Q5. If users double and orders double?

**Answer:** Work becomes 4x larger.

---

# 8. O(n³) – Cubic Time

## Explanation

Three nested loops.

### Example

```javascript
for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        for (let k = 0; k < n; k++) {
            console.log(i, j, k);
        }
    }
}
```

Operations:

```
n × n × n = n³
```

Complexity = **O(n³)**

---

## Practice Questions

### Q1. Three nested loops?

**Answer:** O(n³)

### Q2. If n doubles?

**Answer:** Work becomes 8x larger.

### Q3. Is O(n³) efficient for large inputs?

**Answer:** Usually no.

### Q4. Why avoid cubic algorithms?

**Answer:** Performance degrades quickly.

### Q5. Which is better: O(n²) or O(n³)?

**Answer:** O(n²)

---

## Common Pitfalls

❌ Using multiple nested loops unnecessarily.

✅ Look for optimization opportunities.

---

# 9. O(log n) – Logarithmic Time

## Explanation

Input size is reduced by a constant factor each step.

Common in:

* Binary Search
* Balanced Trees

### Example

```javascript
function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) return mid;

        if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return -1;
}
```

Each step cuts search space in half.

Complexity = **O(log n)**

---

## Practice Questions

### Q1. Which algorithm commonly uses O(log n)?

**Answer:** Binary Search

### Q2. What happens each step?

**Answer:** Search space halves.

### Q3. Is O(log n) faster than O(n)?

**Answer:** Yes.

### Q4. Is sorting required for binary search?

**Answer:** Yes.

### Q5. Why efficient?

**Answer:** Very slow growth.

---

## Common Pitfalls

❌ Using binary search on unsorted data.

✅ Always sort first.

---

# 10. O(n log n)

## Explanation

Usually appears when:

* Divide and conquer
* Efficient sorting algorithms

Examples:

* Merge Sort
* Quick Sort (average case)

### Example (Merge Sort)

```javascript
function mergeSort(arr) {
    if (arr.length <= 1) return arr;

    const mid = Math.floor(arr.length / 2);

    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));

    return merge(left, right);
}
```

Complexity = **O(n log n)**

---

## Practice Questions

### Q1. Merge Sort complexity?

**Answer:** O(n log n)

### Q2. Is O(n log n) better than O(n²)?

**Answer:** Yes.

### Q3. Which sorting algorithms are O(n log n)?

**Answer:** Merge Sort, Heap Sort, Quick Sort (average).

### Q4. Why efficient?

**Answer:** Divides problem repeatedly.

### Q5. Is O(n log n) common in sorting?

**Answer:** Yes.

---

## Common Pitfalls

❌ Assuming all sorting algorithms are O(n log n).

✅ Bubble Sort and Selection Sort are O(n²).

---

# 11. Space Complexity

## What is Space Complexity?

Space Complexity measures how much extra memory an algorithm uses relative to input size.

Includes:

* Variables
* Arrays
* Objects
* Recursion stack

---

## O(1) Space Example

```javascript
function sum(arr) {
    let total = 0;

    for (let num of arr) {
        total += num;
    }

    return total;
}
```

Uses one variable regardless of input.

Space = **O(1)**

---

## O(n) Space Example

```javascript
function copyArray(arr) {
    let result = [];

    for (let item of arr) {
        result.push(item);
    }

    return result;
}
```

New array grows with input.

Space = **O(n)**

---

## Practice Questions

### Q1. What does space complexity measure?

**Answer:** Memory usage growth.

### Q2. Creating a new array of size n?

**Answer:** O(n)

### Q3. Using only a few variables?

**Answer:** O(1)

### Q4. Can an algorithm have O(1) time and O(n) space?

**Answer:** Yes.

### Q5. Does recursion use memory?

**Answer:** Yes, call stack memory.

---

## Common Pitfalls

❌ Ignoring recursion stack memory.

✅ Include stack space in analysis.

❌ Counting input array itself as extra memory.

✅ Usually measure **additional memory used**.

---

# Vocabulary: Brute Force Approach

## Definition

A brute force approach solves a problem by trying every possible solution without optimization.

It is usually:

* Easy to understand
* Easy to implement
* Often inefficient

---

## Example

Find duplicate numbers:

### Brute Force

```javascript
function hasDuplicate(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                return true;
            }
        }
    }
    return false;
}
```

Complexity:

```text
Time: O(n²)
Space: O(1)
```

---

### Optimized Solution

```javascript
function hasDuplicate(arr) {
    const seen = new Set();

    for (let num of arr) {
        if (seen.has(num)) return true;
        seen.add(num);
    }

    return false;
}
```

Complexity:

```text
Time: O(n)
Space: O(n)
```

---

## Key Interview Tip

When solving coding problems:

1. Start with the **Brute Force Solution**
2. Analyze its Time and Space Complexity
3. Look for optimizations using:

   * Hash Maps
   * Sets
   * Sorting
   * Binary Search
   * Divide and Conquer

This is the exact thought process interviewers expect to see.
