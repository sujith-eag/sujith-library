# Button

## `<button></button>`

The `<button>` element represents a clickable button that can be used to submit forms or trigger actions on the webpage. It can contain text, images, or other HTML elements.

```html
<button type="submit">Submit</button>
<button type="button" onclick="alert('Hello!')">Click Me!</button>
```

## Drop Down Selector:

`<select> <option> </option> </select>`

The `<select>` element creates a drop-down list that allows users to choose one or more options. Each option within the list is defined using the `<option>` element.

```html
<label for="weather">Select the weather type today:</label>
<select id="weather">
    <option value="">--Make a Choice--</option>
    <option value="sunny">Sunny</option>
    <option value="rainy">Rainy</option>
    <option value="snowing">Snowing</option>
    <option value="overcast">Overcast</option>
</select>
```

- The first `<option>` with `value=""` is a placeholder that prompts users to make a selection.
- The `for` attribute in the `<label>` element links it to the `<select>` element, enhancing accessibility.

