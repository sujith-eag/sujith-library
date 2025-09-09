# Multiple Selectors

## 1. Grouping Selectors

Grouping selectors allows for applying the same style rules to multiple elements. Instead of writing separate rules for similar selectors, they can be grouped together with a comma-separated list. This helps in reducing redundancy and makes your CSS more efficient.

If the `.read` and `.unread` selectors share common style declarations, we can group them together:

**Example 1: Grouping selectors without grouping**
```css
.read {
  color: white;
  background-color: black;
  /* several unique declarations */
}

.unread {
  color: white;
  background-color: black;
  /* several unique declarations */
}
```

**Example 2: Grouping selectors with a comma-separated list**
```css
.read,
.unread {
  color: white;
  background-color: black;
}

.read {
  /* several unique declarations for .read */
}

.unread {
  /* several unique declarations for .unread */
}
```

By grouping them, you can apply common properties (like `color` and `background-color`) to both classes at once. This reduces repetition and makes your code easier to maintain.


## 2. Chaining Selectors

Chaining selectors allows for targeting elements that match multiple conditions, such as an element that has both a specific class and an ID, or multiple classes. This technique can be used to apply styles more specifically without having to create new classes or IDs.

**Example 1: Chaining two classes**
Chain class selectors to target elements that have both classes:
```html
<div>
  <div class="subsection header">Latest Posts</div>
  <p class="subsection preview">This is where a preview for a post might go.</p>
</div>
```

```css
.subsection.header {
  color: red;
}
```

In this case, `.subsection.header` selects only the `<div>` element with both the `subsection` and `header` classes.

**Example 2: Chaining a class and an ID**
Chaining a class and an ID to target a specific element:
```html
<div>
  <div class="subsection header">Latest Posts</div>
  <p class="subsection" id="preview">This is where a preview for a post might go.</p>
</div>
```

```css
.subsection.header {
  color: red;
}

.subsection#preview {
  color: blue;
}
```

In this case:
- `.subsection.header` targets the `div` with both classes `subsection` and `header`.
- `.subsection#preview` targets the `p` element with class `subsection` and ID `preview`.

**Important**: You cannot chain multiple type selectors (e.g., `div` and `p`) since an element can only be one type. For example, `divp` is not valid because it tries to target a non-existent `<divp>` element.


## 3. Combinators

Combinators in CSS are used to describe relationships between elements. They allow us to select elements based on their position or relationship in the HTML structure.

### 3.1 Descendant Combinator (A B)
Specifies that the element selected by `B` is a descendant of the element selected by `A`, but is not necessarily a direct child.   
The **descendant combinator** (represented by a space between two selectors) selects an element that is a descendant of another element. This can be any level of nesting, not just direct children.

`child` class will only be selected if it is nested inside `ancestor`, regardless of how deep that nesting is.

```html
<div class="ancestor">
  <div class="contents">
    <div class="contents">More Content</div>
  </div>
</div>
<div class="contents">No nesting</div>
```

```css
.ancestor .contents {
  color: green;
}
```

- The `.ancestor .contents` selector will apply to the `.contents` elements inside the `.ancestor` element, but **not** the `.contents` element outside it.
- There is no limit to how many nested elements you can select with descendant combinators, e.g., `.one .two .three .four`.

---

### 3.2 Next-Sibling Combinator (A + B)

The **next-sibling combinator** specifies that the elements selected by both `A` and `B` have the same parent and selects the element `B` that immediately follows element `A` as a sibling.

```html
<div class="first">First</div>
<div class="second">Second</div>
```

```css
.first + .second {
  color: purple;
}
```

- This rule will apply `color: purple` to `.second` only if it directly follows `.first`.

---

### 3.3 Subsequent-Sibling Combinator (A ~ B)

The **subsequent-sibling combinator** selects all elements `B` that share the same parent as element `A` and come **after** it, but not necessarily immediately.

```html
<div class="first">First</div>
<div class="second">Second</div>
<div class="third">Third</div>
```

```css
.first ~ .third {
  color: orange;
}
```

- In this case, the rule will apply `color: orange` to `.third` because it follows `.first` and is within the same parent.

---

### 3.4 Child Combinator (A > B)

The **child combinator** selects element `B` only if it is a **direct child** of element `A`.

```html
<div class="parent">
  <div class="child">Child</div>
</div>
<div class="child">Not a direct child</div>
```

```css
.parent > .child {
  color: blue;
}
```

- The `.parent > .child` selector will only apply styles to `.child` elements that are direct children of `.parent`.

---

### 3.5 Column Combinator (A || B)

The **column combinator** is used in **tables** to target elements within a specific column.

```html
<table>
  <tr>
    <td>Column 1</td>
    <td>Column 2</td>
  </tr>
  <tr>
    <td>Data 1</td>
    <td>Data 2</td>
  </tr>
</table>
```

```css
td || Column 2 {
  color: red;
}
```

- The column combinator selects elements in a specified table column, including those that span multiple columns.


## CSS Cascade and Specificity


### Specificity in CSS

The order of importance in CSS rules is determined by specificity. More specific selectors override less specific ones.

### Specificity Hierarchy:
1. **Inline styles**: Styles applied directly to an element via the `style` attribute.
2. **ID selectors**: `#idname` (more specific than classes or elements).
3. **Class selectors**: `.classname`
4. **Type selectors**: `div`, `p`, etc.

**General Rule**: An ID selector will always override any number of class or type selectors, and a class selector will override any number of type selectors.



```html
<div class="main">
  <div class="list" id="subsection">Blue text</div>
</div>
```

```css
#subsection {
  color: blue;
}

.main .list {
  color: red;
}
```

- **Result**: The text will appear in **blue** because the ID selector (`#subsection`) has higher specificity than the class selector (`.main .list`).


## Additional resources

- [An interactive Scrim](https://scrimba.com/scrim/co12d4cf99cf2776f19e84a9d) 
  Video covers how selectors can be chained and used along with rules to select specific items.

- [The CSS Cascade](https://2019.wattenberger.com/blog/css-cascade) 
  interactive read that in detail about other factors that affect what CSS rules actually end up being applied.
- [CSS Specificity Explained](https://www.youtube.com/watch?v=c0kfcP_nD9E) 
  video from Kevin Powell about specificity of selectors and priorities.
- [Interactive Scrim on the CSS Cascade.](https://v1.scrimba.com/scrim/c9gwmnAR)
- [CSS Specificity Calculator](https://specificity.keegan.st/) allows you to fill in your own selectors and have their specificity calculated and visualized.

