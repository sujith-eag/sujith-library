# Arrays


## JavaScript Arrays (Data Sheet 15)


### Question 1
Declare an array using literal and print the array elements using for loop.
```html
<body>
    <h3>Array Elements:</h3>

	<div id="output"></div>

    <script>
        let myArray = [10, 20, 30, 40, 50];
        
        let output = '';
        for (let i = 0; i < myArray.length; i++) {
            output += `Element at index ${i} : ${myArray[i]} <br>`;
        }
        
        document.getElementById("output").innerHTML = output;
    </script>
</body>
</html>
```

### Question 2
Declare an array using new constructor and print the array elements using `forEach()`.
```html
<body>
    <h3>Array Elements:</h3>
    <div id="output"></div>

    <script>
        let myArray = new Array(10, 20, 30, 40, 50);
        let output = '';

        myArray.forEach( element => {
            output += `Element is ${element} <br>`;
        });

        document.getElementById("output").innerHTML = output;
    </script>
</body>
</html>
```

Using a named function instead of Arrow function
```js
let myArray = new Array(10, 20, 30, 40, 50);

myArray.forEach(printElement);

function printElement(element) {
    console.log(`Element is ${element}`);
}
```

### Question 3
Create an array of numbers and print the Fibonacci series with the help of `forEach()`
method.

```html
<body>
    <h3>Fibonacci Series:</h3>
    <div id="output"></div>

<script>
    function fibonacci(n) {
        if (n <= 1) {
            return n;
        }
        return fibonacci(n - 1) + fibonacci(n - 2);
    }

    let n = 10;
    let fibArray = [];

    for (let i = 0; i < n; i++) {
        fibArray.push(fibonacci(i));
    }
    fibArray.forEach(element => console.log(element));

    let outputDiv = document.getElementById("output");
    outputDiv.innerHTML = fibArray.join(", ");
</script>
</body>
```

### Question 4

Create an array of numbers and print the sum of numbers with the help of `forEach()` method.
```html
<body>
    <h3>Sum of Numbers:</h3>
    <div id="output"></div>

    <script>
        let numbers = [1, 2, 3, 4, 5];
        let sum = 0;
        
        numbers.forEach( element => {
            sum += element;
        });

		let display = document.getElementById("output");
		display.innerHTML = `The sum of the numbers is: ${sum}`;
    </script>
</body>
```

### Question 5
Use the `Array.forEach()` method to copy every element from one array to another.
```html
<body>
    <h3>Copying Elements from One Array to Another:</h3>
    <div id="output"></div>

    <script>
        let sourceArray = [10, 20, 30, 40, 50];
        let destinationArray = [];
        
        sourceArray.forEach(element => {
            destinationArray.push(element); 
        });
        
        document.getElementById("output").innerHTML = `Destination Array: [${destinationArray.join(", ")}]`;
    </script>
</body>
```

### Question 6
Develop a javascript program to demonstrate the concept of arrays and its following
methods i) `join()`, `reverse()`, `sort()` and `concat()`.
```html
<body>
    <h3>Array Methods: join(), reverse(), sort(), and concat()</h3>
    <div id="output"></div>

    <script>
        let numbers = [5, 3, 8, 1, 2];

        let joinedNumbers = numbers.join(", ");
        let reversedNumbers = [...numbers].reverse(); 
        let sortedNumbers = [...numbers].sort((a, b) => a - b);
        
        let moreNumbers = [10, 20, 30];
        let combinedNumbers = numbers.concat(moreNumbers);

        let output = `
            Original Array: [${numbers.join(", ")}] <br>
            After join(): ${joinedNumbers} <br>
            After reverse(): [${reversedNumbers.join(", ")}] <br>
            After sort(): [${sortedNumbers.join(", ")}] <br>
            After concat() with [${moreNumbers.join(", ")}]: [${combinedNumbers.join(", ")}]
        `;
		document.getElementById("output").innerHTML = output;
    </script>
</body>
```

