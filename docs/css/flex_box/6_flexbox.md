# Flexbox

[Flexbox Resource](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox)

Flexbox is a layout model in CSS designed to arrange items into rows or columns. It allows items to **flex** (grow or shrink) based on defined rules, giving us more control over the alignment, spacing, and distribution of elements in a container.

## Flex Containers and Flex Items

Flexbox involves two main concepts:
- **Flex Container**: This is the parent element that has `display: flex` applied to it. It acts as a wrapper for the child elements.
- **Flex Items**: These are the child elements inside the flex container, which will be arranged based on the flex properties of the container.

Any element can be both a flex container **and** a flex item. 
flex containers can be nested, applying `display: flex` to a flex item and then arranging **its** children using flexbox again (i.e., creating nested flexboxes).

---

### Centering Buttons with Flexbox

```html
<div class="button-container">
  <button>Button 1</button>
  <button>Button 2</button>
</div>
```

```css
.button-container {
  display: flex;  /* Establish flexbox on the container */
  justify-content: center;  /* Align the buttons horizontally in the center */
}

button {
  margin: 0 10px;  /* Optional: Space between buttons */
}
```

**Explanation**:
- **Flex Container**: The `<div class="button-container">` is the flex container with `display: flex`.
- **Flex Items**: The two `<button>` elements are the flex items inside the container.
- `justify-content: center` is used to center the buttons horizontally.
- You can use **`margin`** on the buttons to add space between them, or use `justify-content: space-around` or `justify-content: space-between` to control spacing automatically.

## Common Flexbox Properties

### 1. Flex Container Properties

The **flex container** controls the layout of its direct child elements (flex items).

**`display: flex`**: Establishes the flex container.   

**`flex-direction`**: Defines the direction in which the flex items are placed (row, column, etc.).
  - `row` (default): Items are placed horizontally (left to right).
  - `column`: Items are placed vertically (top to bottom).

**`justify-content`**: Aligns the flex items along the main axis (horizontal or vertical depending on `flex-direction`).
  - `center`: Centers items within the container.
  - `flex-start`: Aligns items to the start of the container.
  - `flex-end`: Aligns items to the end of the container.
  - `space-between`: Distributes items evenly with space between them.
  - `space-around`: Distributes items with equal space around them.
  - `space-evenly`: Distributes items with equal space between and around them.

```css
.container {
  display: flex;
  justify-content: space-between; /* Space out items evenly */
}
```

**`align-items`**: Aligns the items along the cross axis (perpendicular to the main axis).
  - `stretch` (default): Stretches items to fill the container's height.
  - `flex-start`: Aligns items to the top (or left if `flex-direction: row`).
  - `flex-end`: Aligns items to the bottom (or right if `flex-direction: row`).
  - `center`: Centers items vertically (or horizontally).
  - `baseline`: Aligns items based on their baseline (useful for text).

```css
.container {
  display: flex;
  align-items: center;  /* Vertically centers items in the container */
}
```

**`align-content`**: Aligns the flex lines when there is extra space along the cross axis (for multi-line flex containers).
  - `flex-start`, `flex-end`, `center`, `space-between`, `space-around`, and `stretch` work similarly as with `align-items`.

### 2. Flex Item Properties

These properties control the layout and behavior of individual flex items inside a flex container.

**`flex-grow`**: Defines how much a flex item should grow relative to the other items in the container. It is a proportion.
  - `flex-grow: 1;` means the item can grow to take up any available space. 
  - A value of `0` means it will not grow.

```css
.item {
  flex-grow: 1;  /* Allow this item to grow */
}
```

**`flex-shrink`**: Defines how much a flex item should shrink relative to the other items when there is not enough space. 
  - `flex-shrink: 1;` (default) allows the item to shrink if needed.
  - `flex-shrink: 0;` means the item will not shrink.

```css
.item {
  flex-shrink: 0;  /* Prevent this item from shrinking */
}
```

**`flex-basis`**: Specifies the initial size of the flex item before any space distribution. 
  - This can be a fixed value (e.g., `200px`) or `auto` (where the size is based on the item's content).

```css
.item {
  flex-basis: 100px;  /* Set initial size to 100px */
}
```

**`flex`**: This is a shorthand property for `flex-grow`, `flex-shrink`, and `flex-basis`. 
  - `flex: 1` is a common shorthand, which means the item can grow and shrink, and the initial size is `0`.

```css
.item {
  flex: 1;  /* Equivalent to flex-grow: 1; flex-shrink: 1; flex-basis: 0; */
}
```

**`align-self`**: Overrides the `align-items` setting for an individual flex item.
  - `align-self: center;` will center the item vertically (or horizontally depending on the `flex-direction`).

```css
.item {
  align-self: flex-end;  /* Align this item to the end along the cross axis */
}
```


## Columns in Flexbox

By default, Flexbox arranges items in a **row**. However, you can also create a column layout by using `flex-direction: column;`.

### Creating Columns in Flexbox

When you use `display: flex`, it places all **direct children** of the container into rows or columns. However, **only direct children** are arranged this way. Any nested elements inside those direct children will not automatically be arranged into columns.

### Creating a Column Layout

```css
.container {
  display: flex;
  flex-direction: column;  /* Arrange items in a column */
  align-items: center;  /* Optionally, center the items horizontally */
}
```

**Important Notes**:
- Flexbox uses the **container's direct children** for the layout. 
- If a container has nested elements, those elements will not be arranged in a column unless you apply `display: flex` to the nested container as well.
- To make the layout responsive, the `flex` container width should be set appropriately, especially in responsive designs.


## Summary of Key Flexbox Properties

| **Property**      | **Description**                                            | **Values**                                                                          |
| ----------------- | ---------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `display: flex`   | Establishes the flex container                             | `display: flex;`                                                                    |
| `flex-direction`  | Defines the direction of the flex items                    | `row`, `column`, `row-reverse`, `column-reverse`                                    |
| `justify-content` | Aligns items along the main axis                           | `flex-start`, `flex-end`, `center`, `space-between`, `space-around`, `space-evenly` |
| `align-items`     | Aligns items along the cross axis                          | `flex-start`, `flex-end`, `center`, `baseline`, `stretch`                           |
| `align-self`      | Overrides `align-items` for individual flex items          | `auto`, `flex-start`, `flex-end`, `center`, `baseline`, `stretch`                   |
| `flex-grow`       | Defines the growth factor of a flex item                   | A number (default `0`)                                                              |
| `flex-shrink`     | Defines the shrink factor of a flex item                   | A number (default `1`)                                                              |
| `flex-basis`      | Defines the initial size of a flex item                    | Any valid length (e.g., `auto`, `100px`, `20%`)                                     |
| `flex`            | Shorthand for `flex-grow`, `flex-shrink`, and `flex-basis` | `flex: 1;` or `flex: [grow] [shrink] [basis]`                                       |
| `align-content`   | Aligns multiple lines of flex items in the container       | `flex-start`, `flex-end`, `center`, `space-between`, `space-around`, `stretch`      |

---


- Interneting Is Hard tutorial on [CSS layouts with flexbox](https://internetingishard.netlify.app/html-and-css/flexbox/index.html).
- Slaying the dragon tutorial on [Flexbox in 8 minutes](https://youtu.be/phWxA89Dy94?si=UOXlsTa0BMfQYG3q).

