# Declaration

A **Declaration** is a key-value pair that defines a style rule in CSS. It is composed of two parts:  
1. **Property**: An identifier (human-readable name) that specifies the feature to be styled.  
2. **Value**: Describes how the feature should be handled by the browser engine.

## Declaration Block

A declaration block is a group of one or more declarations enclosed in curly braces (`{}`), and each declaration is separated by a semicolon (`;`).
```css
div.bold-text {
  font-weight: 700;   /* Property: font-weight, Value: 700 */
  text-align: center; /* Property: text-align, Value: center */
}
```

- The **property** is `font-weight` and `text-align`.
- The **value** for `font-weight` is `700` and for `text-align` is `center`.



## CSS Properties

Each CSS property has a set of valid values, defined by a formal grammar, as well as a semantic meaning, implemented by the browser engine.

---

### Color and Background Color

The `color` property controls the text color, while the `background-color` property defines the background color of an element. Both properties can accept different kinds of values:

- **Keywords** (e.g., `red`, `transparent`)  
- **HEX values** (e.g., `#FF5733`)  
- **RGB values** (e.g., `rgb(255, 87, 51)`)  
- **HSL values** (e.g., `hsl(9, 100%, 60%)`)
[[CSS_Color_values]]

```css
p {
  /* HEX color */
  color: #1100ff;
}

p {
  /* RGB color */
  color: rgb(100, 0, 127);
}

p {
  /* HSL color */
  color: hsl(15, 82%, 56%);
}
```

---

### Typography Basics

#### Font Family

The `font-family` property defines which font to use for the text. It can be:
- A **specific font family name** (e.g., `"Times New Roman"`).  
- A **generic font family** (e.g., `serif`, `sans-serif`).

If a browser can't find or support the first font in the list, it will try the next one, and so on, until it finds a valid font.   
This is why it’s best practice to include a list of values for this property, starting with the font you want to be used most and ending with a generic font family as a fallback, e.g. `font-family: "Times New Roman", serif;`

```css
body {
  font-family: "Times New Roman", serif;
}
```
In this example, `"Times New Roman"` is the preferred font, and `serif` is the fallback.

---

#### Font Size

The `font-size` property sets the size of the text. This value should not contain any spaces between the number and the unit (e.g., `px`, `em`).

```css
p {
  font-size: 22px;
}
```

---

#### Font Weight

The `font-weight` property affects the boldness of the text. It can accept:
- **Keywords** like `normal`, `bold`.  
- **Numeric values** (e.g., `700` for bold, `400` for normal).

```css
h1 {
  font-weight: bold;   /* Keyword */
}

h2 {
  font-weight: 700;    /* Numeric value for bold */
}
```

---

#### Text Alignment

The `text-align` property aligns text horizontally within an element. Common values include:
- `left`
- `center`
- `right`
- `justify`

```css
p {
  text-align: center;
}
```

---

### Image Size (Height and Width)

By default, an `<img>` element’s `height` and `width` values are the same as the image’s actual dimensions. 

Images aren’t the only elements that we can adjust the height and width on.
To adjust the size of the image without causing it to lose its proportions, you would use a value of “auto” for the `height` property and adjust the `width` value:

**Adjusting Image Size Without Losing Proportions**
```css
img {
  height: auto;      /* Preserve aspect ratio */
  width: 500px;      /* Set a fixed width */
}
```

This ensures the image keeps its aspect ratio while adjusting the width to `500px`.

**Why Set Height and Width?**

When you explicitly set the `height` and `width` for images, you help the browser allocate space on the page before the image loads. This prevents layout shifts as images load.


## Inline vs. Block Elements

### Inline Elements
- Inline elements do not start on a new line. They appear alongside other elements on the same line. `<a>`, `<span>`, `<strong>`, `<em>`.

**Inline elements have special behavior** for padding and margin. For instance, they won’t expand vertically like block elements.   
Padding and margin behave differently on inline elements. 
Do not want to try to put extra padding or margin on inline elements.

---

### Block Elements
- Block elements start on a new line and take up the full width of their parent element, stacking vertically. `<div>`, `<p>`, `<h1>` to `<h6>`.

**Block elements** behave like containers that stretch across the page.


## Display Property

### Inline vs. Block Display

- **`display: inline`**: Makes elements appear in a line, one after another.
- **`display: block`**: Forces elements to take up the full width, causing each element to appear on a new line. Next item goes to the next line (stacked on each other)

```css
img {
  display: block;
}

button {
  display: inline;
}
```
- `img` will behave as a block element (taking up full width).
- `button` will behave inline, appearing next to other inline elements.

### inline-block: A Middle Ground

The `inline-block` value combines the behavior of inline and block elements. It allows elements to sit inline, but you can still apply block-level properties like padding and margin.
You’ll probably end up reaching for flexbox more often

```css
div {
  display: inline-block;
  margin: 10px;
}
```
- **`inline-block`** elements behave like inline elements, but you can still control their dimensions and margins like block elements.


## Divs and Spans

- **`<div>`**: A block-level element used to group other elements and apply styles. It’s a generic container with no semantic meaning. Divs allow us to _divide_ the page into different blocks and apply styling to those blocks.
  
- **`<span>`**: An inline-level element used to group text or inline elements for styling purposes. It’s also a generic container but doesn't affect layout as much as `<div>`.

```html
<div class="container">
  <p>This is a <span class="highlight">highlighted</span> word.</p>
</div>
```


## Main reference

- [Mozilla CSS values and units](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units) can be used to learn the various types of values possible in absolute or relative terms.	

- [Mozilla CSS Properties Reference](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Properties_Reference) 
  can be used to learn if a particular CSS property is inherited or not; 
  look for the **Inherited** field inside the **Formal Definition** section. Here’s an example for [the CSS `color` property](https://developer.mozilla.org/en-US/docs/Web/CSS/color#formal_definition).

