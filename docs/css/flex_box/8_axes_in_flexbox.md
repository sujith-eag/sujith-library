# Axes in Flexbox

Flexbox operates along two main axes: the **main axis** and the **cross axis**.

### Key Flexbox Properties:

- **`justify-content`**: Aligns items along the **main axis**. (Row for row)
- **`align-items`**: Aligns items along the **cross axis**. (Column for row)


## Main Axis and Cross Axis

**Main Axis**: This is the primary axis along which flex items are arranged. It is determined by the `flex-direction` property.
  - When `flex-direction: row` (the default), the main axis runs **horizontally** (left to right).
  - When `flex-direction: column`, the main axis runs **vertically** (top to bottom).

**Cross Axis**: The axis that runs perpendicular to the main axis.
  - When `flex-direction: row`, the cross axis runs **vertically** (top to bottom).
  - When `flex-direction: column`, the cross axis runs **horizontally** (left to right).

### Changing the Orientation of Flex Items

The `flex-direction` property defines the direction of the main axis and affects how flex items are aligned:

- **`flex-direction: row`** (default): Arranges items **horizontally** from left to right.
- **`flex-direction: row-reverse`**: Items are arranged **horizontally**, but from **right to left**.
- **`flex-direction: column`**: Arranges items **vertically** from top to bottom.
- **`flex-direction: column-reverse`**: Items are arranged **vertically**, but from **bottom to top**.

#### Default Behavior of `flex-direction: row`

- Items are arranged in a **row** (horizontally) and **take up the full width** of the container.
- If you use `flex: 1` on each item, the items will grow equally to fill the available space in the container.

#### Behavior with `flex-direction: column`

- When `flex-direction: column` is set, items are stacked **vertically**. Here, **height** becomes the main dimension (instead of width).
- With `flex: 1`, the items will grow vertically and take up equal amounts of space along the column, but if `flex-basis: 0` is used, the items collapse and shrink.
- To ensure items respect their height, use `flex: 1 1 auto`.

> **Note**: By default, block-level elements (like divs) in `flex-direction: column` will collapse to **height: auto**, meaning they'll shrink to fit their content unless specified otherwise.


## Gap Between Items

The `gap` property adds **spacing** between flex items, similar to adding margins but specifically designed for grid and flex layouts.

- **`gap: 8px`**: Adds **8px** space between all flex items.
- **`gap: 10px 20px`**: Adds **10px** gap between rows and **20px** gap between columns.

This is a relatively **new feature** but provides a cleaner and more consistent way to manage space between items than using margins.


## Using `margin: auto` for Alignment

- **`margin-left: auto;`**: Pushes the item to the **right** by taking up all available space to the left.
- **`margin-right: auto;`**: Pushes the item to the **left** by taking up all available space to the right.

This is a great way to center elements (either horizontally or vertically) within a flex container.


## **Flexbox Cheat Sheet**

[Cheat Sheet for flexbox](https://flexbox.malven.co/)

Here’s a quick reference for some commonly used Flexbox properties:

### General Properties

- **`display`**: Enables Flexbox for all children
  - `display: flex;` — Applies Flexbox layout to the container.
  - `display: inline-flex;` — Same as `flex`, but the container behaves like an inline element.

- **`flex-direction`**: Establishes the **main axis** of the flex container
  - `flex-direction: row;` — Items are arranged **horizontally** (default).
  - `flex-direction: row-reverse;` — Items are arranged **horizontally**, but reversed (right to left).
  - `flex-direction: column;` — Items are arranged **vertically**.
  - `flex-direction: column-reverse;` — Items are arranged **vertically**, but reversed (bottom to top).

- **`flex-wrap`**: Wraps items to a new line if they can't all fit in one
  - `flex-wrap: nowrap;` — No wrapping (all items stay in a single line).
  - `flex-wrap: wrap;` — Items wrap onto multiple lines if needed.
  - `flex-wrap: wrap-reverse;` — Items wrap onto multiple lines in reverse order.

### Alignment and Distribution

**`justify-content`**: Aligns items along the **main axis**
  - `justify-content: flex-start;` — Aligns items to the **start** of the container.
  - `justify-content: flex-end;` — Aligns items to the **end** of the container.
  - `justify-content: center;` — Centers items along the main axis.
  - `justify-content: space-evenly;` — Distributes items evenly, with equal space between them.
  - `justify-content: space-between;` — Distributes items with space between them, but no space at the start or end.
  - `justify-content: space-around;` — Distributes items with equal space around them.

**`align-items`**: Aligns items along the **cross axis**
  - `align-items: flex-start;` — Aligns items to the **start** of the cross axis.
  - `align-items: flex-end;` — Aligns items to the **end** of the cross axis.
  - `align-items: center;` — Centers items along the cross axis.
  - `align-items: baseline;` — Aligns items based on their baseline.
  - `align-items: stretch;` — Stretches items to fill the container along the cross axis.

**`align-content`**: Aligns **multiple lines** of items (affects only when there’s more than one line)
  - `align-content: flex-start;` — Aligns the lines to the **start** of the container.
  - `align-content: flex-end;` — Aligns the lines to the **end** of the container.
  - `align-content: center;` — Centers the lines.
  - `align-content: space-between;` — Distributes the lines with equal space between them.
  - `align-content: space-around;` — Distributes the lines with space around them.
  - `align-content: stretch;` — Stretches the lines to fill the container.

---

### For Individual Children

**`order: integer;`**: Explicitly sets the **order** of flex items. Items with lower values will appear before those with higher values.
  - `order: 2;` The item will appear second in the flex container.

**`align-self: <alignment>;`**: Aligns **individual items** along the cross axis, overriding the `align-items` setting for that particular item.
  - `align-self: flex-end;` — This item will align itself at the **end** of the cross axis, even if the others are aligned differently.

**`flex-grow: <number>;`**: Defines how much the item will **grow** relative to other flex items. If set to `1`, it will grow to fill any available space.
  - `flex-grow: 1;` — The item will grow to fill the available space.

**`flex-shrink: <number>;`**: Defines how much the item will **shrink** relative to others. By default, items shrink when space is tight.
  - `flex-shrink: 2;` — This item will shrink twice as fast as others.

**`flex-basis: <value>;`**: Sets the **initial size** of an item before growing or shrinking.
  - `flex-basis: 200px;` — The item starts with a size of `200px`.

---

### Putting It All Together

- **`flex: 1;`** — This shorthand means `flex-grow: 1`, `flex-shrink: 1`, and `flex-basis: 0`. It allows the item to grow and shrink evenly, filling available space in the container.
- **`flex: 1 1 auto;`** — This allows the item to grow and shrink, but it starts at its **natural size** based on its content.

---

- This beautiful [Interactive Guide to Flexbox](https://www.joshwcomeau.com/css/interactive-guide-to-flexbox/) 
- [Typical use cases of Flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Typical_Use_Cases_of_Flexbox) is an MDN article
- The [CSS Tricks “Guide to Flexbox”](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) is a classic. 

