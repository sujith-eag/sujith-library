# DOM I/O & Functions


## JavaScript I/O (Data Sheet 16)


### Question 1

Demonstrate the use of Embedded JavaScript to display the following text on your web page.
I am part of the HTML document!
This came from my script, and is now on the page!
I am also part of the HTML document, after the script results!

```html
<body>

    <p>I am part of the HTML document!</p>

    <script>
        document.write("This came from my script, and is now on the page!<br>");
    </script>

    <p>I am also part of the HTML document, after the script results!</p> 
    
</body>
</html>
```

### Question 2

Demonstrate the use of prompt method by accepting user’s name as input.

```html
<body>

	<h1>Welcome to the Prompt Demo<h1>
	
    <script>
        let userName = prompt("Please enter your name:");
        
        if (userName != null && userName !== "") {
            document.write("Hello, " + userName + "! Welcome to our webpage.");
        } else {
            document.write("Hello! Welcome to our webpage.");
        }
    </script>

</body>
</html>

```

### Question 3

Design a simple Web Page to add two input numbers and display their sum using prompt and alert.

```html
<body>
    <h1>Add Two Numbers</h1>
    <p>Enter two numbers to calculate their sum!</p>

    <script>
        let num1 = prompt("Enter the first number:");
		let num2 = prompt("Enter the second number:");
		
		num1 = parseFloat(num1);
        num2 = parseFloat(num2);
        
        let sum = num1 + num2;
        
        alert(`Sum of ${num1} and ${num2} is ${sum}`)
    </script>

</body>
</html>
```

### Question 4

Develop and demonstrate a HTML file that includes JavaScript script for the following
a) A number n obtained using prompt: The first n Fibonacci numbers using
document.write()
b) A number n obtained using prompt: A table from 1 to n and their squares using alert
```html
<body>
    <h1>JavaScript Demonstrations</h1>

    <script>
        let nFibonacci = prompt("Enter a number to get the first n Fibonacci numbers:");
        nFibonacci = parseInt(nFibonacci);
        
        let fib1 = 0, fib2 = 1, nextFib;
        
        if (nFibonacci > 0) {
            document.write(`<h2>First ${nFibonacci} Fibonacci Numbers:</h2>`);
            document.write(`${fib1} , ${fib2}`);
            
            for (let i = 3; i <= nFibonacci; i++) {
                nextFib = fib1 + fib2;
                document.write(", " + nextFib);
                fib1 = fib2;
                fib2 = nextFib;
            }
        } else {
            document.write("<h2>Please enter a number greater than 0 for the Fibonacci sequence.</h2>");
        }
	</script>

	<script>
        let nSquares = prompt("Enter a number to get the table of squares from 1 to n:");
        nSquares = parseInt(nSquares);

        let tableMessage = "Table of numbers from 1 to " + nSquares + " and their squares:\n";
        for (let i = 1; i <= nSquares; i++) {
            tableMessage += `${i} squared is ${i * i} \n`;
        }
        
        alert(tableMessage);
    </script>

</body>
</html>
```


## JavaScript Functions (Data Sheet 17)

### Question 1

Find the area of a triangle where lengths of the three of its sides are 5, 6, 7.

```html
<body>
    <h1>Triangle Area Calculation</h1>
    
    <script>
        function calculateArea(a, b, c) {
            let s = (a + b + c) / 2;    
            // Area using Heron's formula
            let area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
            return area;
        }
        
        let side1 = 5;
        let side2 = 6;
        let side3 = 7;
        
		let area = calculateArea(side1, side2, side3);
		
        alert("The area of the triangle is: " + area.toFixed(2) + " square units.");
    </script>

</body>
</html>
```

### Question 2

Develop and design JavaScript code to Implement arithmetic operations using functions.

```html
<body>
    <h1>Arithmetic Operations</h1>
    
    <label for="num1">Enter first number: </label>
    <input type="number" id="num1" required><br><br>
    
    <label for="num2">Enter second number: </label>
    <input type="number" id="num2" required><br><br>
    
    <label for="operation">Choose an operation: </label>
    <select id="operation">
        <option value="add">Addition</option>
        <option value="subtract">Subtraction</option>
        <option value="multiply">Multiplication</option>
        <option value="divide">Division</option>
    </select><br><br>
    
    <button onclick="performOperation()">Calculate</button>
    
    <h3 id="result">Result: </h3>
    
    <script>
        function add(a, b) {return a + b;}
        function subtract(a, b) {return a - b;}
        function multiply(a, b) {return a * b;}

        function divide(a, b) {
            if (b === 0) {
                return "Cannot divide by zero!";
            } else {
                return a / b;
            }
        }
        
        function performOperation() {
            let num1 = parseFloat(document.getElementById('num1').value);
            let num2 = parseFloat(document.getElementById('num2').value);
            let operation = document.getElementById('operation').value;
            
            // Validate if numbers are entered
            if (isNaN(num1) || isNaN(num2)) {
                alert("Please enter valid numbers.");
                return;
            }
            
            let result;
            switch (operation) {
                case "add":
                    result = add(num1, num2);
                    break;
                case "subtract":
                    result = subtract(num1, num2);
                    break;
                case "multiply":
                    result = multiply(num1, num2);
                    break;
                case "divide":
                    result = divide(num1, num2);
                    break;
                default:
                    result = "Invalid operation";
            }

            document.getElementById('result').innerText = "Result: " + result;
        }
    </script>

</body>
</html>
```

### Question 3

Develop and design JavaScript Compute GCD and LCM of two numbers using functions.

```html
<body>
    <h1>Compute GCD and LCM of Two Numbers</h1>
    
    <label for="num1">Enter first number: </label>
    <input type="number" id="num1" required><br><br>
    
    <label for="num2">Enter second number: </label>
    <input type="number" id="num2" required><br><br>
    
    <button onclick="computeGCD_LCM()">Calculate GCD & LCM</button>
    
    <h3 id="result">Result: </h3>
    
    <script>
        // GCD using the Euclidean algorithm
        function computeGCD(a, b) {
            while (b !== 0) {
                [a, b] = [b, a%b];
            }
            return a;
        }
        
        // LCM using the formula
        function computeLCM(a, b) {
            return (a * b) / computeGCD(a, b);
        }
        
        function computeGCD_LCM() {
            let num1 = parseInt(document.getElementById('num1').value);
            let num2 = parseInt(document.getElementById('num2').value);
            
            // Validate if numbers are entered
            if (isNaN(num1) || isNaN(num2)) {
                alert("Please enter valid numbers.");
                return;
            }
            
            let gcd = computeGCD(num1, num2);
            let lcm = computeLCM(num1, num2);
	        document.getElementById('result').innerText = 
			    `GCD of ${num1} and ${num2} is: ${gcd} <br>
				LCM of ${num1} and ${num2} is: ${lcm}`;
        }
    </script>

</body>
</html>
```

### Question 4

Develop and design JavaScript function to calculate the income of a person
Salary :
1000-5000 commission 10%
5001-10000 commission 15%
10001 and above commission 20%

```html
<body>
    <h1>Calculating Person's Income</h1>

    <label for="salary">Enter Salary: </label>
    <input type="number" id="salary" required><br><br>
    
    <button onclick="calculateIncome()">Calculate Income</button>
    
    <h3 id="result">Income Result: </h3>

    <script>
        function calculateIncome() {
            const salary = parseFloat(document.getElementById('salary').value);
            
            // Validate if the salary is a valid number
            if (isNaN(salary) || salary <= 0) {
                alert("Please enter a valid salary.");
                return;
            }
            
            let commissionRate;
            let commissionAmount;
            
            if (salary >= 1000 && salary <= 5000) {
                commissionRate = 0.10;  // 10% commission
            } else if (salary >= 5001 && salary <= 10000) {
                commissionRate = 0.15;  // 15% commission
            } else if (salary > 10000) {
                commissionRate = 0.20;  // 20% commission
            } else {
                commissionRate = 0;
            }
            
            commissionAmount = salary * commissionRate;
            
            const totalIncome = salary + commissionAmount;
            
            document.getElementById('result').innerText = 
                `Salary: ${salary} <br>
				Commission: ${commissionAmount.toFixed(2)} <br>
				Total Income: ${totalIncome.toFixed(2)}`;
        }
    </script>
</body>
</html>
```

