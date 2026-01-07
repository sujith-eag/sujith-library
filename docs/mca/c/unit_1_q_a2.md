# DS - Unit-1 Recursion and Stack Answered

## Recursion: Recursive definition and processes, Designing the recursive functions, Examples on recursion: Factorial of a number, Fibonacci numbers

- Differentiate between iterative functions and recursive functions.
- Write the difference between iterative method and recursion method. Is it advisable to generate Fibonacci Series using recursion? Justify your answer with an example.
- What is Recursive function? Write a recursive program to find Fibonacci series.

**Answer :**

An **iterative function** uses loops (for, while, or do-while) to repeat a set of instructions until a certain condition is met. Iteration involves repeating a block of code in a loop.
- Typically involves maintaining state variables that change with each iteration.
- **Memory Usage** is generally less because no additional stack space is needed.
- **Performance** is faster in terms of execution as there are fewer overheads compared to recursion.

To calculate the **sum of numbers from 1 to N**:
```c
int sumIterative(int n) {
    int sum = 0;
    for (int i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}
```


In computer science, recursion is a method of solving a computational problem where the solution depends on solutions to smaller instances of the same problem **Recursion** is used to divide a task into smaller sub-tasks to solve the bigger problem.

- Requires a base case which defines the stopping criteria to terminate the recursion and prevent infinite recursive calls, leading to stack overflow.

- A function calls itself / recursive call to solve the smaller subproblems, each of which can be solved in the same way, often reducing the problem size with each call and moving towards the base case.
 
- **Memory Usage** is more because each recursive call adds a new call stack.
- **Performance** can be slower due to the overhead of multiple function calls and stack operations.

To calculate the **sum of numbers from 1 to N**:
```c
int sumRecursive(int n) {
    if (n == 0) {
        return 0;  // Base case
    } else {
        return n + sumRecursive(n - 1);  // Recursive case
    }
}
```

____

### Applications of Recursion

- **Searching and sorting algorithms** : Recursive algorithms are used to search and sort data structures like trees and graphs.

- **Mathematical calculations** : Recursive algorithms are used to solve problems such as factorial,Fibonacci sequence, etc.

- **Compiler design** : Recursion is used in the design of compilers to parse and analyze programming languages.

- **Graphics** : many computer graphics algorithms, such as fractals and the Mandelbrot set, use recursion to generate complex patterns.

- **Artificial intelligence** : recursive neural networks are used in natural language processing, computer vision, and other AI applications.

---

### What is Recursive function? Write a recursive program to find Factorial of a number.

**Answer :**

```c
#include <stdio.h>

int factorial(int n) 
{
    if (n == 0 || n == 1)
        return 1;
        
	return n * factorial(n - 1);
}

int main() {
    int num;
    printf("Enter a number: ");
    scanf("%d", &num);
    
    if (num < 0) 
    {
        printf("Factorial is not defined for negative numbers.\n");
    }
    else
    {
        printf("Factorial of %d is %d\n", num, factorial(num));
    }
    
    return 0;
}
```

## Fibonacci Series Using Recursion

It is not advisable to generate the Fibonacci series using recursion, especially for large numbers.
- Exponential Time Complexity: A naive recursive implementation has exponential time complexity `O(2^n)` because it recalculates the same values multiple times. This leads to redundant calculations, causing a significant performance issue.
- Stack Overflow: Recursive calls consume stack space for each function call, and for large inputs, this may lead to stack overflow.
- Inefficiency: For large `n`, recursion may be inefficient compared to other methods like iteration or dynamic programming.

### Fibonacci using recursion 

```c
#include <stdio.h>

int fibRecursive(int n)
{
    if (n <= 1) 
        return n;
    
    return fibRecursive(n - 1) + fibRecursive(n - 2);
}

int main()
{
	int n;
	printf("Enter Number of terms : ");
	scanf("%d", &n);
	printf("The Fibonacci series is :\n\n");

	int step = 0;
	for(int i = 0; i<n; i++)
	{
		printf("%d ", fibRecursive(step));
		step++;
	}
	printf("\n");
	return 0;
}
```

____

### Fibonacci Series Using Iteration (More Efficient):

```c
#include <stdio.h>

int fibSequence(int n)
{ 
	if (n <= 1) 
		return n;
    
    int a = 0, b = 1, c;
    for (int i = 2; i <= n; i++) {
        c = a + b;
        a = b;
        b = c;
    }
    return c;
}

int main()
{
	int n;
	printf("Enter Number of terms : ");
	scanf("%d", &n);
	printf("The Fibonacci series is :\n\n");

	int step = 0;
	for(int i = 0; i<n; i++)
	{
		printf("%d ", fibSequence(step));
		step++;
	}
	printf("\n");
	return 0;
}
```

___

### Using While Loop and no separate function

```c
#include <stdio.h>

int main()
{
	int n;
	printf("Enter Number to get Fib Series : ");
	scanf("%d", &n);
		
	int a = 0, b = 1, c = 0;	
	printf("The Fib Sequence is:\n\n %d %d ", a, b);	
	
	int i = 2;
	while(i < n)
	{
		c = a + b;
		a = b;
		b = c;
		
		i++;
		printf("%d ", c);
	}
	printf("\n");
	return 0;
}
```

In this iterative approach:
- Time Complexity: O(n)
- Space Complexity: O(1)
- Efficiency: It computes the Fibonacci number in linear time with constant space, making it much more efficient than the recursive approach.

_____

### Write a recursive C program to find GCD of two numbers.

**Answer :**

```c
#include <stdio.h>

int gcd(int a, int b) {
    if (b == 0) {
        return a;
    }
    else {
        return gcd(b, a % b);
    }
}

int main() {
    int num1, num2;
    printf("Enter two numbers: ");
    scanf("%d %d", &num1, &num2);
    
    printf("GCD of %d and %d is %d\n", num1, num2, gcd(num1, num2));
    
    return 0;
}
```

____

## Towers of Hanoi problem for 'n' disks.

- Write a recursive function to solve Towers of Hanoi problem for 'n' disks and interpret the recursive calls for the transfer of three disks.
- State tower of Hanoi problem. Write a recursive C function to solve the same problem for three disks.
- Write a Recursive C program to solve tower of Hanoi problem. Find the number of moves required to solve the same problem for 5 Disks.
- State tower of Hanoi problem. Write a recursive C function to solve the same problem for three disks.
- Explain how stacks can be used in recursion. Write the recursive algorithm to solve towers of Hanoi problem. Trace the algorithm considering 3 disks.
- Define Recursion. Write a recursive c function for the following: i) Find factorial of a number    ii) Solve Towers of Hanoi problem.

**Answer :**

The Tower of Hanoi problem involves three rods and `n` disks of different sizes. The goal is to move all disks from the source rod to the destination rod, following these rules:
1. Only one top disk can be moved at a time from one rod to another.
2. Larger disk cannot be placed on smaller disks.

The recursive solution is based on the following steps:
1. Move the first `n-1` disks from the source rod to the auxiliary rod.
2. Move the nth disk (largest disk) from the source rod to the destination rod.
3. Move the `n-1` disks from the auxiliary rod to the destination rod.

---

```c
#include <stdio.h>

void towerOfHanoi(int n, char A, char B, char C)
{
	if (n>0)
	{
		towerOfHanoi(n-1, A, C, B);
		printf("\nMove Disk %d, from %c tower to %c \n", n, A, C);
		towerOfHanoi(n-1, B, A, C);
	}	
}

int main()
{
	int n;
	printf("Enter the number of Disks: \n");
	scanf("%d", &n);
	
	printf("\nThe Sequence of moves are as Follows: \n");
	towerOfHanoi(n, 'A', 'B', 'C');
	
	return 0;
}
```

---

The sequence of moves is as follows for three disks:
1. Move disk 1 from rod A to rod C
2. Move disk 2 from rod A to rod B
3. Move disk 1 from rod C to rod B
4. Move disk 3 from rod A to rod C
5. Move disk 1 from rod B to rod A
6. Move disk 2 from rod B to rod C
7. Move disk 1 from rod A to rod C


For `n = 3` disks, the recursive calls break down as follows:
- Move 2 disks from `A` to `B` (using `C` as auxiliary).
    - Move 1 disk from `A` to `C` (using `B` as auxiliary).
    - Move disk 2 from `A` to `B`.
    - Move 1 disk from `C` to `B` (using `A` as auxiliary).
- Move disk 3 from `A` to `C`.
- Move 2 disks from `B` to `C` (using `A` as auxiliary).
    - Move 1 disk from `B` to `A` (using `C` as auxiliary).
    - Move disk 2 from `B` to `C`.
    - Move 1 disk from `A` to `C` (using `B` as auxiliary).

For `n = 5` disks, the number of moves required is: `2^5−1 = 32−1 =31` moves

___
____

## Stack: Introduction to Stacks, Operations on a Stack

- Define stack. Give the implementation of push, pop and display functions. Include check for empty and full conditions.
- What is Stack? Write C functions to perform push (), pop () and display operations on STACK.
- What is Stack? Write a c program to implement stack using an array checking all necessary conditions and to perform the following operations: push (), pop () and display.
- Define Stack. Develop routines to handle insert, push, pop and print operations on Stack.
- Write C functions to perform push (), pop () and display operations on STACK.

**Answer :**

Stack is a linear data structure having same data types. Elements are arranged in a sequential order in which insertion (push) and deletion (pop) are made at only one end called the top.

Since the last element inserted is the last one to be removed, a stack is also known as `Last-in-First_out  LIFO` list


Stack Operations:
* Push: Insert an element onto the stack.
* Pop: Remove the topmost element from the stack.
* Display: Display all the elements in the stack.
* isFull: Check if the stack is full.
* isEmpty: Check if the stack is empty.

(Diagram of stack push and pop from the top)


____

Function to push
```c
void push(int item)
{
	if (top >= MAX_SIZE-1)
	{
		printf("Stack is full\n");
		return;
	}
	stack[++top] = item;
}
```

Function to pop
```c
int pop()
{
	if(top == -1)
	{
		printf("Stack is empty");
		return -1;
	}
	return stack[top--];
}
```

function to display
```c
void dispaly()
{
	int temp = top;
	while( temp != -1)
	{
		printf("%d", stack[temp]);
		temp--;
	}
}
```

Full Stack Program
```c
#include <stdio.h>
#define MAX_SIZE 5

// Global variables
int stack[MAX_SIZE];
int top = -1;


int isFull() {
    if (top == MAX_SIZE - 1)
        return 1;  // Stack is full
    return 0;
}

int isEmpty() {
    if (top == -1)
        return 1;  // Stack is empty
    return 0;
}

void push(int item) {
    if (isFull()) {
        printf("Stack is full. Cannot push %d.\n", item);
        return;
    }
    stack[++top] = item;
    printf("Pushed %d onto the stack.\n", item);
}

int pop() {
    if (isEmpty()) {
        printf("Stack is empty. Cannot pop.\n");
        return -1;
    }
    int poppedItem = stack[top--];
    return poppedItem;
}

void display() {
    if (isEmpty()) {
        printf("Stack is empty.\n");
        return;
    }
    printf("Stack elements: ");
    for (int i = top; i >= 0; i--) {
        printf("%d ", stack[i]);
    }
    printf("\n");
}

int main() {
    push(10);
    push(20);
    push(30);
    push(40);
    push(50);
    push(60); // "stack is full"

    display();

    printf("Popped: %d\n", pop());
    printf("Popped: %d\n", pop());

    display();

    return 0;
}
```

_____

### Write a C program to Reverse a String using STACK data structure.

* Justify the usage of stacks for reversal of strings while explaining the various operations related to stack data structure.

**Answer :**

A **stack** is a linear data structure that follows the **Last In, First Out (LIFO)** principle. This means the element that is pushed last into the stack is the first one to be popped out. This property makes the stack an ideal choice for reversing a string because the reversal process requires accessing the last character of the string first, which is efficiently achieved using a stack.

Operations to reverse a string using stack :

- **Push Operation**: We iterate through the string from left to right and push each character onto the stack, last character will be in the top.

- **Pop Operation**: After pushing all the characters onto the stack, we pop each character from the stack. Since the stack operates on LIFO, last character will be popped first, characters will be popped in reverse order, thus reversing the string.

* **Display Operation :** from the stack will iterate from the top to bottom of the stack so this will also provide a reversed string.

(A Diagram to explain the process)

```c
#include <stdio.h>
#include <string.h>

#define MAX 100

// Stack global variables
char stack[MAX];
int top = -1;

void push(char value) 
{
    if (top == MAX - 1) 
    {
        printf("Stack Overflow\n");
        return;
    }
    stack[++top] = value;
}

char pop() 
{
    if (top == -1) 
    {
        printf("Stack Underflow\n");
        return -1;
    }
	return stack[top--];
}

void display() 
{
    if (top == -1) 
    {
        printf("Stack is empty\n");
        return;
    }
	
	printf("Stack elements: ");
	for (int i = 0; i <= top; i++) {
		printf("%c ", stack[i]);
	}
	printf("\n");
}

void reverseString(char str[]) 
{
    for (int i = 0; str[i] != '\0'; i++) 
    {
        push(str[i]);
    }

    // Pop characters and overwrite string
    for (int i = 0; str[i] != '\0'; i++) 
    {
        str[i] = pop();
    }
}

int main() 
{
    char str[MAX];

    printf("Enter a string: ");
    fgets(str, MAX, stdin);
    str[strcspn(str, "\n")] = '\0';
    
    printf("Original String: %s\n", str);
    
    // Reverse the string using the stack
    reverseString(str);
    
    printf("Reversed String: %s\n", str);
    
    return 0;
}
```

____

## Applications of Stacks: Conversion from Infix to Postfix

- Write a C program to convert an infix expression to postfix expression using STACK. Also convert the following infix expression to postfix expression by mentioning the steps clearly: 
- Write the algorithm for converting the Infix Expression to Postfix expression. Also transform the following expression to its postfix equivalent form by using the conversion algorithm steps.

- `(a+b)*(c+(d-e))`
- `(A+B)*C-D*F+E`         
- `(A+B)-C)*D`           
- `(A-(B+C))*D)$(E+F)`
- `((M+(N-O)*P)^Q+R)`     
- `A^B^C-D+E+F/G`
- `((A+(B-C) *D) ^E+F)`     
- `X^Y^Z-D+E+F/G`
- `(A ^ B * (H - J * K)) + P / K * G`
- `((A+B)^C-(D*E)/F)`
- `(((A/B)+C*(D-E)^F)*G)`.
- `3 – 6 / (9 * (2 ^ 4))`

**Answer :**

**Algorithm for Converting Infix Expression to Postfix Expression**

To convert an infix expression to a postfix expression, we use a stack to store operators and parentheses. The steps for the conversion process are as follows:

1. **Initialize an empty stack** for operators and an empty list for the postfix expression (or it can be printed directly).

2. **Scan the infix expression** from left to right, one character at a time.
    - If the character is an **operand** (i.e., a variable or number), add it directly to the postfix expression.
    - If the character is an **opening parenthesis `(`**, push it onto the stack.
    - If the character is a **closing parenthesis `)`**, pop operators from the stack and add them to the postfix expression until an opening parenthesis `(` is encountered. Pop and discard the `(`.
    - If the character is an **operator** (`+`, `-`, `*`, `/`, `^`):
        - While the operator at the top of the stack has **greater than or equal precedence** than the current operator, pop the stack and add the operators to the postfix expression.
        - Push the current operator onto the stack.

3. **After scanning all the characters in the infix expression**, pop all the operators left in the stack and add them to the postfix expression.

**Precedence**: Operators with higher precedence should be evaluated first.    
- `^` (Exponentiation) has the highest precedence (3).
- `*`, `/` (Multiplication and Division) have a lower precedence (2) than `^`,
- `+`, `-` (Addition and Subtraction) have the lowest precedence (1).

____

1. **Infix**: `(a+b)*(c+(d-e))`    Postfix: a b + c d e - + *
2. **Infix**: `(A+B)*C-D*F+E`        **Postfix**: A B + C * D F * - E +
3. **Infix**: `(A+B)-C)*D`              **Postfix**: A B + C - D *
4. **Infix**: `(A-(B+C))*D)$(E+F)`  **Postfix**: A B C + - D * E F + $
5. **Infix**: `((M+(N-O)*P)^Q+R)`    **Postfix**: M N O - P * + Q ^ R +
6. **Infix**: `A^B^C-D+E+F/G`            **Postfix**: A B C ^ ^ D - E + F G / +
7. **Infix**: `((A+(B-C) *D) ^E+F)`  **Postfix**: A B C - D * + E ^ F +
8. **Infix**: `X^Y^Z-D+E+F/G`  **Postfix**: X Y Z ^ ^ D - E + F G / +
9. **Infix**: `(A ^ B * (H - J * K)) + P / K * G`  **Postfix**: A B H J K * - ^ * P K / G * +
10. **Infix**: `((A+B)^C-(D*E)/F)`   **Postfix**: `A B + C ^ D E * F / -`
11. **Infix**: `(((A/B)+C*(D-E)^F)*G)`  **Postfix**: A B / C D E F ^ - * + G *
12. **Infix**: `3 – 6 / (9 * (2 ^ 4))`  **Postfix**: 3 6 9 2 4 ^ * / -

____

## Evaluation of a postfix expression.

- Develop an algorithm to evaluate a postfix expression. Trace the algorithm for the expression:
- Write a function in C for evaluating a postfix expression. Justify the usage of stack for evaluating the given expression:

- `2536+**5/2-`
- `6 2 3 + - 3 8 2 / + * 2 $ 3 +`.
- `PQ+R-QP+R^-` where P=1, Q=2, R=3.
- `AB/CDE$*-F+`   Assume A=12, B=3, C=2, D=5, E=1, F=7
- `XYZ + * ZYX - + *` where X=1, Y=2, Z=3.
- `ABC + * CBA - + *` where A=1, B=2, C=3.


**Answer :**

Postfix Evaluation Algorithm:
1.  Initialize an empty stack.
2.  For each symbol in the postfix expression (from left to right):
	* If the symbol is a number: Push it onto the stack.
	* If the symbol is an operator (e.g., +, -, *, /):
		* Pop the top two operands from the stack.
		* Apply the operator to the two operands (first on right and second on left).
		* Push the result of operation back onto the stack.
3.  At the end of the expression, the stack should contain exactly one element, which is the result of the evaluation.

___

1. `2536+**5/2-`      Answer: `16`
2. `6 2 3 + - 3 8 2 / + * 2 $ 3 +`      Answer: `19`
3. `PQ+R-QP+R^-` where P=1, Q=2, R=3.    Answer: `0`
4. `AB/CDE$*-F+` where A=12, B=3, C=2, D=5, E=1, F=7  Answer: `8`
5. `XYZ + * ZYX - + *` where X=1, Y=2, Z=3.     Answer: `6`
6. `ABC + * CBA - + *` where A=1, B=2, C=3.    Answer: `6`


