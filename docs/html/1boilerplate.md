# HTML Structure

**HTML (HyperText Markup Language)** defines the structure and content of webpages. We use HTML elements to create all the paragraphs, headings, lists, images, and links that make up a typical webpage.

## Elements and Tags

All elements of HTML are wrapped in opening and closing HTML tags.

- `<p>`: Opening tag (angle brackets with keyword) marks the beginning.  
- `</p>`: Closing tag shows the element's end, has a forward slash before the keyword.

```html
<p>paragraph text</p>
```

### Catalog of Tags
[[Catalog_of_Tags]]

Elements are containers for content, with the tags indicating what content the element contains. Using the correct element for content is referred to as **semantic HTML**.

### Void Elements

Void elements do not have any content, so they have a single tag:
- `<meta>`
- `<link>`
- `<br>`
- `<img>`

Previously, these were called self-closing tags (e.g., `<br />`, `<img />`), but it is no longer necessary to close them this way in HTML5.

### HTML File

An HTML file containing the homepage of the website should be named `index.html` because servers will look for that by default.

## HTML Boilerplate

All HTML documents need the same basic structure or boilerplate that should be in place before anything useful can be done.

### 1. Doctype

Every HTML page starts with a Doctype declaration which tells the browser what version of HTML to use for rendering the document. The latest version is HTML5, and its Doctype is:

```html
<!DOCTYPE html>
```

This should be the first line of the file.


### 2. HTML Element

```html
<html lang="en"> <!-- lang attribute specifies the language of the document -->
</html>
```

The `<html>` element is the root element of the document, meaning every other element will be its descendant.
`<html lang="en">`  lang is html attribute giving additional info like language.  

### 3. Head Element

The `<head>` element contains important meta-information to help render the document correctly in the browser. There should be no elements that display content within `<head>`.

#### 3.1 Meta Elements

```html
<head>
    <meta charset="UTF-8"> <!-- Character encoding for the document -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0"> <!-- Controls layout on mobile browsers -->
</head>
```

- `<meta charset="UTF-8">`: Ensures that different symbols are displayed correctly.
- `<meta name="viewport">`: Specifies the tag is related to viewport settings.
  - `content="width=device-width, initial-scale=1.0"`: Sets the width of the viewport to match the device's width and the initial zoom level to 1.0.
  This sets the width of the viewport to match the device's width.
and sets the initial zoom level when the page is first loaded. A scale of 1.0 means that the page will be displayed at its natural size without any zooming in or out.

There are other `<meta>` tags available for defining how the webpage behaves when shared on the web, among other functions.

#### 3.2 Title Element

The `<title>` element gives the webpage a human-readable title that is displayed in the browser's tab.   
Without a `<title>`, the browser defaults to the file name, e.g., `index.html`.

```html
<head>
    <title>My Webpage</title>
</head>
```

#### 3.3 Link Element

The `<link>` element is used to link external stylesheets.

```html
<link rel="stylesheet" href="style.css"> <!-- Linking an external CSS file -->
```

- `rel`: Specifies the relationship between the current document and the linked resource.
- `href`: Specifies the location of the linked resource.

### 4. Body Element

The `<body>` element contains all the content that will be displayed to users, including text, images, lists, links, etc.

```html
<body>
    <h1>Line to be displayed</h1>
</body>
```

## Complete HTML Boilerplate Example

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>My Webpage</title>
        <link rel="stylesheet" href="style.css"> <!-- Linking CSS -->
    </head>
    <body>
        <h1>Line to be displayed</h1>
    </body>
</html>
```

## VSCode Boilerplate Shortcut

In a `.html` file, enter `!` in an empty `index.html` file and select the first option to generate the full boilerplate code.

### Opening the File

- Drag and drop into the browser's address bar or double-click the file.
- In the directory containing the file, you can open it with `google-chrome index.html`.
- Use the Live Server extension of VSCode for live preview.

