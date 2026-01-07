# DOM Manipulation


## DOM (Data Sheet 18)

### Question 1

Demonstrate `moveTo()` and `moveBy()` methods of Window Object.

The `moveTo()` and `moveBy()` methods of the `Window` object are used to move a browser window to a specific location or move it relative to its current position.

- **`moveTo(x, y)`**: Moves the window to the specified coordinates `(x, y)` relative to the top-left corner of the screen.
- **`moveBy(dx, dy)`**: Moves the window by a specified number of pixels from its current position, where `dx` is the horizontal movement and `dy` is the vertical movement.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>moveTo() and moveBy() Demonstration</title>
    <style>
        button {
            margin: 10px;
            padding: 10px;
            font-size: 16px;
        }
    </style>
</head>
<body>

    <h1>Demonstrating `moveTo()` and `moveBy()` Methods with New Window</h1>
    
    <button onclick="moveToPosition()">Move New Window to (200, 200)</button>
    <button onclick="moveByPosition()">Move New Window by (100, 100)</button>

    <script>
        let newWindow;

        function openNewWindow() {
            // Open a new window
            newWindow = window.open("", "newWindow", "width=400,height=400");
            newWindow.document.write("<h1>This is a new window!</h1>");
        }

        function moveToPosition() {
            if (newWindow) {
                newWindow.moveTo(200, 200);  
                // Move the new window to coordinates (200, 200)
            } else {
                alert("Please open a new window first!");
            }
        }

        function moveByPosition() {
            if (newWindow) {
                newWindow.moveBy(100, 100);  
                // Move the new window by 100 pixels right and 100 pixels down
            } else {
                alert("Please open a new window first!");
            }
        }

        // Open a new window when the page loads
        openNewWindow();
    </script>

</body>
</html>

```

### Question 2

Demonstrate `ResizeTo()` and `ResizeBy()` methods of Window Object.

The `resizeTo()` and `resizeBy()` methods are used to change the size of the browser window.

- **`resizeTo(width, height)`**: Resizes the window to the specified width and height in pixels.
- **`resizeBy(deltaWidth, deltaHeight)`**: Resizes the window by the specified width and height change (relative to the current window size).

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>resizeTo() and resizeBy() Demonstration</title>
    <style>
        button {
            margin: 10px;
            padding: 10px;
            font-size: 16px;
        }
    </style>
</head>
<body>

    <h1>Demonstrating `resizeTo()` and `resizeBy()` Methods</h1>
    
    <button onclick="openAndResizeWindow()">Open and Resize Window</button>
    <button onclick="resizeToWindow()">Resize Pop-up to 600x400</button>
    <button onclick="resizeByWindow()">Resize Pop-up by 200x100</button>

    <script>
        let popupWindow;

        function openAndResizeWindow() {
            popupWindow = window.open('', '', 'width=400,height=300');  // Open a new pop-up window
            popupWindow.document.write('<h1>This is a pop-up window!</h1>');
        }

        function resizeToWindow() {
            if (popupWindow) {
                popupWindow.resizeTo(600, 400);  // Resize the pop-up window to 600x400
            } else {
                alert('Open a pop-up window first!');
            }
        }

        function resizeByWindow() {
            if (popupWindow) {
                popupWindow.resizeBy(200, 100);  // Resize the pop-up window by 200x100
            } else {
                alert('Open a pop-up window first!');
            }
        }
    </script>

</body>
</html>

```

### Question 3

Write HTML files and JavaScript scripts to set the color of an HTML element using `getElementById()`

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Set Element Color</title>
    <style>
        #textElement {
            font-size: 24px;
            padding: 20px;
            text-align: center;
            border: 2px solid black;
        }
    </style>
</head>
<body>

    <h1>Change the Color of the Text</h1>
    
    <div id="textElement">
        This is a sample text!
    </div>
    
    <button onclick="changeColor('red')">Red</button>
    <button onclick="changeColor('blue')">Blue</button>
    <button onclick="changeColor('purple')">Purple</button>

    <script>
        function changeColor(color) {
            const element = document.getElementById('textElement');
            element.style.color = color;
        }
    </script>

</body>
</html>

```

### Question 4

Write HTML files and JavaScript scripts to accept three Numbers. Display the largest of the three input numbers (use `getElementById( )` to access user input)

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Find the Largest Number</title>
    <style>
        input {
            margin: 10px;
            padding: 5px;
        }
        button {
            padding: 10px;
            font-size: 16px;
        }
        #result {
            margin-top: 20px;
            font-size: 20px;
            font-weight: bold;
        }
    </style>
</head>
<body>

    <h1>Find the Largest of Three Numbers</h1>
    
    <label for="num1">Enter First Number: </label>
    <input type="number" id="num1" required><br><br>
    
    <label for="num2">Enter Second Number: </label>
    <input type="number" id="num2" required><br><br>
    
    <label for="num3">Enter Third Number: </label>
    <input type="number" id="num3" required><br><br>
    
    <button onclick="findLargest()">Find Largest</button>

    <h3 id="result"></h3>

    <script>
        function findLargest() {
            const num1 = parseFloat(document.getElementById('num1').value);
            const num2 = parseFloat(document.getElementById('num2').value);
            const num3 = parseFloat(document.getElementById('num3').value);
            
            // Check if the input values are valid numbers
            if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
                alert("Please enter valid numbers.");
                return;
            }
			
			let largest = num1;
            if (num2 > largest) largest = num2;
            if (num3 > largest) largest = num3;
			 
			document.getElementById('result').innerText = `The largest number is: ${largest}`;
        }
    </script>

</body>
</html>

```

## DOM (Data Sheet 19)

### Question 1

Develop and design JavaScript code to Implement arithmetic operations using `getElementById()`

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Arithmetic Operations</title>
    <style>
        input, button {
            padding: 10px;
            margin: 5px;
            font-size: 16px;
        }
        #result {
            margin-top: 20px;
            font-size: 20px;
            font-weight: bold;
        }
    </style>
</head>
<body>

    <h1>Arithmetic Operations</h1>
    
    <label for="num1">Enter First Number: </label>
    <input type="number" id="num1" required><br><br>
    
    <label for="num2">Enter Second Number: </label>
    <input type="number" id="num2" required><br><br>

    <button onclick="addNumbers()">Add</button>
    <button onclick="subtractNumbers()">Subtract</button>
    <button onclick="multiplyNumbers()">Multiply</button>
    <button onclick="divideNumbers()">Divide</button>

    <h3 id="result"></h3>

    <script>
        function addNumbers() {
            const num1 = parseFloat(document.getElementById('num1').value);
            const num2 = parseFloat(document.getElementById('num2').value);
            
            if (isNaN(num1) || isNaN(num2)) {
                alert("Please enter valid numbers.");
                return;
            }
            
            const sum = num1 + num2;
            document.getElementById('result').innerText = `Sum: ${sum}`;
        }

        function subtractNumbers() {
            const num1 = parseFloat(document.getElementById('num1').value);
            const num2 = parseFloat(document.getElementById('num2').value);

			if (isNaN(num1) || isNaN(num2)) {
                alert("Please enter valid numbers.");
                return;
            }
            const difference = num1 - num2;
            document.getElementById('result').innerText = `Difference: ${difference}`;
        }

        function multiplyNumbers() {
            const num1 = parseFloat(document.getElementById('num1').value);
            const num2 = parseFloat(document.getElementById('num2').value);
            if (isNaN(num1) || isNaN(num2)) {
                alert("Please enter valid numbers.");
                return;
            }
            const product = num1 * num2;
            document.getElementById('result').innerText = `Product: ${product}`;
        }

        function divideNumbers() {
            const num1 = parseFloat(document.getElementById('num1').value);
            const num2 = parseFloat(document.getElementById('num2').value);
            if (isNaN(num1) || isNaN(num2)) {
                alert("Please enter valid numbers.");
                return;
            }
            if (num2 === 0) {
                alert("Cannot divide by zero.");
                return;
            }
            const quotient = num1 / num2;
            document.getElementById('result').innerText = `Quotient: ${quotient}`;
        }
    </script>

</body>
</html>

```

### Question 2

Develop and design JavaScript to convert temperatures from Fahrenheit to Celsius and vice versa using getElementById(). (subtract 32 and multiply by .5556 (or 5/9). To convert temperatures in degrees Celsius to Fahrenheit, multiply by 1.8 (or 9/5) and add 32.)

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Temperature Converter</title>
    <style>
        input, button {
            padding: 10px;
            margin: 10px;
            font-size: 16px;
        }
        #result {
            margin-top: 20px;
            font-size: 20px;
            font-weight: bold;
        }
    </style>
</head>
<body>

    <h1>Temperature Converter</h1>

    <label for="tempInput">Enter Temperature: </label>
    <input type="number" id="tempInput" required><br><br>

    <label for="conversionType">Convert To: </label>
    <select id="conversionType">
        <option value="Celsius">Fahrenheit to Celsius</option>
        <option value="Fahrenheit">Celsius to Fahrenheit</option>
    </select><br><br>

    <button onclick="convertTemperature()">Convert</button>

    <h3 id="result"></h3>

    <script>
        function convertTemperature() {
            const tempInput = parseFloat(document.getElementById('tempInput').value);
            const conversionType = document.getElementById('conversionType').value;

            if (isNaN(tempInput)) {
                alert("Please enter a valid number.");
                return;
            }
            
            let result;
            if (conversionType === "Celsius") {
                // Convert Fahrenheit to Celsius: (F - 32) * 5/9
                result = (tempInput - 32) * 0.5556;
                document.getElementById('result').innerText = `${tempInput}°F is equal to ${result.toFixed(2)}°C`;
            } else {
                // Convert Celsius to Fahrenheit: (C * 9/5) + 32
                result = (tempInput * 1.8) + 32;
                document.getElementById('result').innerText = `${tempInput}°C is equal to ${result.toFixed(2)}°F`;
            }
        }
    </script>

</body>
</html>
```

### Question 3

Develop and design JavaScript to count total number of `h2` and `h3` tags used in the document using `getElementByTagName()`

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Count h2 and h3 Tags</title>
    <style>
        button {
            padding: 10px;
            font-size: 16px;
            margin: 10px;
        }
    </style>
</head>
<body>

    <h1>Tag Count Example</h1>

    <h2>This is an H2 tag</h2>
    <h3>This is an H3 tag</h3>
    <p>This is a paragraph, not counted.</p>
    <h2>Another H2 tag</h2>
    <h3>Another H3 tag</h3>
    <h3>Another H3 tag</h3>

    <button onclick="countTags()">Count H2 and H3 Tags</button>

    <h3 id="result"></h3>

    <script>
        function countTags() {
            const h2Tags = document.getElementsByTagName('h2');
            const h3Tags = document.getElementsByTagName('h3');
            
            const totalH2 = h2Tags.length;
            const totalH3 = h3Tags.length;
            
            document.getElementById('result').innerText = 
                `Total number of <h2> tags: ${totalH2}\nTotal number of <h3> tags: ${totalH3}`;
        }
    </script>

</body>
</html>
```

### Question 4

Find the product of the two input numbers (use `getElementById( )` to access user input) 

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Product of Two Numbers</title>
    <style>
        input, button {
            padding: 10px;
            margin: 5px;
            font-size: 16px;
        }
        #result {
            margin-top: 20px;
            font-size: 20px;
            font-weight: bold;
        }
    </style>
</head>
<body>

    <h1>Calculate Product of Two Numbers</h1>
    
    <label for="num1">Enter First Number: </label>
    <input type="number" id="num1" required><br><br>
    
    <label for="num2">Enter Second Number: </label>
    <input type="number" id="num2" required><br><br>
    
    <button onclick="findProduct()">Calculate Product</button>

    <h3 id="result"></h3>

    <script>
        function findProduct() {
            const num1 = parseFloat(document.getElementById('num1').value);
            const num2 = parseFloat(document.getElementById('num2').value);
            
            // Validate if the entered values are numbers
            if (isNaN(num1) || isNaN(num2)) {
                alert("Please enter valid numbers.");
                return;
            }
            
            const product = num1 * num2;
            
            document.getElementById('result').innerText = `The product is: ${product}`;
        }
    </script>

</body>
</html>
```


