# Links and Images


## Anchor Elements

An anchor element is defined by wrapping the text or another HTML element we want to link with an `<a>` tag.

```html
<a>About</a>
<!-- Needs href to point to where to go -->
<a href="https://www.theodinproject.com/about">About</a>
```

### Opening Links in a New Tab
The `target="_blank"` attribute opens a link in a new tab. By default, links open in the same tab, which is represented by `target="_self"`.

```html
<a href="https://www.theodinproject.com/about" target="_blank">About</a>
```

### Security: `rel="noreferrer"`
Setting `rel="noreferrer"` helps enhance security by preventing the linked webpage from knowing the origin of the link. It also stops the opened webpage from accessing the previous webpage's window.

```html
<a href="https://www.theodinproject.com/about" target="_blank" rel="noreferrer">About</a>
```

### Absolute and Relative Links
- **Absolute Links**: These are links to pages on other websites and always include the protocol and domain. 
`https://www.theodinproject.com/about`

- **Relative Links**: These link to other pages within the same website and do not include the domain name. They only include the path relative to the current page. Use `./` to denote the current folder, and `../` to move up one directory.

```html
<body>
  <h1>Homepage</h1>
  <a href="https://www.theodinproject.com/about">About The Odin Project</a>
  <a href="./pages/about.html">About</a>
</body>
```

## Images
The `<img>` tag is a void element, meaning it does not require a closing tag.

```html
<img src="https://www.google.com/somepic.png">
```

### File Path for Images
- Use `../` to navigate up a directory when specifying a relative path.
- Absolute paths can also be used.

### `src` Attribute
The `src` attribute is used to specify the location of the image file.

```html
<img src="image.png">
```

### `alt` Attribute
The `alt` attribute provides alternate text for the image, which is displayed if the image cannot be loaded.

```html
<img src="image.png" alt="Logo of the site">
```

### Image Size
While not required, specifying the `height` and `width` attributes can help images load correctly.

```html
<img src="https://www.theodinproject.com/mstile-310x310.png" alt="The Odin Project Logo" height="310" width="310">
```

### Supported Formats
Common image formats include:
- `.jpg`
- `.png`
- `.gif`
- `.svg`

## File Structure
A typical project file structure should look like this:

```
root/
│
├── index.html       <!-- Mandatory in the root folder -->
├── images/          <!-- Folder for images -->
├── css/             <!-- Folder for CSS files -->
└── js/              <!-- Folder for JavaScript files -->
```

### Naming Conventions
- Avoid spaces, numbers, and capital letters in file names.
- Keep names short and simple.
- Additional web pages can be placed in the root folder or in separate directories as needed.

