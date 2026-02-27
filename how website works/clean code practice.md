# Clean code practice

Clean code is about making your code readable and maintainable for your future self and your teammates.

## 1. Meaningful Names

Variables and functions should tell a story. If you have to write a comment to explain what a variable is, the name isn't good enough.

- Bad: let d = 31; // days since last login
- Good: let daysSinceLastLogin = 31;
- Action: Use pronounceable and searchable names. Avoid temp, data, or info.

## 2. The "Do One Thing" Rule (SRP)

A function should be like a specialist, not a multitasker. This is known as the Single Responsibility Principle.

- The Smell: If your function is 50 lines long and has the word "And" in its name (e.g., validateAndSaveUserAndSendEmail), it's doing too much.
- The Fix: Break it into three smaller functions: validateUser(), saveUser(), and sendEmail().

## 3. Don't Repeat Yourself (DRY)

Every piece of knowledge or logic must have a single, unambiguous representation within a system.

- Why? If you copy-paste a logic block in three places and find a bug, you have to fix it in three places. If you miss one, you've just created a "zombie bug."
- Solution: Wrap repeated logic into a reusable function or class.

## 4. Comments are for "Why," not "What"

Beginners often comment on every line. Clean code should be "self-documenting."

- Avoid: i++; // increment i (We can see that!)
- Use: // We use a retry limit here because the third-party API is unstable.
- Rule of Thumb: If the code is confusing enough to need a "what" comment, try refactoring the code to be clearer first.

## 5. The Boy Scout Rule

- If you’re fixing a bug and notice a messy variable name or a redundant loop nearby, fix it! Small, incremental improvements prevent "Technical Debt" from piling up.

## Summary Table for Quick Reference

> | Concept    | Goal        | Beginner Tip                                  |
> | ---------- | ----------- | --------------------------------------------- |
> | Naming     | Clarity     | Use nouns for variables, verbs for functions. |
> | Functions  | Simplicity  | Keep them under 20 lines if possible.         |
> | Formatting | Consistency | Use a linter (like Prettier or ESLint).       |
> | Nesting    | Readability | Avoid "Arrow Code" (too many if inside if).   |

Writing clean code is a habit, not a destination.
