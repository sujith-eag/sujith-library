# N Queens

* N-Queens Problem (LeetCode 51)
* N-Queens II (LeetCode 52)
## N-Queens Problem (LeetCode 51)

The N-Queens puzzle is the challenge of placing N chess queens on an N×N chessboard so that no two queens threaten each other. This means no two queens can share the same row, column, or diagonal.

### Strategy: Backtracking

**Backtracking** is the ideal algorithm for this problem. It's a technique for solving problems recursively by trying to build a solution incrementally, one piece at a time, and removing those solutions that fail to satisfy the constraints of the problem at any point in time.

The general process is:

1. Try placing a queen in the next available row.
    
2. Iterate through each column in that row.
    
3. If a square is safe, place a queen and recursively move to the next row.
    
4. If the recursion successfully places all queens, we have found a solution.
    
5. If the recursion fails (hits a dead end), we "backtrack" by removing the queen and trying the next column in the current row.
    
____

### Board Representation and Attack Detection

An efficient way to track which squares are under attack is crucial for performance.

#### Initial Idea: O(n²) Space

A straightforward approach is to use an N×N grid, let's call it `attack`, where `attack[i][j]` indicates if the square `(i, j)` is under attack.

- **Problem**: When we backtrack and remove a queen, we need to know which squares to reset to "not attacked." If multiple queens attack the same square, we can't simply reset it.
    
- **Refinement**: We could store which queen is attacking which square (`attack[i][j] = k` means queen `k` attacks it). However, this still requires O(n²) space, and we can do better.
    
### The O(n) Space Optimization

A key insight is that all squares on a given diagonal share a mathematical property.

- **Decreasing Diagonals (Top-Left to Bottom-Right)**: For any square `(i, j)` on a decreasing diagonal, the value of `(column - row)` is constant.
    
- **Increasing Diagonals (Bottom-Left to Top-Right)**: For any square `(i, j)` on an increasing diagonal, the value of `(column + row)` is constant.
    
This allows us to track all attacked rows, columns, and diagonals using just four 1D arrays (or hash maps/sets), reducing our space complexity to O(n). To check if a square `(i, j)` is safe, we only need to verify if its corresponding row, column, and two diagonals are free.

**Data Structures:**

- `board['queen'][i] = j`: Stores the position of the queen in row `i` at column `j`.
    
- `board['row'][i] = 1`: Indicates row `i` is attacked.
    
- `board['col'][j] = 1`: Indicates column `j` is attacked.
    
- `board['nwtose'][j-i] = 1`: Indicates the decreasing diagonal is attacked.
    
- `board['swtone'][j+i] = 1`: Indicates the increasing diagonal is attacked.
    
## Implementation Journey

Here is the evolution of the code, from finding a single solution to a class-based implementation for LeetCode.

### Part 1: Code to Find a Single Solution

This script implements the backtracking algorithm to find and print the first valid solution it encounters.

```python
def initialize(board, n):
    for key in ['queen', 'row', 'col', 'nwtose', 'swtone']:
        board[key] = {}
    for i in range(n):
        board['queen'][i] = -1
        board['row'][i] = 0
        board['col'][i] = 0
    for i in range(-(n-1), n):
        board['nwtose'][i] = 0
    for i in range(0, 2*(n-1) + 1):
        board['swtone'][i] = 0

def placequeen(i, board):
    n = len(board['queen'])
    
    for j in range(n):
        if free(i, j, board):
            addqueen(i, j, board)
            if i == n - 1:
                return True
            else:
                extendsoln = placequeen(i + 1, board)
                if extendsoln:
                    return True
                else:
                    undoqueen(i, j, board)
    return False

def free(i, j, board):
    return (board['row'][i] == 0 and
            board['col'][j] == 0 and 
            board['nwtose'][j - i] == 0 and 
            board['swtone'][j + i] == 0)

def addqueen(i, j, board):
    board['queen'][i] = j
    board['row'][i] = 1
    board['col'][j] = 1
    board['nwtose'][j - i] = 1
    board['swtone'][j + i] = 1

def undoqueen(i, j, board):
    board['queen'][i] = -1
    board['row'][i] = 0
    board['col'][j] = 0
    board['nwtose'][j - i] = 0
    board['swtone'][j + i] = 0

def printboard(board):
    n = len(board['queen'])
    board_matrix = [['.'] * n for _ in range(n)]
    for i in range(n):
        j = board['queen'][i]
        if j != -1:
            board_matrix[i][j] = 'Q'

    for row in board_matrix:
        print(' '.join(row))

board = {}
n = int(input("How many queens? "))
initialize(board, n)

if placequeen(0, board):
    printboard(board)
else:
    print("No solution exists.")
```

### Code to Find All Solutions

To find all solutions, the `placequeen` function is modified to not stop after finding the first solution. Instead, it continues searching and stores every valid board configuration it finds.

```python
class Solution(object):
    def solveNQueens(self, n):
        board = {}
        solutions = []
        self.initialize(n, board)
        self.placequeen(0, board, solutions)
        return solutions

    def initialize(self, n, board):

        for key in ["q", "c", "r", "dd", "id"]:
            board[key] = {}

        for i in range(n):
            board["q"][i] = -1
            board["r"][i] = 0
            board["c"][i] = 0

        for i in range(-(n - 1), n):
            board["dd"][i] = 0

        for i in range(0, 2 * (n - 1) + 1):
            board["id"][i] = 0

    def addqueen(self, i, j, board):
        board["q"][i] = j
        board["r"][i] = 1
        board["c"][j] = 1
        board["dd"][j - i] = 1
        board["id"][j + i] = 1

    def placequeen(self, i, board, solutions):
        n = len(board["q"])
        if i == n:
            solutions.append(self.board_to_string(board))
            return

        for j in range(n):
            if self.freespace(i, j, board):
                self.addqueen(i, j, board)
                self.placequeen(i + 1, board, solutions)
                self.removequeen(i, j, board)

    def freespace(self, i, j, board):
        return (
            board["r"][i] == 0
            and board["c"][j] == 0
            and board["dd"][j - i] == 0
            and board["id"][j + i] == 0
        )

    def removequeen(self, i, j, board):
        board["q"][i] = -1
        board["r"][i] = 0
        board["c"][j] = 0
        board["dd"][j - i] = 0
        board["id"][j + i] = 0

    def board_to_string(self, board):
        n = len(board["q"])
        matrix = [["."] * n for _ in range(n)]

        for i in range(n):
            j = board["q"][i]
            if j != -1:
                matrix[i][j] = "Q"
        return ["".join(row) for row in matrix]
```

---

### An Alternative Optimized Solution

This highly efficient LeetCode solution uses sets for O(1) lookups and removals, making the code more concise and often faster.

```python
from typing import List

class Solution:
    def solveNQueens(self, n: int) -> List[List[str]]:
        # Sets to keep track of columns and diagonals where queens are placed
        columns = set()
        posDiagonal = set()  # Positive slope diagonals (r + c)
        negDiagonal = set()  # Negative slope diagonals (r - c)
        
        # List to store all the valid solutions
        res = []
        
        # Initialize the board with empty cells
        board = [['.'] * n for _ in range(n)]
        
        def back(r):
            if r == n:  # If all queens are placed
                # Add the current board configuration to results
                res.append([''.join(row) for row in board])
                return
            
            for c in range(n):
                # Skip column if it is already occupied or the diagonals are attacked
                if c in columns or (r + c) in posDiagonal or (r - c) in negDiagonal:
                    continue
                
                # Place the queen
                columns.add(c)
                posDiagonal.add(r + c)
                negDiagonal.add(r - c)
                board[r][c] = 'Q'
                
                # Recur to place queens in the next row
                back(r + 1)
                
                # Remove the queen and backtrack
                columns.remove(c)
                posDiagonal.remove(r + c)
                negDiagonal.remove(r - c)
                board[r][c] = '.'
        
        # Start the backtracking from the first row
        back(0)
        
        return res
```

### Explanation of the Optimized Solution

- **Initialization**: Three sets (`columns`, `posDiagonal`, `negDiagonal`) are used to track occupied columns and diagonals. A 2D list `board` represents the chessboard.
    
- **Backtracking Function (`back`)**:
    
    - **Base Case**: When the row `r` equals `n`, it means a queen has been successfully placed in every row. The current board state is a valid solution and is added to the results list `res`.
        
    - **Placing Queens**: The function iterates through each column `c` for the current row `r`. It checks in O(1) time if the column or diagonals are already occupied by checking for membership in the sets.
        
    - **Recursive Call**: If the position `(r, c)` is safe, the queen is placed. The corresponding column and diagonal sets are updated, a 'Q' is placed on the board, and the function calls itself for the next row (`r + 1`).
        
    - **Backtracking**: After the recursive call returns (meaning it has explored all possibilities from that placement), the state is reverted. The queen is removed from the board, and the column and diagonal values are removed from their respective sets. This frees them up for exploration in other branches of the recursion.
        
- **Starting the Process**: The function is initially called with `back(0)` to start placing queens from the first row.
    

## N-Queens II (LeetCode 52)

This variation asks for the total number of distinct solutions, not the solutions themselves. The code can be simplified to increment a counter instead of storing entire boards.

```python
class Solution(object):
    def totalNQueens(self, n):
        board = {}
        self.initialize(n, board)
        self.count = 0
        self.placequeen(0, board)
        return self.count

    def initialize(self, n, board):
        for key in ["q", "c", "r", "dd", "id"]:
            board[key] = {}
        for i in range(n):
            board["q"][i] = -1
            board["r"][i] = 0
            board["c"][i] = 0
        for i in range(-(n - 1), n):
            board["dd"][i] = 0
        for i in range(0, 2 * (n - 1) + 1):
            board["id"][i] = 0

    def addqueen(self, i, j, board):
        board["q"][i] = j
        board["r"][i] = 1
        board["c"][j] = 1
        board["dd"][j - i] = 1
        board["id"][j + i] = 1

    def placequeen(self, i, board):
        n = len(board["q"])
        if i == n:
            self.count += 1
            return

        for j in range(n):
            if self.freespace(i, j, board):
                self.addqueen(i, j, board)
                self.placequeen(i + 1, board)
                self.removequeen(i, j, board)

    def freespace(self, i, j, board):
        return (
            board["r"][i] == 0
            and board["c"][j] == 0
            and board["dd"][j - i] == 0
            and board["id"][j + i] == 0
        )

    def removequeen(self, i, j, board):
        board["q"][i] = -1
        board["r"][i] = 0
        board["c"][j] = 0
        board["dd"][j - i] = 0
        board["id"][j + i] = 0
```

