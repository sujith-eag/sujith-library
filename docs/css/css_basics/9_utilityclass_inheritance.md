# Utility Classes

A **utility class** in CSS is a class that is designed to apply a single, specific property to an element. Unlike traditional classes that might group together several properties to style an element, utility classes focus on applying a single CSS rule, which allows you to easily reuse it across different elements.

1. **Create a class with one property**:
```css
.italic {
 font-style: italic;
}
```

2. **Apply it in the HTML**:
```html
<p class="italic">This is italicized text.</p>
<div class="italic">This div will also have italicized text.</div>
```

**Advantages of Utility Classes:**
- **Simpler and more maintainable**: You define the CSS once, and then apply it wherever it's needed.
- **Easier to remove styles**: If you decide you no longer want the style, you can simply remove the utility class from the HTML element.
- **Faster development**: You can quickly add styles without having to write a whole class for each situation.

To apply the same property to multiple elements, use **multi-cursor editing**. In many code editors (e.g., VS Code), you can select multiple occurrences of the same text (like a class name) by pressing `Ctrl + D` (or `Cmd + D` on Mac). This allows you to edit them all simultaneously.


## Inheritance in CSS

CSS **inheritance** is a concept where certain properties applied to a parent element are automatically inherited by its child elements. This can save you time and code by applying styles once to the parent, rather than individually to each child element.

### Properties That Are Inherited
Some properties are inherited by default, including many related to **typography** and text layout. These properties typically affect how text appears across multiple elements and are inherited by child elements automatically.

**Common inherited properties** include:
- `color`
- `font-family`
- `font-size`
- `font-weight`
- `line-height`
- `text-align`
- `text-transform`

### How to Use Inheritance
You can apply a style to a parent element, and its children will inherit those styles without needing to explicitly set them.

For example:
```css
body {
  color: darkslategray;
  font-family: Arial, sans-serif;
}

h1 {
  font-size: 2em;
}

p {
  font-size: 1em;
}
```

In this case, both the `h1` and `p` elements will inherit the `color` and `font-family` properties from the `body` tag. You only need to define them once at the parent level.

### DRY (Don’t Repeat Yourself) Principle in CSS
To follow the **DRY principle**, apply inherited properties to the parent container and let them be inherited by the child elements. This avoids redundancy and keeps your CSS more concise.

```css
/* Parent element */
body {
  color: #333;
  font-family: 'Arial', sans-serif;
  font-size: 16px;
}

/* Child elements inherit these properties automatically */
h1, p, div {
  /* No need to define color, font-family, font-size again */
}
```

This helps reduce repetition and ensures consistency across your website.

___

### Font Family Stack

When defining fonts on a webpage, you usually provide a **font stack**. This is a list of fonts that the browser should use in the specified order, falling back to the next font in the stack if the first one is unavailable.

#### Example of a Font Stack:
```css
body {
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
}
```

- **"Helvetica Neue"** is the **preferred font**.
- If it’s not available, the browser will use **Helvetica**.
- If that’s not available either, it will try **Arial**.
- If none of these fonts are available, it will use the default **sans-serif** font.

This ensures that your content remains readable, even if the primary font isn't installed on the user's device.

---

### Making a Circle from a Square

In CSS, you can **transform a square into a circle** by using the `border-radius` property with a value of **50%**. This works because the `border-radius` sets how round the corners of an element are, and a value of **50%** will make all four corners fully rounded, turning the shape into a circle.

```css
.circle {
  width: 100px;
  height: 100px;
  background-color: blue;
  border-radius: 50%; /* Makes the square a circle */
}
```

HTML:
```html
<div class="circle"></div>
```

- The element is **100px by 100px**, making it a square.
- The `border-radius: 50%` makes the square into a perfect circle.

This is a simple and powerful way to create circles in web design.

