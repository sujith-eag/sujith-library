# DS - Unit-1 Data Structure Answered

## Introduction to Data Structures: Definition, Need of Data Structures, Classification of Data Structures.

- What are Data Structures? Explain the classification of data sutures with examples?
- Define data structure. List its types and also explain the need of Data structures.

**Answer :**

A **Data Structure** is a systematic way of organizing, storing and  managing data efficiently to allow for efficient access and modification.

**Data Structure** is a collection of data values and the relationships between them. It defines the arrangement of data and operations that can be performed on it like insertion, deletion and updation.

Every application uses a Data Structure, Different types of data structures are used for different types of data, and the selection of an appropriate data structure can greatly impact the efficiency of an algorithm.

____

### Types of Data Structures:

Data structures are classified into two main categories :

1. **Primitive Data Structures**: These are the most basic data types that can hold or represent only single value and are directly operated upon by the CPU.
	- **Integer**: A whole number (`5`, `-6`)
	- **Float/Double**: A number with decimal points (`3.14`).
	- **Character**: A single character (`'a'`).
	- **Boolean**: Logical values representing `true` or `false`.

2. **Non-Primitive Data Structures**:  These data structures are more complex and are derived from primitive data types. They can hold multiple values and have different arrangements of data.

____

Classification of Non Primitive Data Structures can be broadly be done into two categories:
1. Linear Data Structures
2. Non-linear Data Structures

#### Linear Data Structures

In linear data structures, the data elements are arranged in a sequential or linear order one after the other. Each element has a unique predecessor and successor, except for the first and last elements.

- **Array**: A collection of elements, all of the same type, stored in contiguous memory locations. It provides fast access to individual elements using an index.  `int arr[5] = {1, 2, 3, 4, 5};`

- **Linked List**: A linear collection of elements, where each element (node) contains data and a reference (link) to the next node. Unlike arrays, linked lists do not require contiguous memory locations. A linked list of integers: `10 -> 20 -> 30 -> NULL`.

- **Stack**: A collection of elements that follows the **Last In, First Out (LIFO)** principle. Elements are added and removed only from the top.  Stack of plates: `Top -> Plate1 -> Plate2 -> Plate3`.

- **Queue**: A collection of elements that follows the **First In, First Out (FIFO)** principle. Elements are added at the rear and removed from the front. Queue of people: `First Person -> Second Person -> Third Person`.


#### Non Linear Data Structures

In Non-linear data structure, elements are not stores sequentially, they are connected to each other in a hierarchical or interconnected manner.

- **Tree** : A hierarchical structure with a root node and child nodes, where each node can have zero or more child nodes. It is used to represent hierarchical relationships. A family tree or a file directory structure.
- Trees : Binary Tree, Binary Search Tree, AVL Tree, B-Tree, B+ Tree, Red-Black Tree


- **Graph** : A collection of nodes (vertices) and edges (connections) between the nodes.
- Graphs : Directed, Undirected, Weighted, Unweighted.
- Graphs can represent relationships between entities in many real-world problems (e.g., social networks, maps, Routing algorithms, transportation systems).

____

## Characteristics of Data Structure

- **Correctness** : Data must be represented accurately and managed.

- **Time Complexity** : Running time or execution time of operations like insert, delete and search should take the least possible time.

- **Space Complexity** : Memory usage should be as minimal and efficient.

____

## Need for Data Structures:

When amount of data is very large, operations on it in a linear fashion will be very slow and processing will not be efficient. Multiple concurrent requests cannot be handled in a inefficient data structure leading to delays or crashes.

- Handling Large volumes of data needs efficient structures to prevent performance issues.

- **Efficient Data Management** : Data structures organize data for efficient access, retrieval and modification.
- Arrays provide O(1) access time using an index.

- **Memory Optimization** : Data structures help in efficient use of memory. 
- Linked lists allow dynamic memory allocation, avoiding the need to pre-allocate a fixed amount of memory like in arrays.

- **Faster Processing** : Specialized Data structures are optimized for fast searching, insertion, deletion, and traversal. 
- Binary Search Trees allow efficient searching.

- Different algorithms are optimized with specific data structures to achieve optimal performance. 
- Sorting algorithms may use arrays, Graph algorithms use adjacency lists or matrices.

- Data structures help in solving real-world problems. 
- Graphs are used to represent social networks, and trees are used to represent file systems.

___

## Operations Performed on Data Structures

- **Create** : involves allocating memory for a data structure and initializing it for use. It defines the data structure's size and format, either statically or dynamically.
- Creating an array of 10 integers, or initializing a linked list with a head pointer set to `NULL`.

- **Delete** : refers to deallocating memory that was previously allocated to a data structure or removing an element from it.

- **Updation** : modifies the value of an existing element in the data structure. It usually requires accessing the element first and then replacing its value.

- **Searching** : involves locating an element in data structure. It may also find the locations of all elements that satisfy certain conditions.

- **Sorting** : is arranging data in a specific order, either in ascending order or in descending order. Sorting makes merging and searching more efficient.
- Sorting an array of integers in ascending order using bubble sort or quicksort.

- **Merging** : combines two or more data structures (usually sorted) into a single data structure while maintaining the sorted order.
- Merging two sorted arrays into a third sorted array.

- **Splitting** : Splitting is a process of partitioning single list to multiple list based on certain condition or size.

- **Traversal** : involves visiting all the nodes in a data structure usually to perform some operation on elements.
- Traversing a linked list to display its elements or traversing a binary tree using in-order traversal.

____

## Time Complexities of Data Structure Operations

Efficiency of Data Structure can be characterized by its time complexity as: 
- **Worst Case**: Maximum time the operation could take.
- **Best Case**: Minimum time required.
- **Average Case**: Expected time over all inputs.

### Array

An array is a collection of elements stored in contiguous memory locations. It allows fast access using an index.

- **Access**: O(1) – Direct access via index.
- **Search**: O(n) – Linear search in an unsorted array, O(log n) if the array is sorted and binary search is used.
- **Insertion**: O(n) – To insert an element at a specific position, all subsequent elements must be shifted.
- **Deletion**: O(n) – Similar to insertion; elements need to be shifted.
- **Traversal**: O(n) – Visiting each element once.

**Best Use Case**: When fast access is needed, and the number of insertions/deletions is low. Arrays offer constant-time access via indexing, making them ideal when data is of fixed size and frequently accessed.

- **Database Tables** : Rows and columns in relational databases can be represented as arrays.

- **Static Lookup Tables** : Storing fixed configuration data or mathematical tables.

- **Multimedia Buffers** : Audio/video buffers in streaming applications.

- **Image Processing** : Images are stored as 2D arrays of pixel values.

---

### Linked List

A linked list is a linear data structure where each element (node) contains data and a pointer to the next (or previous) node.

- **Access**: O(n) – No direct indexing; traversal is required.
- **Search**: O(n) – Linear search through the list.
- **Traversal**: O(n) – Each node must be visited in sequence.

**Insertion**:
- At head: O(1)
- At tail or in middle: O(n)

**Deletion**:
- At head: O(1)
- At tail or middle: O(n)

**Best Use Case**: When frequent insertions and deletions are needed, especially at the beginning. Linked lists allow **efficient insertions/deletions**, especially when data size varies or memory needs to be managed dynamically.

- **Dynamic Memory Allocation** : OS memory management often uses linked lists to track free and used blocks.

- **No Pre-allocation**: Memory is allocated as needed, avoiding memory waste.
 
- **Implementing Undo/Redo Functionality** : In text editors like MS Word or Google Docs.

- **Music/Video Playlists** : Sequential play of media files.

- **Symbol Tables in Compilers** : For managing scopes and variables dynamically.

---

### Stack

A stack is a linear data structure based on the Last In First Out (LIFO) principle.

- **Access**: O(n) – Access to elements other than the top requires traversal.
- **Search**: O(n) – No direct access; linear search needed.
- **Insertion (Push)**: O(1) – At the top.
- **Deletion (Pop)**: O(1) – From the top.
- **Traversal**: O(n) – Accessing each element requires popping or iteration.

**Best Use Case**: When elements are processed in reverse order (e.g., function call stack). Stacks follow the **Last-In-First-Out (LIFO)** principle, perfect for nested operations and reversals.

- **Function Call Management**: The runtime stack stores return addresses and local variables.

- **Expression Evaluation & Conversion**: Evaluating postfix/prefix expressions.

- **Backtracking Algorithms**: Maze solving, puzzle solving (e.g., Sudoku).

- **Undo Operations**: In applications like Photoshop or text editors.

- Reversing strings or data structures. Parentheses matching in Compilers.

- Depth-First Search in Graphs

---

### Queue

A queue is a linear data structure that follows the First In First Out (FIFO) principle.

- **Access**: O(n) – No direct access unless implemented with an array.
- **Search**: O(n) – Linear traversal required.
- **Insertion (Enqueue)**: O(1) – At the rear.
- **Deletion (Dequeue)**: O(1) – From the front.
- **Traversal**: O(n) – Visit all elements in order.

**Best Use Case**: Queues maintain **First-In-First-Out (FIFO)** order, suitable for fair scheduling and sequential processing. Useful in scheduling, task management, and buffer handling. 

- **Job Scheduling in OS**: Tasks are executed in the order they are scheduled.

- **Print Spoolers**: Managing print jobs in the order they are received.

- **Customer Service Systems**: Handling service requests or chat queues.

- **Breadth-First Search (BFS)**: Graph traversal algorithms.

---

### Binary Search Tree (BST)

A binary search tree is a hierarchical structure where the left child is smaller and the right child is greater than the parent node.

**Average Case**:

- **Access/Search**: O(log n)
- **Insertion**: O(log n)
- **Deletion**: O(log n)
- **Traversal**: O(n) – Every node is visited once.

**Worst Case** (unbalanced tree):
- All operations degrade to O(n)

**Best Use Case**: Searching and sorting when the tree is balanced. BSTs allow **efficient search, insertion, and deletion** in average O(log n) time (if balanced).

- **Implementing Dynamic Sets**: In databases or file systems where insertions/deletions are frequent.

- **Autocomplete Systems**: Storing and retrieving words efficiently.

- **Indexing in Databases**: To speed up search operations.

---

### AVL Tree (Self-Balancing BST)

An AVL Tree maintains balance after every insertion or deletion using rotations, ensuring O(log n) height.

- **Access/Search**: O(log n)
- **Insertion**: O(log n)
- **Deletion**: O(log n)
- **Traversal**: O(n)

**Best Use Case**: When sorted data must be maintained with frequent insertions and deletions. AVL Trees maintain **logarithmic height**, ensuring consistently fast operations regardless of input order.

- **Database Indexing**: Where search and update operations are frequent and need to be fast.

- **Memory Managers**: Tracking memory blocks (free and used).

- **Caching Mechanisms**: Prioritize and maintain frequently accessed elements.

---

### Graph (Adjacency List Representation)

A graph consists of a set of vertices and edges. When implemented using an adjacency list, each vertex stores a list of connected vertices.

- **Access**: O(1) per vertex
- **Search**: O(V + E) using BFS or DFS
- **Insertion (add edge)**: O(1)
- **Deletion (remove edge)**: O(1) if using hash maps or O(E) otherwise
- **Traversal**: O(V + E) – BFS or DFS explores each vertex and edge once.

**Best Use Case**: Adjacency lists are **space-efficient** and well-suited for **sparse graphs**, where most nodes are not connected. Network modeling, pathfinding, and relationship graphs.

- **Social Networks**: Representing friendships, followers (Facebook, Instagram).

- **Web Crawlers**: Representing the internet as pages (nodes) and links (edges).

- **Navigation and Routing Systems**: Google Maps uses graphs to find shortest paths.

- **Recommendation Systems**: Product similarity networks.

---

### Graph (Adjacency Matrix Representation)

In this method, a 2D array is used where cell `[i][j]` indicates the presence of an edge between vertex i and j.

- **Access**: O(1) – Direct lookup.
- **Search**: O(V²) – Need to scan matrix rows/columns.
- **Insertion**: O(1)
- **Deletion**: O(1)
- **Traversal**: O(V²) – Even if many entries are empty.

**Best Use Case**: Adjacency matrices provide **O(1) edge access**, ideal for **dense graphs** or when frequent edge lookups are required. Dense graphs where edge presence needs to be quickly checked.

- **Computer Networks**: Representing dense connectivity in LANs or WANs.

- **Game Theory/AI**: Representing state transitions in board games.

- **Routing Algorithms**: For dense networks like airline routes.

