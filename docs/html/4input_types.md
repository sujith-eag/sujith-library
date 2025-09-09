# Input & Types

The **`<input>`** HTML element is used to create interactive controls for web-based forms to accept data from users. It provides a wide variety of input types and control widgets depending on the device and user agent. The `<input>` element is one of the most powerful and complex in HTML due to the numerous combinations of input types and attributes available.

## `<input>` Element Example

```html
<label for="name">Name (4 to 8 characters):</label>
<input type="text" id="name" name="name" required minlength="4" maxlength="8" size="10" />
```

### Accessibility and Labels

Using a label enhances accessibility for users with assistive technologies. It also increases the click area for mouse and touch screen users. Clicking on either the label or the input field will focus the input.

**Examples of Label Usage:**

1. **Inaccessible Input:**
```html
<p>Enter your name: <input id="name" type="text" size="30" /></p>
```

2. **Implicit Label:**
```html
<p>
	<label>Enter your name: <input id="name" type="text" size="30" /></label>
</p>
```

3. **Explicit Label:**
```html
<p>
	<label for="name">Enter your name: </label>
    <input id="name" type="text" size="30" />
</p>
```
   
### Labels

When including inputs, it is an accessibility requirement to add labels alongside. This is needed so those who use assistive technologies can tell what the input is for. Also, clicking or touching a label gives focus to the label's associated form control. This improves the accessibility and usability for sighted users, increases the area a user can click or touch to activate the form control. This is especially useful (and even needed) for radio buttons and checkboxes, which are tiny.

More information about labels in general [MDN Documentation on Labels](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#labels).


`<input>` needs an `id` attribute. 
 The `<label>` then needs a `for` attribute whose value is the same as the input's `id`.
```html
<label for="peas">Do you like peas?</label>
<input type="checkbox" name="peas" id="peas" />
```

## Types of `<input>`

The behavior of an `<input>` element varies based on its `type` attribute. If not specified, the default type is `text`.

### Button as `<input>`

`<input>` elements of type **`button`** render as simple push buttons. However, the newer [`<button>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button) element is recommended for creating buttons with more flexibility, including HTML content.

```html
<input type="button" value="Add to favorites">
<!-- Same as -->
<button>Add to favorites</button>
```

### Input Types

1. [**Checkbox**](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox)
```html
<fieldset>
  <legend>Choose your monster's features:</legend>
  <div>
    <input type="checkbox" id="scales" name="scales" checked />
    <label for="scales">Scales</label>
  </div>
  <div>
    <input type="checkbox" id="horns" name="horns" />
    <label for="horns">Horns</label>
  </div>
</fieldset>
```
Value attribute represents the value given to the data submitted with checkbox's name.

2. [**Radio**](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/radio)
Similar to checkbox, only one button in a given group can be selected at the same time.
Generally used in radio groups (a collection of radio buttons describing set of related options)

```html
<fieldset>
  <legend>Select a maintenance drone:</legend>
  <div>
    <input type="radio" id="huey" name="drone" value="huey" checked />
    <label for="huey">Huey</label>
  </div>
  <div>
    <input type="radio" id="dewey" name="drone" value="dewey" />
    <label for="dewey">Dewey</label>
  </div>
</fieldset>
```
   
   
The value attribute is a string containing the radio button's value.
The value is never shown to user, but used to identify which radio button in a group is selected.

A radio group is defined by giving each of radio buttons in the group the same name.

3. [**Date**](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/date)

Opens a date picker or numeric wheels for year, month, day when active in supporting browsers.
The value is normalized to the format `yyyy-mm-dd`.

```html
<label for="start">Start date:</label>
<input type="date" id="start" name="trip-start" value="2018-07-22" min="2018-01-01" max="2018-12-31" />
```
Value is used to set a default date.
The displayed date format will differ from the actual `value` — the displayed date is formatted _based on the locale of the user's browser_, but the parsed `value` is always formatted `yyyy-mm-dd`.

4. [**Datetime-Local**](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/datetime-local)
   - A control for entering a date and time, with no time zone. Opens a date picker or numeric wheels for date- and time-components when active in supporting browsers.

5. [**Email**](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/email)
   - A field for entering an email address with validation.

6. [**File**](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file)
   - A control for selecting a file, using the `accept` attribute to specify file types.

7. **Image**
   - A graphical submit button that displays an image defined by the `src` attribute.

8. **Number**
   - A control for entering a number, often displaying a spinner.

9. **Password**
   - A single-line text field where the input is obscured for security.

10. **Range**
    - A control for selecting a numeric value using a slider.

11. **Submit**
    - A button that submits the form.

## Attributes for `<input>`

Each input type can accept different attributes, enhancing functionality and user experience. Here are some commonly used attributes:

- `type`: Specifies the type of input (e.g., text, checkbox, radio).
- `id`: Associates a label with the input.
- `name`: Identifies the input for form submission.
- `value`: Defines the initial value of the input.
- `required`: Makes the input mandatory.
- `min`, `max`: Specifies the range of acceptable values for number and date inputs.
- `placeholder`: Provides a hint to the user about what to enter.

