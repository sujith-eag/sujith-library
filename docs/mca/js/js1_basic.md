# Basic JavaScript


## Basic Programs (Data sheet 13)

### Question 1
Develop a JavaScript code to reverse a given string using loops.
```js
function reverseString(str) {
	let reversed = '';  

  // Loop through the string in reverse
	for (let i = str.length-1 ; i >= 0 ; i--) {
		reversed += str[i];
	}
	return reversed;  
}
```

```
let inputString = "Hello, World!";
let reversedString = reverseString(inputString);
console.log(reversedString);  
//"!dlroW ,olleH"
```

Full Program
```html
<body>
	<label for="str">Enter Text: </label>
	<input id="str" type="text" placeholder="Enter string to reverse"><br>
	<input type="button" value="Reverse" id="subButton">
	
	<h3 class="displayResult"></h3>
    
<script>
let subButton = document.getElementById("subButton");
subButton.addEventListener("click", revString);

function revString() {
	let str = document.getElementById("str").value;
	let reversed = "";
	
	for(let i = str.length-1; i >= 0 ; i--) {
		reversed += str[i];
	}
	
	let result = document.querySelector(".displayResult");
	result.textContent = reversed;
	alert(reversed);
}
</script>
</body>
```

### Question 2
Develop a JavaScript code to count the number of vowels using loops and if statement.


```html
<body>
    <label for="str">Enter String</label>
    <input id="str" type="text" placeholder="Enter string">
    <br><button id="get">Check</button>
    
    
<script>
let get = document.getElementById("get");
get.addEventListener("click", checkVowels);

function checkVowels(){
		let str = document.getElementById("str").value;
		let count = 0;
		for (let i = 0 ; i < str.length ; i++ ){
				if(str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u') {
						count++;
				}
		}
		alert(count);
		}
</script>
</body>
```
```js
function countVowels(str) {
	let count = 0;
	
	for (let i = 0; i < str.length; i++) {
		let char = str[i].toLowerCase();
		switch (char) {
			case 'a':
			case 'e':
			case 'i':
			case 'o':
			case 'u':
				count++;
				break;
			default:
				break;  
        }
	}
	return count;
}
```

```js
function countVowels(str) {
	let vowels = 'aeiouAEIOU';
	let count = 0;  
	
	for (let i = 0; i < str.length; i++) {
		if (vowels.indexOf(str[i]) !== -1) {
			count++;  // Increment if it's a vowel
		}
	}
	return count;
}
```

```
let inputString = "Hello, World!";
let vowelCount = countVowels(inputString);
console.log(vowelCount);  // Output: 3

```

### Question 3
Develop a JavaScript code to find the largest of 3 numbers using if statement and logical
operators.
```js
function findLargest(a, b, c) {
	if (a >= b && a >= c) {
		return a;
	} else if (b >= a && b >= c) {
		return b;
	} else {
		return c;  
	}
}
```

```
let num1 = 10;
let num2 = 25;
let num3 = 15;

let largest = findLargest(num1, num2, num3);
console.log("The largest number is:", largest);  
// "The largest number is: 25"
```

```html
<body>

<script>
	let val1 = 20;
	let val2 = 70;
	let val3 = 40;
	
	alert(findLargest(val1, val2, val3));
	function findLargest(a,b,c){   
		if( a >= b && a >= c){
				return a; }
		else if( b>= c && b>= a){
				return b;
		}
		else{
				return c;
		}
	}
	</script>    
</body>
```


### Question 4
Develop a JavaScript code to print even and odd numbers from 1 – 10.

```js
function EvenOdd() {
	for (let i = 1; i <= 10; i++) {
		if (i % 2 === 0) {
			console.log(i + " is even");
		} else {
			console.log(i + " is odd");
		}
	}
}

EvenOdd();
```

Full Program
```html
<body>

	<h3 id="even"></h3><br>
	<h3 id="odd"></h3> 
    
<script>
let evenList = [];
let oddList = [];

for( let i = 1; i<=10 ; i++ ){
	if( i%2 === 0 ){
		evenList.push(i);
	}
	else{
		oddList.push(i);
	}
}

let oddString = "These are Odd: ";
let evenString = "These are Even: ";

oddList.forEach(element => {
    oddString += ` ${element} ,`;
});
evenList.forEach(element => {
    evenString += ` ${element} ,`;
});

document.getElementById("odd").textContent = oddString;
document.getElementById("even").textContent = evenString;
</script>
</body>
```

### Question 5
Develop a JavaScript code program that prints the numbers from 1 to 20. However, for
multiples of 3, print "Fizz" instead of the number, for multiples of 5, print "Buzz",
and for numbers that are multiples of both 3 and 5, print "FizzBuzz".

```js
function fizzBuzz() {
	for (let i = 1; i <= 20; i++) {
		if (i % 3 === 0 && i % 5 === 0) {
			console.log("FizzBuzz");
		}
		else if (i % 3 === 0) {
			console.log("Fizz");
		}
		else if (i % 5 === 0) {
			console.log("Buzz");
		}
		else {
			console.log(i);
		}
	}
}

fizzBuzz();
```

```html
<body>
    <h4 id="display"></h4>
<script>
    
function fizzbuzz(){
	let res = []
	for(let i =1; i <=20; i++){
		if(i%3==0 && i%5==0){
			res.push(" FizzBuzz ");
		}
		else if(i%3 == 0){
			res.push(" Fizz ");
		}
		else if(i%5==0){
			res.push(" Buzz ");
		}
		else{
			res.push(` ${i} `);
		}
	}
document.getElementById("display").textContent = res;
}
fizzbuzz();

</script>
</body>
```


## JavaScript Strings (Data Sheet 14)

### Question 1

Declare a string and display it using `innerHTML`.
```html
<body>
    <div id="displayArea"></div>
    
    <script>
        let myString = "A string displayed using innerHTML!";    
        let disArea = document.getElementById("displayArea");
        disArea.innerHTML = myString;
    </script>
</body>
</html>
```

### Question 2

Display the string containing special characters(quotes) using backslash escape
character.
```html
<body>
    <div id="displayArea"></div>
    
    <script>
        let myString = "She said, \"Hello, how are you?\"";
		let disArea = document.getElementById("displayArea");
        disArea.innerHTML = myString;
    </script>
</body>
</html>
```

```html
<body>
	<h3 id="one"></h3> <br>
	<div id="two"></div> <br>
    
<script>
	let str1 = "A basic String";
	let str2 = "A string with \"Quotes\" and \\ backslash";
	
	document.getElementById("one").innerHTML = str1;
	document.getElementById("two").innerHTML = `<h3>${str2}</h3>`;    
</script>
</body>
```

### Question 3

Demonstrate the `slice()` with no parameters, one parameter, two parameters and
negative parameters.

Slice is used to extract a portion of string or array.
```js
array.slice(beginIndex, endIndex);
string.slice(beginIndex, endIndex);
```

```js
let str = "Hello, World!";
let result = str.slice();
console.log(result);  
// "Hello, World!"
```

```js
let str = "Hello, World!";
let result = str.slice(7);  // from 7 to the end
console.log(result);  
// "World!"
```

```js
let str = "Hello, World!";
let result = str.slice(0, 5);  // excludes index 5
console.log(result);  
// "Hello"
```

```js
let str = "Hello, World!";
let result = str.slice(-6, -1);  // excluding -1
console.log(result);
// "World"
```

```html
<body>
	<h3>String Slice Examples</h3>
    
	<div id="output"></div>

	<script>
		let str = "Hello, World!";

		let noParams = str.slice();
		let oneParam = str.slice(7);
		let twoParams = str.slice(0, 5);
		let negativeParams = str.slice(-6, -1);

		document.getElementById("output").innerHTML = `
			<p>No parameters: ${noParams}</p>
			<p>One parameter: ${oneParam}</p>
			<p>Two parameters: ${twoParams}</p>
			<p>Negative parameters: ${negativeParams}</p>
		`;
	</script>
</body>
</html>
```

### Question 4

Demonstrate the `substr()` with no parameters, one parameter, two parameters and
negative parameters.

`substr()` method extracts a portion of a string starting from a specified index and for a specified length.
```js
string.substr(startIndex, length);
```

```js
let str = "Hello, World!";
let result = str.substr();
console.log(result);  
// "Hello, World!"
```

```js
let str = "Hello, World!";
let result = str.substr(7); // from 7 to end
console.log(result);  
// "World!"
```

```js
let str = "Hello, World!";
let result = str.substr(7, 3); 
console.log(result);
// "Wor"
```

```js
let str = "Hello, World!";
let result = str.substr(-6, 5);
console.log(result);  
// "Hello"
```

```js
<body>
	<h3>String Substr Examples</h3>
	<div id="output"></div>

<script>
	let str = "Hello, World!";
		
	let noParams = str.substr();
	let oneParam = str.substr(7);
	let twoParams = str.substr(0, 5);
	let negativeParams = str.substr(-6, 5);

	document.getElementById("output").innerHTML = `
		<p>No parameters: ${noParams}</p>
		<p>One parameter: ${oneParam}</p>
		<p>Two parameters: ${twoParams}</p>
		<p>Negative parameters: ${negativeParams}</p>
	`;
</script>

</body>
</html>
```

### Question 5

Demonstrate the `replace()` and `replaceAll()` methods

```js
string.replace(searchValue, newValue);
string.replaceAll(searchValue, newValue);
```

```js
let str = "Hello, World! Hello again!";

let result = str.replace("Hello", "Hi");
console.log(result);  
// "Hi, World! Hello again!"

let result1 = str.replaceAll("Hello", "Hi");
console.log(result);  
// "Hi, World! Hi again!"
```

