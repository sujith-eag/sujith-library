# Box Model

[MDN’s lesson on the box model](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model). Inline boxes !

Every element on a webpage is essentially a rectangular box, and the **Box Model** describes the structure of these boxes. 
Margin, Border, Padding and Content is what is called box model.` * {outline: 2px solid red}` marking boxes.

The model consists of the following components:

1. **Content**: The actual content of the element, such as text or images.
2. **Padding**: The space between the content and the border.
3. **Border**: Surrounds the padding (if any) and content.
4. **Margin**: The space outside the border, separating elements from each other.

## 1. Margin

The margin is the space outside the element’s border, separating it from other elements.
[CSS Tricks page on margins](https://css-tricks.com/almanac/properties/m/margin/)

**Default Margin**
The default margin for most elements (especially block-level elements) is usually `8px`, but it can be removed by setting it to `0`.

### Collapsing Margins
If two elements have adjacent margins (i.e., one is directly above or below the other), the larger margin will "collapse" and be applied instead of combining the two. For example:
- If the bottom margin of the first element is `15px` and the top margin of the second element is `20px`, the space between the two elements will be `20px` (not `35px`).

### Centering Elements Horizontally Using Margins
To horizontally center a block element:
1. Set `display: block;` to the element (block elements are naturally placed on their own line).
2. The element must have a defined width.
3. Set `margin-left: auto;` and `margin-right: auto;`.

```css
.element {
  width: 300px;
  margin-left: auto;
  margin-right: auto;
}
```

- `margin-left: auto;` pushes the element to the left.
- `margin-right: auto;` pushes it to the right, dividing the remaining space equally on both sides, thus centering the element.

### Margin Shorthand
The margin can be set using shorthand notation:
- `margin: 10px;` — applies `10px` to all four sides.
- `margin: 10px 20px 30px 40px;` — follows the "clock method":
  - Top: `10px`
  - Right: `20px`
  - Bottom: `30px`
  - Left: `40px`
  
If only two values are given:
- `margin: 20px auto;` — `20px` for top and bottom, and `auto` for left and right (centers horizontally).


## 2. Padding

Padding is the space between the content of an element and its border. It increases the internal space within a box.

### Padding Shorthand
Padding can be applied to all four sides at once using shorthand:
- `padding: 10px;` — applies `10px` padding to all sides.
- `padding: 10px 20px 30px 40px;` — follows the same "clock method" as margin:
  - Top: `10px`
  - Right: `20px`
  - Bottom: `30px`
  - Left: `40px`

If two values are provided:
- `padding: 20px 10px;` — `20px` for top and bottom, `10px` for left and right.



## 3. Border and Border Radius

The border is the area between the content/padding and the margin. It is often used to visually separate elements.

The border can be set with:
- **Width**: The thickness of the border.
- **Style**: The type of border (solid, dashed, dotted, etc.).
- **Color**: The color of the border.

```css
element {
  border: 8px solid blue;
}
```

### Border Radius
The `border-radius` property is used to round the corners of an element’s border.
```css
element {
  border-radius: 10px;
}
```


## 4. Content

The **content** of a box refers to the actual text, images, or other elements inside it.

- **Height and Line Height**:
  - `height: 24px;` — this sets the height of the content area (excluding padding and borders).
  - `line-height: 24px;` — this sets the height of a line of text, which can affect vertical alignment.


## Box Sizing

The `box-sizing` property controls how the width and height of an element are calculated.

### content-box (default)
In the `content-box` model, the width and height of the box are applied to the content only. The padding and border are added on top of the content width and height, making the total size of the element larger than the declared width and height.

```css
box-sizing: content-box;
```

- if you set `width: 300px;` and the element has padding and borders, the total width will be larger than `300px`.
Here the size of the box will be `width + paddig + border`
so if width is `300px` it is the width of the content of the box but not the box.

### border-box
In the `border-box` model, the width and height include the padding and border. This means the total width or height is exactly what you set, with padding and borders inside the defined dimensions.

```css
box-sizing: border-box;
```

- if `width: 300px;`, the padding and border will be included inside this `300px` width.

### Best Practice
To apply `border-box` globally (for all elements), you can use the following rule:

```css
* {
  margin: 0;
  padding: 0;
  border: 0;
  box-sizing: border-box;
}
```
This resets the box model for all elements, making layout calculations easier.


## Summary of the Box Model Properties

| Property     | Description                                                           | Shorthand Example                               |
|--------------|-----------------------------------------------------------------------|------------------------------------------------|
| **Margin**   | Space outside the border of an element.                               | `margin: 10px 20px 30px 40px;`                |
| **Padding**  | Space between the content and the border.                             | `padding: 10px 20px;`                         |
| **Border**   | A line surrounding the padding and content.                           | `border: 8px solid blue;`                     |
| **Content**  | The actual content of the box (text, images, etc.).                   | `height: 24px;` or `line-height: 24px;`       |
| **Box-sizing** | Defines how the total width and height of the box are calculated.    | `box-sizing: border-box;` or `content-box;`   |


## Additional resources
1. [Learn CSS Box Model](https://www.youtube.com/watch?v=rIO5326FgPE)
2. [box-sizing: border-box](https://www.youtube.com/watch?v=HdZHcFWcAd8)
- [Scrim on the box model](https://scrimba.com/scrim/cof3d488184abe24ec6258ab4).
- [Slaying The Dragon](https://youtu.be/nSst4-WbEZk?si=HbgcEB7UyLdNbE6n)  for understanding the box model.

