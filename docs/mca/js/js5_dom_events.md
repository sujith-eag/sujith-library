# DOM Events


## Events and Form Validation (Data Sheet 20)


### Question 1

Mouse Events
•Display an image that changes when the user hovers (`mouseover`) and reverts when they move away (`mouseout`).
•Rotate the image 45 degrees when clicked (`mousedown`) and reset when released (`mouseup`).

```html
<head>
    <style>
        #image {
            transition: transform 0.3s ease, filter 0.3s ease;
        }
    </style>
</head>
<body>
    <img id="image" src="image1.jpg" alt="Image" width="300" height="200">

    <script src="script.js"></script>
</body>
</html>
```

```js
const image = document.getElementById('image');

image.addEventListener('mouseover', () => {
    image.src = 'image2.jpg'; 
    // Change to the second image on hover
});

image.addEventListener('mouseout', () => {
    image.src = 'image1.jpg'; 
    // Revert to the first image when the mouse leaves
});


image.addEventListener('mousedown', () => {
    image.style.transform = 'rotate(45deg)'; 
    // Rotate the image by 45 degrees on click
});

image.addEventListener('mouseup', () => {
    image.style.transform = 'rotate(0deg)'; 
    // Reset the rotation when the click is released
});
```

### Question 2

Add a text field where the user must type "JAVASCRIPT".
•Show right tick if correct (oninput).
•Show wrong if incorrect when the user clicks outside (onchange)

```html
<head>
    <style>
        #validation-result {
            font-size: 20px;
            font-weight: bold;
            margin-top: 10px;
        }
        .correct {
            color: green;
        }
        .incorrect {
            color: red;
        }
    </style>
</head>
<body>
    <h1>Type "JAVASCRIPT" in the text box</h1>
    <input type="text" id="input-field" placeholder="Type here..." />
    <div id="validation-result"></div>

    <script src="script.js"></script>
</body>
</html>
```

```js
const inputField = document.getElementById('input-field');
const validationResult = document.getElementById('validation-result');

const correctAnswer = "JAVASCRIPT";

// Check input on typing (oninput event)
inputField.addEventListener('input', () => {
    if (inputField.value.toUpperCase() === correctAnswer) {
        validationResult.textContent = '✔ Correct';
        validationResult.className = 'correct';
    } else {
        validationResult.textContent = '';
    }
});

// Check input when the user clicks outside the input field (onchange event)
inputField.addEventListener('change', () => {
    if (inputField.value.toUpperCase() !== correctAnswer) {
        validationResult.textContent = '❌ Incorrect';
        validationResult.className = 'incorrect';
    }
});
```


### Question 3

Form Validation - Email, Password, and Number Create a form with:
•Email Field: Must be a valid email format (`onchange`). Show  right or wrong
•Password Field: Must be at least 8 characters with one number (`oninput`). Show "Weak" or "Strong".
•Number Field: Must be exactly 10 digits (`oninput`). Show right or wrong
•Submit Button: Disabled until all fields are correctly filled.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Form Validation</title>
</head>
<body>
    <h1>Form Validation</h1>
    <form id="myForm">
        <!-- Email Field -->
        <label for="email">Email:</label>
        <input type="email" id="email" required>
        <div id="email-validation-result"></div>
        
        <!-- Password Field -->
        <label for="password">Password:</label>
        <input type="password" id="password" required>
        <div id="password-validation-result"></div>
        
        <!-- Phone Number Field -->
        <label for="phone">Phone Number:</label>
        <input type="text" id="phone" required>
        <div id="phone-validation-result"></div>
        
        <!-- Submit Button -->
        <button type="submit" id="submitButton" disabled>Submit</button>
    </form>

    <script src="script.js"></script>
</body>
</html>
```

```js
// Select form elements
const emailField = document.getElementById('email');
const passwordField = document.getElementById('password');
const phoneField = document.getElementById('phone');
const submitButton = document.getElementById('submitButton');

// Add event listeners for validation
emailField.addEventListener('change', validateEmail);
passwordField.addEventListener('input', validatePassword);
phoneField.addEventListener('input', validatePhone);

// Validate Email
function validateEmail() {
    const emailValue = emailField.value;
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    
    if (emailPattern.test(emailValue)) {
        document.getElementById('email-validation-result').textContent = "✔ Valid Email";
    } else {
        document.getElementById('email-validation-result').textContent = "❌ Invalid Email";
    }
    checkFormValidity();
}

// Validate Password
function validatePassword() {
    const passwordValue = passwordField.value;
    const hasNumber = /\d/;
    
    if (passwordValue.length >= 8 && hasNumber.test(passwordValue)) {
        document.getElementById('password-validation-result').textContent = "✔ Strong Password";
    } else {
        document.getElementById('password-validation-result').textContent = "❌ Weak Password";
    }
    checkFormValidity();
}

// Validate Phone Number
function validatePhone() {
    const phoneValue = phoneField.value;
    
    if (phoneValue.length === 10 && !isNaN(phoneValue)) {
        document.getElementById('phone-validation-result').textContent = "✔ Valid Phone Number";
    } else {
        document.getElementById('phone-validation-result').textContent = "❌ Invalid Phone Number";
    }
    checkFormValidity();
}

// Check if form is valid and enable/disable submit button
function checkFormValidity() {
    const isEmailValid = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(emailField.value);
    const isPasswordValid = passwordField.value.length >= 8 && /\d/.test(passwordField.value);
    const isPhoneValid = phoneField.value.length === 10 && !isNaN(phoneField.value);
    
    // Enable the submit button if all fields are valid
    if (isEmailValid && isPasswordValid && isPhoneValid) {
        submitButton.disabled = false;
    } else {
        submitButton.disabled = true;
    }
}
```

### Question 4

Using `alert()`,` confirm()`, and `prompt()` to create a JavaScript program that:
* Displays an alert box saying "Welcome to our website!" when the page loads.
* Uses a prompt box to ask the user for their name.
	If the user enters a name, display in output box saying `"Hello, [Name]!"`.
	If the user leaves it blank, display in output box saying "You didn't enter a name!".
* Uses a confirmation box to ask the user "Do you want to proceed?".
	If they click "OK", log "User chose to proceed" in the console.
	If they click "Cancel", log "User cancelled" in the console.

```html
<head>
    <style>
        #output {
            font-size: 20px;
            margin-top: 20px;
        }
    </style>
</head>
<body>
    <div id="output"></div>
    
    <script>
        window.onload = function() {
            alert("Welcome to our website!");
            
			const outputDiv = document.getElementById('output');
			
            const userName = prompt("Please enter your name:");
            if (userName) {
                outputDiv.textContent = `Hello, ${userName}!`;
            } else {
                outputDiv.textContent = "You didn't enter a name!";
            }
            
			const userChoice = confirm("Do you want to proceed?");
			
            if (userChoice) {
                console.log("User chose to proceed");
            } else {
                console.log("User cancelled");
            }
        }
    </script>
</body>
</html>

```

