## 1. What is HTML?

HTML (**HyperText Markup Language**) is the skeleton of every website. It uses **elements** to tell the browser whether a piece of text is a heading, a paragraph, or a link.

---

## 2. Anatomy of an HTML Element

Most elements follow a "sandwich" structure: an opening tag, the content, and a closing tag.

**Example:**

```html
<h1>The Art of Baking</h1>

```

* **Opening tag (`<h1>`):** Tells the browser a Level 1 heading starts here.
* **Content:** "The Art of Baking" is what the user sees.
* **Closing tag (`</h1>`):** The forward slash `/` tells the browser the heading ends here.

### Nesting Elements

You can "nest" elements inside one another, like Russian nesting dolls. Just ensure they are closed in the correct order.

**Example:**

```html
<p>Fresh bread is <em>absolutely <strong>delicious</strong></em>.</p>

```

* *Note:* The `<strong>` tag is closed before the `<em>` tag because it was opened last.

### Void Elements

Some tags don't wrap around text; they just "stand alone" to insert something.

**Example:**

```html
<p>Line one starts here.<br>Line two starts here.</p>
<img src="bread.jpg" alt="A sourdough loaf">

```

---

## 3. Attributes

Attributes provide extra "settings" or metadata for an element. They always go in the **opening tag**.

**Example:**

```html
<a href="https://example.com" target="_blank">Visit Recipe</a>

```

* **`href`**: The attribute name (where the link goes).
* **`"https://example.com"`**: The attribute value (wrapped in quotes).

### Boolean Attributes

These are "on/off" switches. If the word is there, it’s true.

**Example:**

```html
<video src="cooking.mp4" autoplay muted></video>

```

---

## 4. Anatomy of an HTML Document

This is the standard "boilerplate" code required for every web page to function correctly.

**Example:**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>My Bakery Page</title>
</head>
<body>
    <h1>Welcome to the Bakery</h1>
    <p>We specialize in sourdough.</p>
</body>
</html>

```

---

## 5. Whitespace and Character References

HTML ignores extra spaces and enters. If you hit "Enter" five times in your code, the browser still only shows one space. To show symbols that HTML uses (like `<` or `>`), you must use special codes.

| Symbol | Code | Purpose |
| --- | --- | --- |
| `<` | `&lt;` | Less than |
| `>` | `&gt;` | Greater than |
| `&` | `&amp;` | Ampersand |
| `©` | `&copy;` | Copyright symbol |

**Example:**

```html
<p>The formula for water is H&sub2;O.</p>
<p>Copyright &copy; 2026 Bakery Inc.</p>

```

---

## 6. HTML Comments

Comments are for humans only. The browser skips them entirely. Use them to explain your code to yourself or teammates.

**Example:**

```html
<nav>
    <a href="/home">Home</a>
</nav>

```

---