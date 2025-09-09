# Flex Flexibility

Flexbox makes it easy to create responsive layouts, where flex items can grow, shrink, and adjust according to the available space in the flex container.    
By manipulating the **flex-grow**, **flex-shrink**, and **flex-basis** properties, we can control how items behave in the layout.

## Components of Flexibility

### 1. flex-grow

`flex-grow` determines how a flex item will **grow** relative to other flex items in the container. 

- It specifies the "growth factor" for an item. The flex container distributes free space among its flex items according to their `flex-grow` values. 
- The greater the value of `flex-grow`, the more space the item will take up compared to the other items.
  
```css
.container {
  display: flex;
}

.item1 {
  flex-grow: 1;  /* This item will grow to fill space */
}

.item2 {
  flex-grow: 2;  /* This item will grow twice as much as item1 */
}
```

`flex: 1 1 0%` makes all the div grow the same amount.
if `flex: 2 1 0%` is used in any of the other div, it will grow 2 times the size of the other.

### 2. flex-shrink
`flex-shrink` defines the "shrink factor" of a flex item. It determines how a flex item will **shrink** when there is not enough space in the flex container. Used to prevent overflow.

- It specifies how much a flex item should shrink when the container is smaller than the total size of all flex items.
- A `flex-shrink` value greater than `1` will make an item shrink faster than others. A value of `0` prevents shrinking completely.

```css
.container {
  display: flex;
}

.item1 {
  flex-shrink: 1;  /* This item will shrink normally */
}

.item2 {
  flex-shrink: 2;  /* This item will shrink twice as much as item1 */
}
```

If the total width of `item1` and `item2` is larger than the available space, `item2` will shrink **twice as fast** as `item1`.

This gets applied only if the size of all flex items are larger than their parent container.

`flex-shrink: 1` is the default value, which means all items will shrink evenly. A higher number can be  selected for an item to make it shrink at higher rate.
>Ex: Suppose width of 3 div is set to 100 each and the parent div isn't 300, then all div will shrink evenly to fit

If any specific item should not shrink below its defined size, then `flex-shrink: 0` can be used. It will grow beyond this size but will not shrink below it.

>[!note]
>  When `flex-grow` and `flex-shrink` is specified, the flex boxes wont respect the given values of width. They shrink and expand to fill the box.
>  
>  When `flex-grow` `flex-shrink` are 0, they will be completely inflexible.

### 3. flex-basis
`flex-basis` sets the **initial size** of a flex item before it starts growing or shrinking. It defines the item's **hypothetical size** along the main axis (either width or height).

- It acts like the **width** or **height** of a flex item, depending on the flex direction. The item will start at this size, and then grow or shrink based on the remaining space in the container.
- The `flex-basis` value defines the starting point for growth or shrinkage. If `flex-basis` is set to `0%`, it means the item will ignore its natural size and shrink or grow to fill the available space.

```css
.container {
  display: flex;
}

.item1 {
  flex-basis: 100px;  /* Item will start at 100px wide */
}

.item2 {
  flex-basis: auto;   /* Item will use its natural size */
}
```

In this example, `item1` will start at `100px` wide, and `item2` will use its natural width based on its content.

> Default for `flex-basis` is `auto`   but in shorthand `flex: 1` it will be 0%

### ***flex-grow***, ***flex-shrink***, and ***flex-basis*** working together

When all three properties are set on a flex item, the item will:
- **Grow** to take up available space according to its `flex-grow` value.
- **Shrink** to avoid overflow according to its `flex-shrink` value.
- **Start** at the size specified by `flex-basis`.

**Important Note:**
- If `flex-grow` and `flex-shrink` are both set to `0`, the item will **not grow or shrink**, and will remain at its **initial size** based on `flex-basis`.
- By default, `flex-grow` is `0`, `flex-shrink` is `1`, and `flex-basis` is `auto`.


## flex Shorthand

The `flex` property is a **shorthand** for the three flex properties: `flex-grow`, `flex-shrink`, and `flex-basis`. You can use this shorthand to apply all three properties at once, making the CSS cleaner and more concise.

### Basic Values of flex

#### 1. flex: auto

```css
.item {
  flex: 1 1 auto;
}
```

This is equivalent to:
```css
flex-grow: 1;
flex-shrink: 1;
flex-basis: auto;
```
The item will **grow and shrink** as necessary, making it flexible but its size will be based on its natural size (either width or height), but it will still absorb available space if needed.

#### 2. flex: positive-number

```css
.item {
  flex: 1;  /* Equivalent to flex-grow: 1, flex-shrink: 1, flex-basis: 0 */
}
```
that is `flex: 1 1 0`
Makes it receive the free space proportionately.
This will make the item grow **evenly** along with others. The item will have a base size of `0`, and will grow to absorb free space equally with other items that also have `flex: 1`.

#### 3. flex: initial

```css
.item {
  flex: initial;
}
```

This is equivalent to:
```css
flex-grow: 0;
flex-shrink: 1;
flex-basis: auto;
```

The item will not grow, but it will shrink if needed to fit the container. The item will use its natural size as the basis.

#### 4. flex: none

```css
.item {
  flex: none;
}
```

This is equivalent to:
```css
flex-grow: 0;
flex-shrink: 0;
flex-basis: auto;
```

The item is completely **inflexible**. It will maintain its natural size and will not grow or shrink, even if there is available space or overflow.


## Practical Use Cases for Flexbox Flexibility

- **Even Growth**: To have all items grow equally to fill the available space, use `flex: 1` on all items.
- **Fixed Items with Flexible Items**: To make one item flexible (growing/shrinking) while others stay fixed, set `flex: 1` on the flexible item and leave others with `flex: none` or no `flex` value.
- **Prevent Shrinking**: To ensure an item does not shrink below its base size, use `flex-shrink: 0`.
- **Adaptive Layouts**: Combine `flex-grow`, `flex-shrink`, and `flex-basis` to create responsive layouts that adjust based on the container's size.



## Summary

| **Property**        | **Description**                                               | **Example Values**                                       |
|---------------------|---------------------------------------------------------------|---------------------------------------------------------|
| `flex-grow`         | Defines how much a flex item will grow relative to others     | `1` (grow equally), `2` (grow twice as much), `0` (no growth) |
| `flex-shrink`       | Defines how much a flex item will shrink to prevent overflow  | `1` (default), `2` (shrink faster), `0` (no shrinking)   |
| `flex-basis`        | Sets the initial size of the flex item before growing/shrinking | `auto` (natural size), `0` (ignore natural size)        |
| `flex` (shorthand)  | A shorthand for `flex-grow`, `flex-shrink`, and `flex-basis`  | `1`, `0 1 auto`, `none` (no flexibility)                 |


## Resource links

* [General Shorthand Properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Shorthand_properties)
* [Shorthand flex documentation](https://www.w3.org/TR/css-flexbox-1/#flex-common)
* [Flex documentation](https://developer.mozilla.org/en-US/docs/Web/CSS/flex)
* CSS Channel [Demo Video on Flexbox](https://www.youtube.com/watch?v=u044iM9xsWU&t=1s) 

