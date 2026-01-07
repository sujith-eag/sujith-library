# DS - Unit-4 AVL and Heap Answered

## Advanced concepts in Trees: AVL Search Trees: Need for AVL Search Trees, Definition, Balancing Trees (L-L Rotation, R-R Rotation, L-R Double Rotation, R-L Double Rotation)-, 

* How to overcome the drawbacks of Binary Search Tree (BST) using AVL tree? Illustrate with an example.

**Answer :**

A Binary Search Tree (BST) is a tree data structure in which each node has at most two children.
Each node has exactly one key and the keys in the tree are distinct.

The keys (if any) in the left subtree are smaller than the key in the root.
Keys (if any) in the right subtree are larger than the key in the root.
The left and right subtrees are also binary sub trees.


Drawbacks of BST:
- **BST can become Unbalanced** : If nodes are inserted in a sorted order (increasing or decreasing), the BST can become unbalanced and degenerate into a linear structure resembling a linked list.
- **Inefficient Operations** : In the worst case scenario, time complexity for search, insert, and deletion becomes O(n) due to unbalanced structure, where n is the number of nodes.

## AVL Tree

An AVL tree is a self-balancing binary search tree, which automatically adjusts itself to ensure that it remains balanced. 

Characteristics of AVL trees:
- **Balance factor** : It ensures that the height of left and right subtrees of any node differ by at most 1 (i.e., the balance factor is -1, 0, or 1). An AVL tree keeps the BST properties while ensuring balance.
- Balance Factor = height(left subtree) - height(right subtree)

- The minimum number of nodes is `n(h) = n(h-1) + n(h-2)+1`

- If the balance factor is violated (i.e., it becomes -2 or 2), the tree performs rotations to restore balance. avoiding the worst-case scenario of a skewed tree.

- **Optimized Search** : Operations such as search, insertion, and deletion maintain a time complexity of **O(log n)** due to the balanced structure.

____

**Inserting nodes into a Binary Search Tree in increasing order:**

For the given sequence : 10, 20, 30, 40, 50, 25.  The tree becomes unbalanced with all nodes skewed to the right, making it inefficient for operations. The height of the tree is O(n), which means searching for a node will take O(n) time in the worst case.

```
          10
            \
            20
              \
              30
             /  \
            25  40
                  \
                  50
```

___

**Inserting Same Nodes into an AVL Tree**

- Insert: 10
```
   10
```

- Insert: 20
```
   10
     \
     20
```

- After inserting 30, the AVL tree detects an imbalance at node 10. The balance factor of 10 becomes -2, which triggers a left rotation at node 10 to restore balance.

After left rotation:
```
     20
    /  \
  10   30
```

- Insert: 40
```
     20
    /  \
  10   30
            \
            40
```

- After inserting 50, the AVL tree detects an imbalance at node 30. The balance factor of 30 becomes -2, which triggers a left rotation at node 30.

After left rotation:
```
     20
    /  \
  10   40
        /  \
      30   50
```

- After inserting 25, the AVL tree detects an imbalance at node 20. The balance factor of 20 becomes 2, which triggers a right left rotation.

```
     20
    /  \
  10   40
        /  \
      30   50
     /
   25
```

After right left rotation:
```
       30
      /  \
    20    40
   /  \     \
 10   25    50

```
Now, the tree is balanced, and the height of the tree is O(log n), ensuring that operations like search, insert, and delete will be efficient.



## Discuss AVL tree and Write code to create AVL tree.

- How you balance an unbalanced AVL trees in the following cases: i. Left of Left(L-L)     ii. Right of Right(R-R) iii. Right of Left(R-L)    iv. Left of Right(L-R) Explain with suitable examples.
- Explain the Rotate Left and Double Rotation Left algorithms used for AVL tree balancing with a suitable example.
- Write algorithms to RotateRight and RotateLeft in an AVL tree.
- Explain the following AVL Tree balancing procedures giving suitable examples: Double Rotation Right and Double Rotation Left.
- Explain the Rotate right and Double Rotation Right algorithms used for AVL Tree balancing with a suitable example

**Answer :**

An AVL Tree is a self-balancing binary search tree (BST) where the height difference (or balance factor) between the left and right subtrees of any node is at most 1 by using rotations. 

`Balance Factor = Height of Left Subtree - Height of Right Subtree`.
For a node to be balanced, its balance factor should be in the range of -1 to +1.

If the balance factor becomes less than -1 or greater than 1 due to an insertion or deletion, the tree becomes unbalanced and must be rebalanced using rotations.

There are four common cases of AVL tree imbalance:
- Left-Left (L-L)
- Right-Right (R-R)
- Left-Right (L-R)
- Right-Left (R-L)

These imbalances in AVL trees are handled using single rotations (left or right) and double rotations (left-right or right-left).

This property ensures that the tree remains balanced, meaning the height of the tree is always O(log n), where n is the number of nodes in the tree. This gives the AVL tree efficient time complexity for operations like search, insert, and delete.

---

**Left-Left (L-L) Case:**

Occurs when a node is inserted into the **left subtree of the left child** of an unbalanced node. (Left child of the left subtree causes the imbalance. 

To fix this, a single right rotation is performed on the root of the subtree.
- Set the left child of the current root as the new root
- Make the right child of new root(20) as the left child of the current root (30)
- Set Current root (30) as the right child of the new root (20).

```
      30
     /   
   20      
  /   
10

After right rotation to node 30:

      20
     /  \
   10    30
```

____

**Right-Right (R-R) Case** :  

Occurs when a node is inserted into the **right subtree of the right child** of an unbalanced node. (Right child of the right subtree causes the imbalance).

To fix this, we perform a single left rotation on the root of the subtree.
- Set the right child of current root as new root. 
- Make the left child of the new root (20) the right child of the current root (10).
- Set the current root (10) as the left child of the new root (20).

```
    10
      \
      20
        \
        30

After left rotation at node 10:

      20
     /  \
   10    30
```

_____

**Right-Left (R-L) Case** : 

Occurs when a node is inserted into the **left subtree of the right child** of an unbalanced node.

To fix this, we perform a double rotation(Right-Left)
- Right rotation on the right child of the root. 
- Left rotation on the unbalanced root.

```
      10
        \
         30
        /
      20

Right Rotation on 30:

      10
        \
        20
          \
          30

Left rotation on 10:

      20
     /  \
   10    30
```

____

**Left-Right (L-R) Case** : 

Occurs when a node is inserted into the **right subtree of the left child** of an unbalanced node.

To fix this, we perform a double rotation(Left-Right)
- Left rotation on the left child of the root. 
- Right rotation on the unbalanced root.

```
      30
     /
   10
     \
     20

Left Rotation on 10:

      30
     /
   20
   /
 10

Right Rotation on 30:

      20
     /  \
   10    30
```



## AVL tree Operations: Insertion, Deletion. 

- Show the AVL tree that results after each of the integer keys  `9, 27, 50, 15, 2, 21, 36` are inserted, in that order, into an initially empty AVL tree.  Clearly show the tree that results after each insertion, and make clear any rotations that must be performed.

- Construct AVL tree for the following data:  `21,26,30,9,4,14,28,18,15,10,2,3,7`

- Construct the AVL tree mentioning the balance factor from the following data  `13, 5, 1, 7, 8, 98, 67, 26, 33, 12, 6, 7, 8.`

- Define AVL tree. Construct the AVL tree mentioning the balance factor from the following data: `14, 6, 1, 7, 8, 99, 68, 26, 33, 12, 6, 7, 8.`

- Construct an AVL tree utilizing the given dataset. Display the balance factors in the resultant tree. Data: `17, 28, 9, 13, 35, 42, 65, 50, 73` After insertion of 20 and 45, update the AVL tree.

- Create an AVL tree using the following data .Show the balance factors in the resulting tree. `24,45, 28, 12,23, 32,14,67`.  Insert 48 and 52 into the tree created.

- Create an AVL tree using the following data. Show the balance factors in the resulting tree. `14 23 7 10 33 56 80 66 70` Insert 44 and 50 into the tree created.


## Heaps – Definition, Heap Maintenance operations: insertion and deletion. Rheapup, Rheapdown algorithms and heap implementation, Applications.

- What are the applications of Heap? Write the algorithm for Reheap UP and Reheap Down operation.
- Discuss algorithms used in Heap construction with a suitable example: i) reheap up    ii) reheap down
- Explain the algorithms to perform following operations with an example: i) Max heap construction ii) Max heap deletion.
- Explain the reheap up and reheap down algorithms used in Heap construction with a suitable example.

**Answer :**

A heap is a special tree-based data structure that satisfies the heap property.  Used primarily for priority queues, heapsort, and efficient selection problems.

For a binary tree to qualify as a heap, it must satisfy two main properties:

**Structuring Property** — Complete Binary Tree (CBT)

A heap must be a Complete Binary Tree:
- All levels of the tree are completely filled, except possibly the last level.
- In the last level, nodes are filled from left to right (with no gaps in between).

**Ordering Property** — Heap Condition which defines the type of heap:

Min-Heap:
- The value of each parent node is less than or equal to the value of its children.
- The smallest element is always at the root.

Max-Heap:
- The value of each parent node is greater than or equal to the value of its children.
- The largest element is always at the root.

___

- A Max Tree is a binary tree where every node’s key is not smaller than the keys of its children.

- A Min Tree is a binary tree where every node’s key is not larger than the keys of its children.

- A Max Heap is a Complete Binary Tree that also satisfies the Max Tree ordering property.

- A Min Heap is a Complete Binary Tree that also satisfies the Min Tree ordering property.

Heaps are typically implemented using **arrays** for efficient indexing : For a node at index `i`:
- Left child: `2i + 1`
- Right child: `2i + 2`
- Parent: `(i - 1) / 2`



## Heap Construction Algorithms

Heap Construction Algorithms **Reheap Up** and **Reheap Down** operations maintain the heap structure:
- Reheap Up restores the heap property after insertion.
- Reheap Down restores the heap property after deletion.

Both operations ensure the heap property in O(log n) time, which makes heaps highly efficient for:
- Priority Queues
- Heap Sort
- Graph Algorithms (e.g., Dijkstra’s Algorithm)



## Reheap Up Operations 

When a new element is inserted into the heap, it's placed at the end of the array (to maintain the Complete Binary Tree structure).

1. Insert the element at the last position of the heap.
2. Compare the new node with its parent.
3. If it violates the heap property (e.g., greater than parent in a max-heap), swap the two.
4. Repeat this process until:   
- The element reaches the root, or        
- The parent node satisfies the heap property.

This process ensures the heap maintains its ordering from **leaf to root**.

Follow the path from the newly added node upward, checking at each step if the parent is smaller (in max-heap). Stop when parent is larger or root is reached.

## Reheap Down Operations

When deleting the root node from a heap:

1. Replace the root with the last element in the heap.
2. Compare the new root with its children.
3. If the root is smaller than the larger child (in a max-heap), swap them.
4. Repeat this process down the tree until:
- The node reaches a leaf, or
- The node is larger than both its children (in max-heap).

This process ensures the heap maintains its ordering from **root to leaf**.

____

Since the heap is a Complete Binary Tree, with `n` elements, it has a height of `log(n)`.  
Both `Reheap Up` and `Reheap Down` operations perform at most `log(n)` comparisons/swaps.

- Insertion (Reheap Up): O(log n)

- Deletion (Reheap Down): O(log n)

____

### Common Applications of Heap:

- **Priority Queues** – Efficient for accessing the highest or lowest priority element.

- **Job Scheduling Systems** – For scheduling jobs/tasks based on priority. OS process scheduling, network packet scheduling.

- **Heap Sort** – comparison-based, in-place sorting algorithm that uses min or max heap to sort elements.

- **Dijkstra’s Algorithm** – For finding the shortest path in graphs.

- **Median Maintenance in data streams** – Heaps are used in real-time to keep track of medians of dynamic stream of numbers.

- **Data Stream Management** – For maintaining top-k elements in a stream of data efficiently. (Trending hashtags, top-scoring users in games, real-time recommendation systems)

- **Database Indexing** - Helps optimize queries using heap-structured indices.

- **Memory Management** - used in languages like Java and Python for dynamic memory allocation and garbage collection.

- **Kth Largest/Smallest Element** - Frequently used in competitive programming and real-time data queries.

- **AI/ML Search Algorithms** - A algorithm for pathfinding, Huffman encoding for data compression.


## Heap Sort

Heap Sort is a comparison-based, in-place sorting algorithm that uses a binary heap to sort elements efficiently.

- Construct a max-heap from the input data.

- Repeatedly remove the root (maximum element) and move it to the end of the array.

- Reheapify the remaining elements to maintain the heap structure.

____

- Define Heap? Write Heap sort Algorithm and sort the below tree.
```
                    27
                  /    \
                14      35
               /  \    /  \
             10   19  31   42
```

____

- Show construction of a heap from the following data  `30, 4, 12, 9, 19, 50, 65, 60, 20, 17`. Insert 75 into the Heap and reheapify.

- Show construction of a heap from the following data read from the keyboard: `42, 23, 74, 11, 65, 58, 94`. Insert 36 into the heap and reheapify

- Show the construction of max-heap to sort the following numbers by mentioning the steps clearly: `82, 90, 10, 12, 15, 77, 55, 23` . Delete 90 from the heap and heapify.

- Show construction of a heap from the following data read from the keyboard: `20, 35, 9, 26, 49, 78, 2`. Insert 46 into the heap and reheapify

- Show construction of a heap from the following data read from the keyboard: `21, 37, 10, 26, 50, 76, 5` Insert 45 into the heap and reheapify.

- Construction the heap tree from the following data : `32, 8, 21, 18, 39, 55, 75, 80, 40, 99.` Design an algorithm for the same.
