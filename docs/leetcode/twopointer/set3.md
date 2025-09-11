# Two Pointer Problem Set 3

* Move Zeroes (LeetCode 283)
* Next Lexicographical Sequence (LeetCode 31)
* Planting Flowers (LeetCode 605)

## Move Zeroes (LeetCode 283)

Move all zeros to the end **in place**, maintaining the relative order of non-zero elements.

Non-zeros must be moved from left to maintain order.

**Approach:** Two pointers starting from beginning (**Unidirectional traversal**):
- `left` (slow): points where the next non-zero should go by finding Zero.
- `right` (fast): scans through the array to find non-zero.

Whenever a nonzero is found at `right`, swap it with `left` and increment `left`.

This way:
- All nonzeros are compacted at the start.
- All zeros are pushed to the end.
- **Time complexity:** O(n).
- **Space complexity:** O(1).

```python
class Solution(object):
    def moveZeroes(self, nums):
        """
        :type nums: List[int]
        :rtype: None (modifies nums in place)
        """
        left = 0  # Index for next non-zero placement

        for right in range(len(nums)):
            if nums[right] != 0:
                nums[left], nums[right] = nums[right], nums[left]
                left += 1
        # No need to return nums because we modify in-place
```

Input: `nums = [0,1,0,3,12]`

Output: `[1,3,12,0,0]`

```java
class Solution{
	public void moveZeroes(int[] nums){
		int left = 0;
		
		for(int right = 0; right< nums.length ; right++ ){
			if(nums[right] != 0){
				int temp = nums[left];
				nums[left] = nums[right];
				nums[right] = temp;
				
				left++;
			}
		}
	} 
}
```

### Zeroes to Front Version (Symmetric)

```python
def moveZeroesFront(nums):
    right = len(nums) - 1  
    # position for next nonzero from the back

    for left in range(len(nums)-1, -1, -1):
        if nums[left] != 0:
            nums[right], nums[left] = nums[left], nums[right]
            right -= 1
    return nums
```

Input: `[0,1,0,3,12]` → Output: `[0,0,1,3,12]`


## Next Lexicographical Sequence (LeetCode 31)

Given a string of lowercase English letters, rearrange the characters to form a new string representing the next immediate sequence in lexicographical order. If the given string is already last in lexicographical order among all possible arrangements, return the arrangements, return the arrangements that's first in lexicographical order.

Can also work for an array of numbers also.

### Finding next sequence for List of integers

```python
class Solution(object):
    def nextPermutation(self, nums):
        """
        :type nums: List[int]
        :rtype: None Do not return anything, modify nums in-place instead.
        """
        n = len(nums)
        pivot = n - 2

        # Step 1: find pivot
        while pivot >= 0 and nums[pivot] >= nums[pivot + 1]:
            pivot -= 1

        if pivot == -1:
            # Already the last permutation → reverse entire list
            nums.reverse()
            return

        # Step 2: find successor to pivot
        to_swap = n - 1
        while nums[to_swap] <= nums[pivot]:
            to_swap -= 1

        # Step 3: swap pivot with successor
        nums[pivot], nums[to_swap] = nums[to_swap], nums[pivot]

        # Step 4: reverse suffix
        nums[ pivot + 1 : ] = reversed(nums[ pivot + 1 : ])
```

In java
```java
import java.util.*;

class Solution {
    public void nextPermutation(int[] nums) {
        int n = nums.length;
        
        int pivot = n-2;
        while (pivot >= 0 && nums[pivot] >= nums[pivot+1]){
	        pivot--;
        }
        
        if(pivot == -1){
	        Arrays.sort(nums);
	        return;
        }
        
        int to_swap = n-1;
        while( nums[to_swap] <= nums[pivot]){
	        to_swap--;
        }
        
        int temp = nums[to_swap];
        nums[to_swap] = nums[pivot];
        nums[pivot] = temp;
        
        int start = pivot+1;
        int end = n-1;
        
        while( start < end ){
			int tmp = nums[start];
			nums[start] = nums[end];
			nums[end] = tmp;
			start++;
			end--;
        }
    }
}
```

### For Next sequence in a String

Returning the final array also
```python
def next_lexicographical_string(s):
    charArray = list(s) # Convert to array of character
    n = len(charArray)

    # Step 1: Find pivot
    i = n - 2
    while i >= 0 and charArray[i] >= charArray[i + 1]:
        i -= 1

    if i == -1:
        # Already the last permutation
        return ''.join(sorted(charArray))

    # Step 2: Find successor
    j = n - 1
    while charArray[j] <= charArray[i]:
        j -= 1

    # Step 3: Swap
    charArray[i], charArray[j] = charArray[j], charArray[i]

    # Step 4: Reverse suffix
    charArray[i + 1:] = reversed(charArray[i + 1:])

    return ''.join(charArray)
```

In java
```java
import java.util.Arrays;

class Solution {
    public String nextLexicographicalString(String s) {
        char[] chars = s.toCharArray();
        int n = chars.length;

        // Step 1: Find pivot
        int i = n - 2;
        while (i >= 0 && chars[i] >= chars[i + 1]) {
            i--;
        }

        if (i == -1) {
            // Already last permutation, return first
            Arrays.sort(chars);
            return new String(chars);
        }

        // Step 2: Find successor
        int j = n - 1;
        while (chars[j] <= chars[i]) {
            j--;
        }

        // Step 3: Swap
        char temp = chars[i];
        chars[i] = chars[j];
        chars[j] = temp;

        // Step 4: Reverse suffix
        reverse(chars, i + 1, n - 1);

        return new String(chars);
    }

    private void reverse(char[] arr, int start, int end) {
        while (start < end) {
            char tmp = arr[start];
            arr[start] = arr[end];
            arr[end] = tmp;
            start++;
            end--;
        }
    }
}
```


## Planting Flowers (LeetCode 605)

Given a flowerbed array consisting of `0`s (empty plots) and `1`s (already planted flowers), and a number `n`, determine if `n` new flowers can be planted without violating the **no adjacent flowers** rule.

|Input|Output|Explanation|
|---|---|---|
|`flowerbed = [1,0,0,0,1], n = 1`|`True`|Can plant one flower at index 2|
|`flowerbed = [1,0,0,0,1], n = 2`|`False`|Only one empty space can be used safely|
- No two adjacent flowers allowed.
	
- You can plant a flower in an empty spot (`0`) only if both neighbors are also empty (or do not exist at array boundaries).

#### Approach (Single-Pointer / Index Check)

- Iterate through each plot.
    
- When you find a `0`, check **neighbors**:
    
    - Left neighbor is `0` or out of bounds.
		    `i == 0` or `flowerbed[i-1] == 0`
        
    - Right neighbor is `0` or out of bounds.
	        `i == len(flowerbed)-1` or `flowerbed[i+1] == 0`

- If both are valid, plant a flower (`flowerbed[i] = 1`), and increment `planted`.

- Skip to the next index to avoid adjucency.
    
- Stop early if `planted >= n`.
    
**Edge Cases**:

- If `n = 0` → return `True` immediately.
    
- If `len(flowerbed) == 1` → return `True` if `flowerbed[0] == 0 and n <= 1`.
    
**Optimizations**
    
- Mark a plot as planted immediately after planting to avoid re-checking.
	
- Skip the next index after planting (using `i += 2`) to avoid adjacency violations.

---

### Solution 1: Using a For Loop

Making a copy of array
```python
class Solution(object):
	def canPlaceFlowers(self, flowerbed, n):
	    bed = flowerbed[:]    # copying to not modify input array
	    m = len(bed)
	    planted = 0
	
	    if n == 0:
	        return True
	    if m == 1:
	        return (bed[0] == 0 and n <= 1)
	
	    for i in range(m):
	        if bed[i] == 0:
	            left_empty = (i == 0 or bed[i - 1] == 0)
	            right_empty = (i == m - 1 or bed[i + 1] == 0)
	
	            if left_empty and right_empty:
	                bed[i] = 1
	                planted += 1
	
	                if planted >= n:
	                    return True
	    return planted >= n
```

In Java, for loop and array copy

```java
class Solution {
    public boolean canPlaceFlowers(int[] flowerbed, int n) {
	        // A copy so to not modify the input array
        int[] bed = flowerbed.clone();
        int m = bed.length;
        int planted = 0;

        if (n == 0) return true;
        if (m == 1) return (bed[0] == 0 && n <= 1);

        for (int i = 0; i < m; i++) {
            if (bed[i] == 0) {
                boolean leftEmpty = (i == 0 || bed[i - 1] == 0);
                boolean rightEmpty = (i == m - 1 || bed[i + 1] == 0);

                if (leftEmpty && rightEmpty) {
                    bed[i] = 1; // plant a flower
                    planted++;

                    if (planted >= n) return true;
                }
            }
        }

        return planted >= n;
    }
}

```

---

### Solution 2: Using a While Loop

Updating the Original array
```python
class Solution(object):
    def canPlaceFlowers(self, flowerbed, n):
        m = len(flowerbed)
        planted = 0

        if n == 0:
            return True
        if m == 1:
            return (flowerbed[0] == 0 and n <= 1)

        i = 0
        while i < m:
            if flowerbed[i] == 0:
                left_empty = (i == 0 or flowerbed[i - 1] == 0)
                right_empty = (i == m - 1 or flowerbed[i + 1] == 0)

                if left_empty and right_empty:
                    flowerbed[i] = 1
                    planted += 1

                    if planted >= n:
                        return True
                    i += 2  # skip the next plot to avoid adjacency
                    continue
            i += 1

        return planted >= n
```

In java
```java
class Solution {
    public boolean canPlaceFlowers(int[] flowerbed, int n) {
        int m = flowerbed.length;
        int planted = 0;

        if (n == 0) return true;
        if (m == 1) return (flowerbed[0] == 0 && n <= 1);

        int i = 0;
        while (i < m) {
            if (flowerbed[i] == 0) {
                boolean leftEmpty = (i == 0 || flowerbed[i - 1] == 0);
                boolean rightEmpty = (i == m - 1 || flowerbed[i + 1] == 0);

                if (leftEmpty && rightEmpty) {
                    flowerbed[i] = 1; // plant a flower
                    planted++;

                    if (planted >= n) return true;

                    i += 2; // skip the next spot to avoid adjacency
                    continue;
                }
            }
            i++;
        }

        return planted >= n;
    }
}

```
#### Complexity Analysis

- **Time Complexity:** O(n) – one pass through the flowerbed.
    
- **Space Complexity:** O(1) extra (if modifying in-place) or O(n) if making a copy.

### Solution 3: Most Optimal by reducing checks

In Java, For loop but manual increment

```java
class Solution {
    public boolean canPlaceFlowers(int[] flowerbed, int n) {
        int m = flowerbed.length;
        if (n == 0) return true;

        for (int i = 0; i < m; ) {
            if (flowerbed[i] == 1) {
                i += 2;
            } else {
                // Current is 0, check left and right conditions
                boolean leftEmpty = (i == 0 || flowerbed[i - 1] == 0);
                boolean rightEmpty = (i == m - 1 || flowerbed[i + 1] == 0);

                if (leftEmpty && rightEmpty) {
                    flowerbed[i] = 1; // plant flower
                    n--;              // reduce required flowers count
                    if (n == 0) 
	                    return true; // early exit
                    i += 2;           // skip next spot
                } else {
                    i++;              // just move to next
                }
            }
        }

        return n <= 0; // if still need flowers, not possible
    }
}
```

In Python, while loop for manual increment

```python
class Solution(object):
    def canPlaceFlowers(self, flowerbed, n):
        m = len(flowerbed)
        if n == 0:
            return True

        i = 0
        while i < m:
            if flowerbed[i] == 1:
                i += 2  # skip next spot
            else:
                left_empty = (i == 0 or flowerbed[i - 1] == 0)
                right_empty = (i == m - 1 or flowerbed[i + 1] == 0)

                if left_empty and right_empty:
                    flowerbed[i] = 1  # plant flower
                    n -= 1
                    if n == 0:
                        return True  # early exit
                    i += 2  # skip next spot
                else:
                    i += 1  # move to next spot

        return n <= 0
```

