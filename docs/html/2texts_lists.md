# Texts & Lists

## Text Tags

### Paragraphs `<p> </p>`

All text can be placed inside the `<body>`, but spaces will not be considered without using paragraph tags. The `<p>` tag can be used to create distinct paragraphs.

### Headings `<h1> </h1>`

Headings are larger and bolder texts, with six levels of headings available from `<h1>` (most important) to `<h6>` (least important).

### Strong `<strong> </strong>`

The `<strong>` tag indicates the importance, seriousness, or urgency of a word or section of content, without altering its original meaning.

### Emphasis `<em> </em>`

The `<em>` tag places stress on a piece of content in a way that changes its meaning, often indicating verbal stress.

### Italic `<i> </i>`

The `<i>` tag is used to convey a different mood or voice from the surrounding content. It’s often applied to foreign words, idiomatic phrases, technical terms, ship names, or thoughts.

### Bold `<b> </b>`

The `<b>` tag draws attention to a word or section of content for utilitarian purposes, without conveying additional importance or emphasis. It is the least semantic of the tags discussed.

### Small `<small> </small>`

The `<small>` tag defines smaller text, typically for side comments or fine print.

### Highlight/Mark `<mark> </mark>`

The `<mark>` tag highlights text for reference or importance.

### Strike Out/Delete `<del> </del>`

The `<del>` tag represents content that has been deleted, often rendered with a strikethrough.

### Insert `<ins> </ins>`

The `<ins>` tag shows newly inserted content, typically underlined.
After deletion other word can be shown as inserted, which is represented by underline.

### Subscript `<sub> </sub>`

The `<sub>` tag denotes text that appears half the size and at a lower position, similar to mathematical or chemical formulas.

### Superscript `<sup> </sup>`

The `<sup>` tag displays text that appears half a character above the normal line and in a smaller font, useful for footnotes or exponentiation.


## Nesting and Indentation

Nesting is used to show parent, child, and sibling tag relationships. Indentation makes these relationships easier to see.

### HTML Comments `<!-- text -->`

To comment out lines in VSCode, use the shortcut `Ctrl + /` to convert any line into a comment or revert it.


## Lists

### Unordered Lists `<ul> <li> </li> </ul>`

Used when the order of items doesn’t matter. Each item in the list is represented by `<li>`, which will typically be displayed as a bullet point (circle, square, or dot). The style is defined by CSS with the `list-style-type` property.

### Ordered Lists `<ol> <li> </li> </ol>`

For creating lists where the order and numbering are important. By default, `<ol>` assigns numbers to each list item.

Both unordered and ordered lists can be nested inside one another as needed. If a second list needs to be nested inside a list item, it should be placed within its `<li> </li>`.

```html
<ul>
  <li>First item</li>
  <li>
    Second item
    <ul>
      <li>Second item first subitem</li>
      <li>
        Second item second subitem
        <ul>
          <li>Second item second subitem first sub-subitem</li>
          <li>Second item second subitem second sub-subitem</li>
          <li>Second item second subitem third sub-subitem</li>
        </ul>
      </li>
      <li>Second item third subitem</li>
    </ul>
  </li>
  <li>Third item</li>
</ul>


- first item
- second item
    - second item first subitem
    - second item second subitem
        - second item second subitem first sub-subitem
        - second item second subitem second sub-subitem
        - second item second subitem third sub-subitem
    - second item third subitem
- third item
```

### Global Attributes for Ordered Lists

- `reversed`: Numbering from high to low.
- `start="4"`: Starts numbering from 4.
- `type`: Defines the numbering style (e.g., `a` for lowercase letters, `A` for uppercase letters, `i` for lowercase Roman numerals, `I` for uppercase Roman numerals).

Example of starting an ordered list from 4:

```html
<ol start="4">
  <li>Fourth item</li>
</ol>

<ol reversed>
  <li>First item</li>
</ol>
```

#### Value Attribute

Used on individual `<li>` elements within an ordered list to change the value of that list item:

```html
<ol>
  <li>Head north on N Halsted St</li>
  <li value="9">Turn right on W Diversey Pkwy</li>
  <li>Turn left on N Orchard St</li>
</ol>
```

### Description Lists

Description lists outline multiple terms and their descriptions, useful for glossaries. They are created using the `<dl>` element, along with `<dt>` for the term and `<dd>` for the description.

Instead of using a `<li>` element to mark up list items, the description list requires two block-level elements: 
the description term element, `<dt>`, 
and the description element, `<dd>`.

`<dd>` element includes a left `margin` by default.
The definition term and the description that directly follows it correspond to one another; thus, the order of these elements is important.

```html
<dl>
  <dt>study</dt>
  <dd>The devotion of time and attention to acquiring knowledge on an academic subject, especially by means of books</dd>
  <dt>design</dt>
  <dd>A plan or drawing produced to show the look and function or workings of a building, garment, or other object before it is built or made</dd>
  <dd>Purpose, planning, or intention that exists or is thought to exist behind an action, fact, or material object</dd>
  <dt>business</dt>
  <dt>work</dt>
  <dd>A person's regular occupation, profession, or trade</dd>
</dl>


study

The devotion of time and attention to acquiring knowledge on an academic subject, especially by means of books

design

A plan or drawing produced to show the look and function or workings of a building, garment, or other object before it is built or made

Purpose, planning, or intention that exists or is thought to exist behind an action, fact, or material object

business

work

A person's regular occupation, profession, or trade
```

### List-Style-Type Property

List items can be styled through CSS using the `list-style-type` property. The style can be applied to either `<ul>`, `<ol>`, or `<li>` elements.
[[List_Styles]]
```css
/* Partial list of styles */
list-style-type: disc;
list-style-type: circle;
list-style-type: square;
list-style-type: decimal;
list-style-type: georgian;
list-style-type: trad-chinese-informal;
list-style-type: kannada;

/* Custom styling */
list-style-type: "-"; /* Custom string value */

/* Identifier matching an @counter-style rule */
list-style-type: custom-counter-style;
list-style-type: none; /* No list styling */

/* Global values */
list-style-type: inherit;
list-style-type: initial;
list-style-type: revert;
list-style-type: unset;
```

