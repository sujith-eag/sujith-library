# Basic Syntax

CSS consists of rules, which are made up of:  
- **Selector**: Points to a part of the HTML  
- **Declaration**: A **property: value** pair (semicolon-separated list)

### Ruleset  
A **ruleset** (or **rule**) consists of One or more **selectors** and an associated **declarations block**

- HTML comments: `<!-- -->`  
- CSS comments: `/* */`

## Selectors  
Selectors refer to the HTML elements to which a particular CSS rules / ***declarations***  applies to;
***selectors*** , are conditions selecting some elements of the page.

Selectors are used to target HTML elements for applying CSS styles.
A **declaration block** is applied to the selected elements.  
Selectors can be simple (e.g., targeting a specific element) or more complex (e.g., selecting by class or ID). 

Each valid declaration block is preceded by one or more **comma-separated selectors**.


A `<div>` is one of the basic HTML elements. It is an empty container.
In general, it is best to use other tags such as `<h1>` or `<p>` for content but there are many cases where the thing needed is just a container for other elements.


## Selector Types  

### 1. Universal Selector (*)  

The universal selector will select all elements of any type in a document, hence the name **universal selector**, and the syntax for it is an asterisk `*`. 

```css
* {
  color: purple;
}
```
This would apply `color: purple;` to all elements on the page.

---

### 2. Type Selector  
A **type selector** (or **element selector**) targets all elements of a specific type (e.g., `<div>`, `<p>`, etc.).  

```html
<!-- index.html -->
<div>Hello, World!</div>
<div>Hello again!</div>
<p>Hi...</p>
<div>Okay, bye.</div>
```
```css
/* styles.css */
div {
  color: white;
}
```
This will apply the `color: white;` style to all `<div>` elements, but **not** to `<p>` elements.

---

### 3. Class Selector  
Class selectors target all elements with a specific class. The syntax uses a period (`.`) followed by the class name.   
Classes are reusable across multiple elements.

```html
<div class="alert-text">Please agree to our terms.</div>
```
```css
.alert-text {
	  		  color: red;
			}
```
**Syntax:** `.classname`  
a period `.` immediately followed by the case-sensitive value of the class attribute.   
You can also add multiple classes to an element using a space-separated list:  

```html
<div class="alert-text severe-alert">Warning!</div>
```

---

### 4. ID Selector  
ID selectors target an element with a specific **ID**. The syntax uses a hashtag (`#`) followed by the ID value. IDs must be unique within a page.
 
```html
<div id="title">My Awesome 90's Page</div>
```
```css
#title {
  background-color: red;
}
```
**Syntax:** `#idname`   
A hashtag `#` immediately followed by the case-sensitive value of the ID attribute. 

- **Important**: An element can have only **one ID**, and an ID must be unique within a page. IDs should **not** contain any white space.


## Key Differences Between Classes and IDs  

**Classes**:  
  - Can be used on multiple elements.  
  - Can apply to any number of elements across a page.

**IDs**:  
  - Must be unique to a single element.  
  - Cannot be used on more than one element on a page.

A common mistake is overusing the **ID** attribute when a **class** would suffice.
