# DS - Unit-5 B-Tree and Graph Answered

## Multi-way trees: Introduction, Definition, features. B-trees – Introduction, Definition and features, 

- Illustrate the properties of m-way tree with an example.
- Explain simplified B-tree with an example.
- Define and explain with example for the following: i. m-way tree   ii. B-tree   iii. 2-3 tree    iv. 2-3-4 tree

**Answer :**

M-way tree is a tree data structure where each node can have at most **m** children. It is a generalization of a binary tree where each node can have more than two children and nodes can store multiple keys. 

The number **m** refers to the maximum number of children that a node can have.
- Each node in the tree can have up to m children.
- The root node may have fewer than m children, but non-root nodes must have between ⌈m/2⌉ and m children.
- The tree is balanced, meaning the depth of all leaf nodes is the same.

For a 3-way tree (a ternary tree), each node can have at most 3 children.

```
        A
     /  |  \
    B   C   D
   / \   |
  E   F  G
```


## B-tree

A B-tree is a self-balancing search tree data structure that maintains sorted data and allows for efficient insertion, deletion, and searching operations.

A **B-tree of order _m_** is an **m-way search tree** that satisfies the following properties:

- All leaves are at the same level (i.e., the tree is height-balanced).

- About Number of Nodes :
	- The root node must have at least two children.
	- Each internal node (except the root) must have at least `⌈m/2⌉` children.
	- Each node can have at most _m_ children.

- About Number of Keys :
	- Each node can contain a maximum of `m − 1` keys.
	- Each node (except root) must contain at least (`[m-1] / 2`) keys.
	- Root contains at least 1 key.

---

B-Tree of Order 3 (m = 3)
- Each node can store up to 2 keys.  (3-1 = 2)
- At least `[3-1] / 2 = 1` key per node
- Each node can have up to 3 children.
- Internal nodes must have at least ⌈3/2⌉ = 2 nodes.

```
          [10, 20]
         /   |   \
      [5]  [15] [25, 30]
```



## Special Cases of B-Trees

A B-tree of order 3 is often referred to as a 2-3 Tree: 
- Internal nodes can have 2 or 3 children, hence keys per node can be 1 or 2.

A B-tree of order 4 is called a 2-3-4 Tree: 
- Internal nodes can have 2, 3, or 4 children, i.e., 1 to 3 keys per node.

A B-tree of order 5 is not referred to as a 2-3-4-5 tree : It allows up to 4 keys per node, i.e., up to 5 children.

- The minimum degree is ⌈5/2⌉ = 3, meaning:
    - Every internal node (except the root) must have at least 3 children.
    - Therefore, internal nodes cannot have only 2 children (i.e., a node with 1 key is not allowed for internal nodes).

- Because of this restriction, a B-tree of order 5 cannot have internal nodes with degrees 2, so it is not called a 2-3-4-5 Tree.

- Internal nodes can only have **3, 4, or 5 children**, which means they hold **2, 3, or 4 keys** respectively.



## Key Characteristics

- Balanced Tree: All leaf nodes are at the same depth, ensuring balanced structure.
- Sorted Order: Keys are maintained in sorted order.
- Efficient Operations:
    - Search: O(log n)
    - Insert: O(log n)
    - Delete: O(log n)
	
The logarithmic time complexity ensures that operations remain fast even for very large data sets, especially when minimizing disk reads.

B-Trees are ideal for storage systems that read and write large blocks of data. They're widely used in:

- Databases (e.g., MySQL, PostgreSQL)	
- File Systems (e.g., NTFS, HFS+, ext4)
- Indexing structures for large datasets



## 2-3 tree:

  - 2-node: A node that has 1 key and 2 children.
  - 3-node: A node that has 2 keys and 3 children.

```
           [10, 20]
         /     |     \
    [5]      [15]    [25, 30]
```



## 2-3-4 Tree

- 2-node: A node with 1 key and 2 children.
- 3-node: A node with 2 keys and 3 children.
- 4-node: A node with 3 keys and 4 children.

It is essentially a B-tree with a maximum of 4 children per node.

```
           [10, 20, 30]
         /    |    |    \
   [5]   [15]  [25]   [35, 40]
```

____

- Draw complete 2-3 and 2-3-4 trees.

- Calculate the maximum number of data entries in a:  i) 3-way tree of height 3   ii) m-way tree of height h  iii) B-Tree of order 5 with a height of h.



## Construction of B-trees of order 3, order 4 and order 5, Implementation, Simplified B-Trees: 2-3 tree, 2-3-4 tree.

- List the properties of B-tree. Explain the insertion operation in B-tree using essential data of your choice.
- Construct B-tree of order 4 from the following elements given as follows: `1, 6, 8, 2, 9, 12, 15, 7, 18, 3, 4, 20.`
- Construct a B-tree of order 4 created by inserting the following data arriving in sequence: `92, 24, 6, 7, 11, 8, 22, 4, 5, 16, 19, 20, 78.`
- Draw the B-tree of order 3 created by inserting the following data arriving in sequence: `92, 24, 6, 7, 11, 8, 22, 4, 5, 16, 19, 20, 78`
- Draw a B-tree of order 5 for the following set of elements arriving in the sequence:  `76, 21, 14, 11,97, 85, 74, 63, 45, 42, 57, 20, 16, 19, 52, 30, 21`

____

- Explain the characteristics of 2-3 trees. Formulate the procedure to design a 2-3 tree for the given input:  `10, 6, 8, 5, 1, 4, 7.`

- Create a 2-3 tree of order 3 for the following data arriving in sequence. `11, 12, 8, 20, 25, 16, 12, 26, 17, 27, 52, 16, 48, 68, 3, 26, 29, 53, 95, 55.`


## Graphs: Basic concepts, Terminologies: vertices, edge, cycle, loop, graph vs tree, operations: insert vertex delete vertex, insert edge, delete edge. 

- Define the following with reference to Graph and an example for each: Path, Cycle, Loop, Degree, Weighted Graph, Out-Degree and In-Degree.

**Answer :**

A graph is a non-linear data structure that consists of a set of vertices (also called nodes) and a set of edges (connections between the nodes).

A graph **G** is defined as an ordered pair **G = (V, E)**, where:
- **V** is the set of vertices
- **E** is the set of edges that connect pairs of vertices

A **path** is a sequence of vertices connected by edges.  

A **cycle** is a path where the first and last vertices are the same, and no other vertex is repeated.  

A **loop** is an edge that connects a vertex to itself.

A **weighted graph** is a graph where each edge has a weight or cost associated with it.

In an **undirected graph**, the **degree** of a vertex is the number of edges connected to it.

In a **directed graph**:
- The **in-degree** of a vertex is the number of edges coming into it (where the vertex is the head).
- The **out-degree** of a vertex is the number of edges going out from it (where the vertex is the tail).

___

**Path**:  in a graph is a sequence of vertices such that each consecutive pair of vertices is connected by an edge. A path does not necessarily need to be a simple path, meaning that it can have repeated vertices or edges.

```
	A
   / \
  B   C
 /     \
D       E
```
A path from A to E could be A → C → E.

____

**Cycle**: is a path in which the first vertex is the same as the last vertex and no other vertex repeats. A graph that contains a cycle is called a cyclic graph; otherwise, it’s an acyclic graph.

```
	A
   / \
  B   C
 /     \
 D --- E
```

The cycle is D → E → C → A → B → D.

___
**Loop**: (or self-loop) is an edge that connects a vertex to itself. The vertex is both the start and the end point of the edge. where the edge connects A → A

___

**Degree**: of a vertex is the number of edges incident to it.
- In-Degree: The number of incoming edges to a vertex (in directed graphs).
- Out-Degree: The number of outgoing edges from a vertex (in directed graphs).
- In an undirected graph, the degree is the number of edges connected to the vertex.

```
	A
   / \
  B   C
 /     \
D       E
```
- The degree of A is 2 (edges to B and C).
- The degree of B is 2 (edges to A and D).
- The degree of C is 2 (edges to A and E).

____

**Weighted Graph**: is a graph where each edge has a weight (or cost) associated with it. The weight typically represents some quantity such as distance, cost, or time, depending on the context of the graph.

```
	A
   / \
 5/   \3
  B---C
	 2
```

The weight of the edge from A to B is 5, the weight from A to C is 3, and the weight from C to B is 2.

___

**Out-Degree**: of a vertex in a directed graph is the number of edges leaving the vertex. This only applies to directed graphs, where edges have a direction.
```
A → B → C
	↑
	D
```

- The out-degree of A is 1 (since it has one outgoing edge to B).
- The out-degree of B is 2 (since it has outgoing edges to C and D).
- The out-degree of C is 0 (no outgoing edges).

___

**In-Degree**: of a vertex in a directed graph is the number of edges entering the vertex. This only applies to directed graphs, where edges have a direction.
```
   A → B → C
		↑
		D
```

- The in-degree of A is 0 (no incoming edges).
- The in-degree of B is 1 (one incoming edge from A).
- The in-degree of C is 1 (one incoming edge from B).
- The in-degree of D is 1 (one incoming edge from B).
____

* Discuss the steps to add and delete a vertex in the graph with suitable examples.



## Graph traversals: Breadth-First- Search (BFS) Traversal, Depth-First- Search (DFS) Traversal, 

* Write an algorithm for Breadth-first Traversal.
* Discuss Breadth-first traversal of a graph with suitable example and algorithm

**Answer :**

Given an undirected graph G = (V, E) and a vertex, v in V(G).

To visit all the nodes vertices in G that are reachable from v, that is all vertices connected to v there are two ways.

BFS resambles preorder tree traversal and DFS resambles level order tree traversal


____

Breadth-First Search (BFS) is an algorithm for traversing or searching tree or graph data structures. BFS starts at the root node (or any arbitrary node in the case of a graph) and explores all the neighboring nodes at the present depth level before moving on to nodes at the next depth level. 

BFS uses a **queue** to keep track of the nodes to be explored.

BFS is an essential graph traversal algorithm that explores nodes layer by layer, ensuring that all nodes at the current depth level are processed before moving on to the next level. 

It is widely used for applications like finding the shortest path in unweighted graphs, web crawling, and social network analysis.

1. Start with the starting node: We enqueue the starting node and mark it as visited.
2. Process each node: We dequeue a node, print or store it, and then enqueue all of its unvisited neighbors.
3. Repeat until all nodes are visited: The algorithm processes nodes level by level. First, it processes all nodes at the current level, then moves on to the next level, and so on.

____

Steps for BFS:
1. Initialization:
    - Mark all vertices as not visited.
    - Create an empty queue.
    - Enqueue the starting vertex (root node) into the queue.
    - Mark the starting vertex as visited.

2. BFS:    
    - While the queue is not empty:
        - Dequeue a vertex from the queue.
        - Visit and process that vertex (usually print or store the result).
        - Enqueue all unvisited adjacent vertices of the dequeued vertex.
        - Mark those adjacent vertices as visited.

___

Let's consider the following graph represented using an adjacency list:

```
    A
   / \
  B   C
 / \   \
D   E   F
```

Adjacency List representation:
```
A: [B, C]
B: [A, D, E]
C: [A, F]
D: [B]
E: [B]
F: [C]
```


BFS Graph Traversal (Step-by-step Example)
1. Start at A → Visit A → Enqueue B, C.
2. Move to B → Visit B → Enqueue D, E.
3. Move to C → Visit C → Enqueue F.
4. Move to D → Visit D (no new nodes to enqueue).
5. Move to E → Visit E (no new nodes to enqueue).
6. Move to F → Visit F (no new nodes to enqueue).
7. All nodes are visited, so the traversal ends.

BFS Output (Order of Visit):
```
A B C D E F
```

____

BFS Traversal Process (Starting from A):

1. Start at node A:
    - Mark A as visited and enqueue it.
    - Queue: `[A]`

2. Dequeue A and process it:    
    - A's neighbors are B and C.
    - Mark B and C as visited and enqueue them.
    - Queue: `[B, C]`

3. Dequeue B and process it:    
    - B's neighbors are A, D, and E.
    - A is already visited, so enqueue D and E.
    - Queue: `[C, D, E]`

4. Dequeue C and process it:    
    - C's neighbors are A and F.
    - A is already visited, so enqueue F.
    - Queue: `[D, E, F]`

5. Dequeue D and process it:    
    - D's neighbor is B, which is already visited.
    - Queue: `[E, F]`

6. Dequeue E and process it:    
    - E's neighbor is B, which is already visited.
    - Queue: `[F]`

7. Dequeue F and process it:    
    - F's neighbor is C, which is already visited.
    - Queue: `[]` (empty, traversal complete)


### **BFS Pseudocode**

```
BFS(G, start_vertex):
1. Create a queue Q
2. Mark start_vertex as visited
3. Enqueue start_vertex into Q

4. While Q is not empty:
    a. Dequeue a vertex v from Q
    b. Visit and process vertex v (e.g., print v)
    c. For each neighbor u of vertex v:
        i. If u is not visited:
            - Mark u as visited
            - Enqueue u into Q
```

```python
BFS(graph, start):
    # Create a queue to store the nodes
    queue = []
    
    # Create a set to track visited nodes
    visited = set()
    
    # Enqueue the start node and mark it as visited
    queue.append(start)
    visited.add(start)
    
    while queue:
        # Dequeue a vertex from the queue
        node = queue.pop(0)
        
        # Process the current node (here, we print it)
        print(node, end=" ")
        
        # Enqueue all unvisited adjacent nodes of the current node
        for neighbor in graph[node]:
            if neighbor not in visited:
                visited.add(neighbor)
                queue.append(neighbor)
```



## Depth First Traversal 

* Write the algorithm for depth first traversal of a graph. Explain the process of traversal with suitable graph data structure.
* Discuss Depth-first traversal of a Graph with an example.
* Explain Depth-first traversal of a graph with the help of an algorithm. Give the Depth-first traversal for the following graph starting from vertex 12.
```
5      12
	   |
	23
   |
25		3

5 connects 12 and 25
3 connects 12 and 25
23 connects 12 and 25
```

* Explain Depth-first traversal of a graph with the help of an algorithm. Give the Depth-first traversal for the following graph starting from vertex A.
```
Graph of hexagonal and sqaure shape
```

**Answer :**

The Depth First Search (DFS) is an algorithm for traversing or searching tree or graph data structures. Starting from a root node, the algorithm explores as far as possible along each branch before backtracking  and exploring alternate paths. It uses a stack (or recursion) to remember the nodes to visit next.

DFS is a useful algorithm for exploring all nodes of a graph, often used in scenarios like searching, topological sorting, and pathfinding.


General algorithm for Depth First Traversal of a graph:
1. Initialization:
    - Mark all vertices as not visited.
    - Create a stack (or use recursion).
2. DFS (starting from a vertex):
    - Push the starting vertex onto the stack.
    - While the stack is not empty:
        - Pop the top vertex from the stack.
        - If the vertex has not been visited, mark it as visited and print it (or store the result).
        - Push all its unvisited adjacent vertices onto the stack.

Process of Traversal with a simple undirected graph:

```
    A
   / \
  B   C
 / \
D   E
```

The adjacency list representation of the graph is:

```
A: [B, C]
B: [A, D, E]
C: [A]
D: [B]
E: [B]
```

Let’s say we are performing a DFS traversal starting at **A** on the graph above:
1. Start at A → Visit A → Push B, C.
2. Move to B → Visit B → Push D, E.
3. Move to D → Visit D (No neighbors left).
4. Backtrack to B → Move to E → Visit E (No neighbors left).
5. Backtrack to A → Move to C → Visit C (No neighbors left).
6. All nodes are visited, so the traversal ends.

_____

1. Starting at A:
    - Visit A and mark it as visited.
    - Push A’s neighbors (B and C) onto the stack.

2. Move to B (since it was pushed first):    
    - Visit B and mark it as visited.
    - Push B’s neighbors (A, D, E) onto the stack. 
    - A is already visited, so only push D and E.

3. Move to D (since it was pushed after B’s neighbors):
    - Visit D and mark it as visited.
    - D has no unvisited neighbors, so we backtrack.

4. Move to E
    - Visit E and mark it as visited.
    - E has no unvisited neighbors, so we backtrack.

5. Backtrack to A and move to C:    
    - Visit C and mark it as visited.
    - C has no unvisited neighbors.

6. DFS completes as all nodes are visited.    

- Output: `A B D E C`

```python
DFS(graph, start):
    # Initialize visited set
    visited = set()
    
    # Helper function for DFS using stack
    def dfs_util(v):
        # Mark the current node as visited
        visited.add(v)
        print(v, end=" ")  # Or store the result
        
        # Recur for all the vertices adjacent to this vertex
        for neighbor in graph[v]:
            if neighbor not in visited:
                dfs_util(neighbor)
                
    # Call DFS from the starting vertex
    dfs_util(start)
```

Alternatively, DFS can be implemented iteratively using a stack:
```python
DFS(graph, start):
    # Initialize visited set
    visited = set()
    
    # Stack for DFS
    stack = [start]
    
    while stack:
        # Pop the top element from the stack
        node = stack.pop()
        
        # If the node has not been visited, mark it as visited
        if node not in visited:
            visited.add(node)
            print(node, end=" ")  # Or store the result
        
        # Push all unvisited neighbors of the node onto the stack
        for neighbor in reversed(graph[node]):  # Reverse to visit in correct order
            if neighbor not in visited:
                stack.append(neighbor)
```



## Storage structures (Adjacency Matrix and Adjacency List), graph algorithms.

* Explain how Graph can be represented using a Adjacency Matrix and Adjacency List with suitable example.
* Describe the graph storage structures adjacency matrix and adjacency list with example. Give the comparisons between them.
* Differentiate the following graph storage structures using suitable example. i) Adjacency Matrix ii) Adjacency List.
* Explain the two common structures used to store graphs with examples.
* Describe the two types of graph storage structures with suitable examples.
* Explain different graph storage structure with example.

**Answer :**

A graph can be represented using various data structures, the two most common being the Adjacency Matrix and the Adjacency List. 

Let G = (V, E) be a graph with n vertices, n>= 1
  
The Adjacency Matrix Representation of G is a 2D array of size n×n. The matrix entry 
- `a[i][j]` = **1** (or the weight of the edge) iff the edge (i, j) is in E(G) (there is an edge from node `i` to node `j`.)
- `a[i][j]`= **0** if there is no edge from node `i` to node `j`.

To answer how many edges are there in a graph or if G is connected, Adjacency matrix will require at least `O(n^2)` time, as `n^2 - n` entries of the matrix have to be examined (n diagonal entries are all zeros ) ........

Consider a simple undirected graph with 4 nodes:
```
    1 -- 2
    |    |
    3 -- 4
```

The adjacency matrix for this graph would look like this:
```
    1   2   3   4
1   0   1   1   0
2   1   0   0   1
3   1   0   0   1
4   0   1   1   0
```


Adjacency List Representation : is an array of lists. Each index represents a node, and the list at each index contains the nodes that are connected to that node.

For the same graph, the adjacency list would look like this:
```
1: [2, 3]
2: [1, 4]
3: [1, 4]
4: [2, 3]
```

Adjacency Matrix :
- Space Complexity: `O(n^2)` where n is the number of nodes (this can be inefficient for sparse graphs). Suitable for dense graphs where most of the possible edges exist.
- Advantages: Fast edge lookup: O(1). Simple to implement.
- Disadvantages: Inefficient space usage for sparse graphs. Difficult to iterate through all edges.

Adjacency List :
- Space Complexity : O(n + e), where n is the number of nodes and e is the number of edges (more space-efficient for sparse graphs). Suitable for sparse graphs where few edges exist relative to the number of nodes.
- Advantages: More space-efficient for sparse graphs. Efficient traversal of all edges.
- Disadvantages: Edge lookup is slower than the adjacency matrix: O(n)O(n) in the worst case.

____

Adjacency Matrix : A graph with 5 nodes, where most of the nodes are connected, such as a fully connected network.

```
    1   2   3   4   5
1   0   1   1   1   1
2   1   0   1   1   1
3   1   1   0   1   1
4   1   1   1   0   1
5   1   1   1   1   0
```

Adjacency List : A graph with 5 nodes, where only a few nodes are connected:
```
1: [2, 3]
2: [1, 4]
3: [1, 5]
4: [2]
5: [3]
```

____

For a graph with 3 nodes:
```
   1 --- 2
    \   /
     \ /
      3
```

Adjacency Matrix:
```
    1   2   3
1   0   1   1
2   1   0   1
3   1   1   0
```

Adjacency List :
```
1: [2, 3]
2: [1, 3]
3: [1, 2]
```

