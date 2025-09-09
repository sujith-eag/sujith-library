# Adding CSS to HTML

There are three primary methods to add CSS to an HTML document: **External CSS**, **Internal CSS**, and **Inline CSS**. Let’s break down each method:


## 1. External CSS

External CSS involves creating a separate CSS file and linking it to HTML document. This is done using the void `<link>` element inside the `<head>` section of the HTML.

The `href` attribute specifies the location of the CSS file, and the `rel` attribute defines the relationship between the HTML file and the linked CSS file (which will always be `stylesheet`).


```html
<!-- index.html -->
<head>
  <link rel="stylesheet" href="styles.css">
</head>
```

```css
/* styles.css */
div {
  color: white;
  background-color: black;
}

p {
  color: red;
}
```

### Advantages of External CSS:

1. **Separation of concerns**: Keeps HTML and CSS files separate, making the HTML cleaner and smaller.
2. **Reusability**: You only need to edit the CSS in one place, and those styles will apply to every HTML page linked to that CSS file. This is especially useful for websites with multiple pages that share similar styles.


## 2. Internal CSS

Internal CSS, or embedded CSS, involves placing the CSS rules directly inside the HTML document. The CSS is placed within the `<style>` tag inside the `<head>` section of the HTML.

1. Place your CSS rules between the opening and closing `<style>` tags in the `<head>` section of your HTML document.
2. This method is useful when you want to style a single HTML page without affecting others.


**HTML with Internal CSS**:
```html
<head>
  <style>
    div {
      color: white;
      background-color: black;
    }

    p {
      color: red;
    }
  </style>
</head>

<body>
  <div>Sample content</div>
  <p>Some text</p>
</body>
```

### Advantages of Internal CSS:
- Ideal for applying styles to a single page or when you're testing out different styles quickly.
- No need to create and maintain a separate CSS file for simple styles on one page.

### Disadvantages of Internal CSS:
- Does not keep styles separate from content, which can make the HTML file larger and less maintainable, especially for larger projects.
- Not reusable across multiple pages (unlike External CSS).


## 3. Inline CSS

Inline CSS applies styles directly to individual HTML elements using the `style` attribute. This method allows you to specify styles directly within the HTML tag itself.

### How to Use Inline CSS

1. Add the `style` attribute to an HTML element.
2. Place the CSS declaration(s) within the `style` attribute. Each declaration is separated by a semicolon.

**HTML with Inline CSS**:
```html
<body>
  <div style="color: white; background-color: black;">Content goes here</div>
  <p style="color: red;">Some text here</p>
</body>
```

### Advantages of Inline CSS:
- Useful for quickly testing or applying one-off styles to specific elements.
- No need to write separate CSS files or use `<style>` tags.

### Disadvantages of Inline CSS:
- **Poor maintainability**: Styles are applied directly to elements, which can make the HTML messy and harder to maintain.
- **Redundancy**: You’ll need to repeat the same styles across different elements if they share the same styling, which can lead to repetitive code.
- **Overrides other styles**: Inline styles have the highest specificity, meaning they can override other CSS rules (including external and internal styles).


## Summary of Methods

| Method          | When to Use                            | Pros                                  | Cons                                |
|-----------------|----------------------------------------|---------------------------------------|-------------------------------------|
| **External CSS** | When you have multiple pages or want separation of concerns | Clean, reusable across multiple pages | Requires an extra HTTP request for the CSS file |
| **Internal CSS** | For single-page styles or testing     | Easy to apply to a single page       | Not reusable across pages; can make HTML bulky |
| **Inline CSS**   | For quick, one-off styling of elements | Quick to implement                   | Hard to maintain, can lead to redundancy |

