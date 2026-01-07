# DS - Unit-3 Trees Answered

> Trees: Importance of Trees, Basic Tree Concepts and Terminologies: node, path, degree, internal nodes, height and subtree.

### Binary Tree: Binary Trees, Binary Tree Representations, Representing Lists as Binary trees, Minimum nodes, Maximum nodes, Nearly complete binary tree

- Give the properties of binary trees that distinguish them from general trees.

**Answer :**

A **binary tree** is a hierarchical data structure in which each node has **at most two children**, commonly referred to as the **left child** and the **right child**. It is a special case of a **general tree**, where nodes can have any number of children.

Maximum Number of Children:
- In a binary tree, each node can have at most two children.
- In a general tree, a node can have any number of children.

Child Node Order:
- In a binary tree, children are ordered: the distinction between left and right matters.
- In a general tree, children are unordered.

Structure and Use:
- Binary trees are more structured and are widely used in applications like binary search trees, heaps, and expression trees.

____

### With a suitable examples, define the following:
i) Binary tree
ii) Degree of a node
iii) Level of a binary tree
iv) Complete binary tree
v) Nearly complete binary tree.
vi) Height of a tree
vii) Binary Search Tree.
viii) Expression Tree

Explain the Level of a tree with example. In a Binary Tree what is the maximum number of nodes that can be found in level 12.

**Answer :**

A **binary tree** is a hierarchical data structure in which each node has **at most two children**, commonly referred to as the **left child** and the **right child**. It is a special case of a **general tree**, where nodes can have any number of children.

---

Maximum Number of Children:
- In a binary tree, each node can have at most two children.
- In a general tree, a node can have any number of children.

Child Node Order:
- In a binary tree, children are ordered: the distinction between left and right matters.
- In a general tree, children are unordered.

Structure and Use:
- Binary trees are more structured and are widely used in applications like binary search trees, heaps, and expression trees.

---

### i) Binary Tree

A binary tree is a tree data structure where each node has up to two children: a left child and a right child.

```
     A
    / \
   B   C
```

---

### ii) Degree of a Node

The **degree of a node** is the number of children it has.  
Nodes with degree 0 are called **leaf nodes** or **terminal nodes**.

```
      10
     /  \
    5    15
```

- Node `10` has degree 2
- Nodes `5` and `15` have degree 0

The **degree of a tree** is the maximum degree among all its nodes.

---

### iii) Level of a Node in a Binary Tree

The **level** of a node is the number of **edges from the root** to that node.
- The root node is at level 0.
- Each level down increases by 1.

```
        A         → Level 0
       / \
      B   C       → Level 1
     / \   \
    D   E   F     → Level 2
```

- Maximum nodes at level _n_: `2^n`  (when root is level 0)
* At level 12 → `2^12 = 4096 nodes`

- Maximum nodes in a binary tree of height _h_ : `2^(h+1) - 1`
* For height 3 → `2^(3+1) - 1 = 15 nodes`

* In Binary Tree Minimum node at level n is 1
* In Skewed Binary Tree Minimum nodes is `h + 1`
* In Full Binary Tree Minimum Node is `2h + 1` 
* In complete Binary tree Minimum node is `2^h`

____

### iv) Complete Binary Tree

A **complete binary tree** is a binary tree where:
- All levels are completely filled **except possibly the last**, and
- The last level is filled from **left to right**.

```
      1
     / \
    2   3
   / \
  4   5
```

---

### v) Nearly Complete Binary Tree

A **nearly complete binary tree** is almost a complete binary tree but may be missing a few nodes in the **bottom-right part** of the last level. All other levels are fully filled and nodes in the last level are as far **left as possible**.

This structure is often used in **binary heaps**.

---

### vi) Height of a Tree

The **height** of a tree is the **longest path** from the root to any leaf, measured in number of edges.

```
      A
     / \
    B   C
   /
  D
```

- Longest path: A → B → D
- **Height** = 2 (edges)

If counting nodes instead of edges, height would be 3.

---

### vii) Binary Search Tree (BST)

A **Binary Search Tree** is a binary tree where:
- The **left subtree** of a node contains only nodes with **values less than** the node’s value.
- The **right subtree** contains only nodes with **values greater than** the node’s value.

This property allows for **efficient searching, insertion, and deletion** operations.

```
      8
     / \
    3   10
   / \    \
  1   6    14
```

---

### viii) Expression Tree

An **expression tree** is a binary tree used to represent **arithmetic expressions** :
- **Internal nodes** contain operators (`+, -, *, /`)
- **Leaf nodes** contain operands (constants or variables)

Expression: `(a + b) * (c - d)`

**Expression Tree:**

```
       *
      / \
     +   -
    / \ / \
   a  b c  d
```

Expression trees are used in **compilers** and **interpreters** to parse and evaluate expressions.


## Tree Traversals Depth First Traversal (Preorder, Inorder and Postorder), Breadth First Traversal, 


**Tree traversal** is the process of **systematically visiting each node** in a tree exactly once in a specific order. Traversal is essential for processing, searching, or retrieving data from tree structures.

### 1. Depth-First Traversal (DFT)

**Depth-First Traversal (DFT)** is a traversal technique where we explore a tree **as deeply as possible along each branch** before backtracking. It can be implemented using **recursion** or a **stack** (explicit or implicit).

**Steps:**
1. Visit the current node.
2. Traverse the left subtree.
3. Traverse the right subtree.
4. Backtrack when no un-visited nodes remain

There are **three main types** of depth-first traversals in binary trees:

a) Inorder Traversal (Left, Root, Right)
- Visit the left subtree.
- Visit the root node.
- Visit the right subtree.

b) Preorder Traversal (Root, Left, Right)
- Visit the root node.
- Visit the left subtree.
- Visit the right subtree.

c) Postorder Traversal (Left, Right, Root)
- Visit the left subtree.
- Visit the right subtree.
- Visit the root node.

Each traversal visits every node **exactly once**, so the time complexity for all three is : O(n), where n is the number of nodes in the tree.

---

### 2. Breadth-First Traversal (BFT)

**Breadth-First Traversal (BFT)** is also known as **Level Order Traversal**. In this method, nodes are visited **level by level**, starting from the root and moving **left to right** across each level.

**Steps:**

1. Start at the root node.
2. Visit all nodes at the current level before moving to the next level.
3. Use a **queue (FIFO)** to keep track of nodes to be visited.

Example Order (for a tree with root A, and children B and C):

```
A → B → C → ...
```

**Used in:** Finding shortest paths, level-order representation, serialization of trees.



## Write the algorithm for Binary Tree Inorder, Preorder and Postorder traversal.

**Answer :**

Inorder Traversal (Left → Root → Right) :
* Move down the tree toward the **left** until no further left child exists.
- **Visit** the current node.
- Move to the **right child** of the node.
- If no right child, **backtrack** to parent node and continue.

```c
void inorder (treePointer root)
{
	if(root)
	{
		inorder(root->left);
		printf("%d", root->data);
		inorder(root->right);
	}
}
```

____

Preorder Traversal (Root → Left → Right) :
- **Visit** the current node. 
- Traverse the **left subtree** recursively.
- After the left is fully visited, traverse the **right subtree**.

```c
void preorder(treePointer root)
{
	if (root)
	{
		printf("%d ", root->data);
		preorder(root->left);
		preorder(root->right);
	}
}
```

---

Postorder Traversal (Left → Right → Root)
- Traverse the **left subtree** recursively.
- Traverse the **right subtree** recursively.
- After both subtrees are visited, **visit** the current node.

```c
void postorder(treePointer root)
{
	if (root)
	{
		postorder(root->left);
		postorder(root->right);
		printf("%d ", root->data);
	}
}
```

---

### Find the following in the tree given:

i. Balance factor of the tree.      
ii. Show the depth first traversal (preorder, inorder and postorder) of the tree.      
iii. Show the breadth first traversal of the tree.      

```
                           10
                        /      \
                      8         11
                    /              \
                  2                 14
                /   \              /    \
              1      6            13    16
                    / 
	               4   
                 / \
                3   5
```

____

Traverse the given tree using Inorder and Postorder traversals.
```
                        A
                    /       \
                  B           C
               /    \       /    \
             D       E    F      G
               \               /   \
	            H             I     J
```

____

Find the following in the tree given: 
```
                        125
                    /        \
                  15          50
                /   \       /     \
              10     22   35      70
            /  \   /  \  /  \    /    \
           4   12 18  24 31  44 66    90
```
i) Balance factor of the tree.        
ii) Show the depth first traversal (preorder, inorder and postorder) of the tree.       
iii. Show the breadth first traversal of the tree.

____

Find the following in the tree given:
```
                           A
                         /   \
                        B     F
                       /       \
                      C         G
                    /   \      / | \
                   D     E    H  I  J
			                     |
		                         K

```

i) Balance factor of the tree.    
ii) Show the depth first traversal (preorder, inorder and postorder) of the tree.       
iii) Show the breadth first traversal of the tree.

____

### Generate Binary Tree looking into the following tree traversals:

Preorder: ABDGCEHIF
Inorder: DGBAHEICF

**Answer :**

Steps to construct the binary tree:
1. Preorder traversal: The first node in preorder is always the root of the tree. The root will be A.

2. Inorder traversal: In the inorder traversal, all nodes to the left of the root node A (in the inorder sequence) will form the left subtree, and all nodes to the right will form the right subtree.    
    Inorder sequence: DGBAHEICF . The root A is at index 3 in the inorder sequence, so:
	- Left subtree nodes: DGB
	- Right subtree nodes: HEICF
3. Now, we need to continue recursively for both left and right subtrees.

Left subtree of A: 
- From the preorder traversal, after A, the next nodes for the left subtree are B, D, and G.
- Inorder for left subtree: From the inorder traversal, the nodes corresponding to the left subtree are DGB.
    - Root of the left subtree is B (from preorder), so:
        - Left subtree of B: D
        - Right subtree of B: G


Right Subtree of A:
- Preorder for right subtree: From the preorder traversal, after A and its left subtree, the next nodes for the right subtree are C, E, H, I, F.
- Inorder for right subtree: From the inorder traversal, the nodes corresponding to the right subtree are HEICF.
    - Root of the right subtree is C (from preorder), so:
        - Left subtree of C: E and H
        - Right subtree of C: I and F

```
                           A
                        /     \
                      B        C
                    /   \     /   \
                   D     G   E     F
                          /        /
                         H         I
                                    \
                                     K
```


____

Generate binary trees looking into the following tree traversals.
i. Inorder: E A C K F H D B G    Preorder: F A E K C D H G B

ii. Inorder : 2 6 7 1 4 8 3 5 9     Postorder: 7 6 2 8 4 9 5 3 1

i. Preorder: ABDGCEHIF;     Inorder: DGBAHEICF

ii. Postorder: IEJFCGKLHDBA;    Inorder: EICFJBGDKHLA


____

### Construction of Expression Tree.

* Define expression tree. Write the procedure to construct the expression tree from an infix expression.

**Answer :**

An expression tree is a binary tree used to represent arithmetic expressions.
- Leaves are operands (constants or variables).
- Internal nodes are operators (`+`, `-`, `*`, `/`, etc.).

For the infix expression: `(a + b) * (c - d)` The corresponding expression tree is:

```
        *
       / \
      +   -
     / \ / \
    a  b c  d
```

---

To construct an expression tree, Infix expressions are converted to postfix, and then expression tree is constructed from postfix.
- Infix: `(a + b) * (c - d)`
- Postfix: `a b + c d - *`

Stack is used to construct the tree: 
1. Scan the postfix expression from left to right.
2. For each **operand**:  
	* Create a new tree node.  Push it onto the stack.
3. For each **operator**:
	- Pop two nodes from the stack (right and left operands).
	- Create a new node with the operator.
	- Set the popped nodes as the right and left children.
	- Push the new node back onto the stack.
4. After the expression is processed, the stack will contain one element — the **root** of the expression tree.

---

Postfix: `a b + c d - *`

**Step-by-step Tree Construction:**

1. Read `a` → push node(`a`)
2. Read `b` → push node(`b`)
3. Read `+` → pop `b`, `a` → create `+` node with children `a` and `b` → push `+`
4. Read `c` → push node(`c`)
5. Read `d` → push node(`d`)
6. Read `-` → pop `d`, `c` → create `-` node → push `-`
7. Read `*` → pop `-`, `+` → create `*` node → push `*`

Final expression tree:

```
        *
       / \
      +   -
     / \ / \
    a  b c  d
```

---

* Give the algorithms for pre-order and post-order tree traversals. Represent the following expression using binary tree and write the pre-order and Post-order traversals for the tree generated.  

* `A + ( B - C ) * D $ ( E * F )`
* `( a / ( b + c )) + (((d / e) - f) * g)`     
* `( A + B * C ) $ ( ( D + E ) * F )`     
* `( M / ( N + O )) + ((( P / Q ) - R ) * S)`
* `( A + B * C ) $ (( D + E ) * F)`
* `( 5 + 6 * 7 ) $ ( ( 5 + 6 ) * 7 ))`


## Binary Search Tree: Binary Search Trees – Basic Concepts, Operations (Insertion, Deletion, Find the smallest node, Find the largest node, and Find a requested node), Applications,

- Write an algorithm to insert and delete an element in a Binary Search Tree.

- Explain algorithm to delete a node from the Binary Search Tree (BST) with an appropriate example.

- Write algorithms to perform the following operations on a BST: i. Search for a requested node  ii. Add a new node.

- Write the algorithms for the following operations in Binary Search Tree (BST). i) Smallest node in a BST ii) Add node to BST iii) Search an item in a BST

- Write algorithms to find Smallest node and largest node in a Binary Search Tree.

- Write C function to find the maximum element in BST.


**Answer :**

A Binary Search Tree (BST) is a binary tree with  each node has at most two children.
For any node:
- Left subtree contains nodes with values less than the node’s value.
- Right subtree contains nodes with values greater than the node’s value.
- No duplicate values are allowed.

---

**Inserting a Node in BST**

Insertion in a **Binary Search Tree** maintains its fundamental property:
- **Left subtree** contains nodes with values **less than or equal to** the current node.    
- **Right subtree** contains nodes with values **greater than** the current node.

---

Algorithm for Insertion in BST

1. **If the tree is empty**, create a new node and set it as the root.    
2. **If the tree is not empty**, compare the new value with the current node:
    - If the value is **less than or equal to** the current node, go to the **left subtree**.
    - If the value is **greater**, go to the **right subtree**.
        
3. Repeat step 2 until an appropriate **NULL (empty)** position is found.

4. **Insert** the new node at the found position.

---

- **Step 1:** Create a new node (`newNode`) with the given value. Initialize its `left` and `right` pointers to `NULL`.

- **Step 2:** Check if the tree is empty:
    - If **yes**, assign `newNode` as the root.
    - If **no**, start from the root and proceed.

- **Step 3:** Compare the `newNode`'s value with the current node:
    - If `newNode->data` ≤ `node->data`, move to the **left child**.
    - If `newNode->data` > `node->data`, move to the **right child**.

- **Step 4:** Repeat step 3 recursively or iteratively until you reach a `NULL` position.

- **Step 5:** Insert `newNode` at that position as a left or right child, based on comparison.

---

```c
struct Node* insert(struct Node* root, int key) 
{
    if (root == NULL) {
        struct Node* newNode = malloc(sizeof(struct Node));
        newNode->data = key;
        newNode->left = newNode->right = NULL;
        return newNode;
    }

	if (key < root->data)
        root->left = insert(root->left, key);
    
    else if (key > root->data)
        root->right = insert(root->right, key);
    
    return root;
}
```

---

Searching for a Node in BST
- Start from the root.
- If the key matches root → found.
- If key < root → search in left subtree.
- If key > root → search in right subtree.

This process reduces the search space by half at every step → **O(log n)** time complexity for balanced trees.

```
If root is NULL → return NULL (not found)

If key == root->data → return root
If key < root->data → search left
Else → search right
```

```c
struct Node* search(struct Node* root, int key) 
{
    if (root == NULL || root->data == key)
        return root;

	if (key < root->data)
        return search(root->left, key);
    
    return search(root->right, key);
}
```

---

Deleting a node in BST requires maintaining the BST property. There are **three cases**:

1. Node is a leaf → simply remove it.
2. Node has one child → replace it with its child.
3. Node has two children → replace with:
	- Inorder successor (smallest node in right subtree)
	- Then delete the successor recursively.

```
If tree is empty → return NULL

If key < root->data → delete in left subtree

If key > root->data → delete in right subtree

Else:
    a) Node with no child → free node, return NULL
    b) One child → return the non-null child
    c) Two children:
        - Find inorder successor
        - Replace root->data with successor->data
        - Delete successor in right subtree
Return root
```

---

Finding the Smallest Node in BST, the leftmost node contains the smallest value.

```
1. Start at root
2. Traverse left until left == NULL
3. Return current node
```

```c
struct Node* findMin(struct Node* root) 
{
    while (root != NULL && root->left != NULL)
        root = root->left;
    return root;
}
```

---

Finding the Largest Node in BST, rightmost node in a BST holds the largest value.

```
1. Start at root
2. Traverse right until right == NULL
3. Return current node
```

```c
struct Node* findMax(struct Node* root) 
{
    while (root != NULL && root->right != NULL)
        root = root->right;
    return root;
}
```

_____


What is Binary Search Tree? List the applications of Binary Search Tree. Create a binary search tree using the following data entered as a sequential set:
`14, 15, 12, 23, 5, 7, 7, 10, 33, 80, 66` Also perform inorder and preorder traversal for the created tree.


Construct the Binary search for the following set of numbers `14, 17, 11, 7, 53, 4, 13, 12, 8, 60, 19, 16`.  Perform inorder, preorder and postorder traversals of the obtained tree.


Construct the Binary Search Tree (BST) from the following elements  `D A T A S T R U C T U R E A N D A L G O R I T H M S` also write the in-order, pre-order and post-order traversals for the BST generated.


Construct the Binary Search Tree (BST) from the following elements: `D A T A S T R U C T U R E S U S I N G C` also write the in-order, pre-order and post-order traversals for the BST generated.


## Threaded Binary Trees.

* Explain threaded binary trees and their representation with a neat diagram. Also develop function to do the inorder traversal of a threaded binary tree.
* What area threaded tree and its advantage?
* Define and give an example for Threaded Binary tree

**Answer :**

A Threaded Binary Tree is a binary tree in which null pointers (those pointing to child nodes that do not exist) are replaced by pointers called threads to other nodes in the tree. 

In a normal binary tree, each node has two pointers: left and right for each child. If a node does not have a left or right child, those pointers are set to NULL.

In a threaded binary tree, we replace these NULL pointers with threads:
- If a left child of a root is  NULL then replace it with pointer to the node that would be visited before the root in an inorder traversal (Inorder Predecessor of root).
- If a right child of a root is  NULL then replace it with pointer to the node that would be visited after the root in an inorder traversal (Inorder Successor of root).

(Make an inorder traversal of a tree and connect all leaf nodes to its left and right)

This modification allows us to traverse the tree in inorder without needing a stack or recursion, simply by following the left and right threads.


There are two types of threaded binary trees:
1. **Single Threaded Binary Tree**: In this type, only one set of threads is used (either left or right). The **left thread** points to the inorder predecessor, or the **right thread** points to the inorder successor.

2. **Double Threaded Binary Tree**: In this type, both the **left** and **right** pointers are used for threading. The **left thread** points to the inorder predecessor, and the **right thread** points to the inorder successor.


(Proper Diagram needed)

____

To perform the **inorder traversal** of a threaded binary tree, we need to follow the **threads** instead of using recursion or a stack. Here’s how it works:

1. Start from the **leftmost node**.
2. Visit the node.
3. If the node has a right thread, move to the inorder successor using the right thread.
4. If the node has no right child, move to its parent (using the thread in the left pointer if it exists).
5. Repeat the process until all nodes are visited.

