# Two Pointer Problem Set 2

* 3Sum (LeetCode 15)
* 3Sum Closest (LeetCode 16)
* 3Sum Smaller (LeetCode 259)

## 3Sum (LeetCode 15)

Given an integer array `nums`, return all the triplets `[nums[i], nums[j], nums[k]]` such that `i != j`, `i != k`, and `j != k`, and `nums[i] + nums[j] + nums[k] == 0`.

- Find all unique triplets `(a, b, c)` such that `a + b + c = 0`.
    
- **Approach:** Sort + two-pointer for each `a`.

### Brute force approach

Checking all Possible triplets and Saving Unique Entries only (by sorting the triplets and storing in set to avoid duplicates).  Time will be O(n^3)

```python
class Solution(object):
	def threeSum(self, nums):
		"""
		:type nums: List[int]
		:rtype: List[List[int]]
		"""
		n = len(nums)
		triplets = set()
		for i in range(n):
			for j in range(i+1, n):
				for k in range(j+1, n):
					if nums[i]+nums[k]+nums[j] == 0:
						triplet = tuple( sorted([ nums[i], nums[j], nums[k] ]))
						triplets.add(triplet)
		return [ list(triplet) for triplet in triplets]	
```

Using Java

```java
import java.util.*;

class Solution {
    public List<List<Integer>> threeSum(int[] nums) {
        int n = nums.length;
	        // Set of Lists to avoid duplicate triplets
        Set<List<Integer>> triplets = new HashSet<>();

        for (int i = 0; i < n; i++) {
            for (int j = i + 1; j < n; j++) {
                for (int k = j + 1; k < n; k++) {
                    if (nums[i] + nums[j] + nums[k] == 0) {
                        // Create and sort the triplet
                        List<Integer> triplet = Arrays.asList(
		                        nums[i], nums[j], nums[k]
		                    );
	                        
                        Collections.sort(triplet);
                        triplets.add(triplet);
                    }
                }
            }
        }

        // Convert the Set to a List<List<Integer>>
        return new ArrayList<>(triplets);
    }
}

```

### Sorting and Optimizing

* Key Logic: Picking a single number `a` and then finding `b+c = -a`, complement of `a`.
* `a + b + c = 0` then `-a = b + c`. So find two numbers whose sum is negative of the first then sum will be zero.

* Sort the array, check if first is Negative(if not, return), 
* Go to the next unique number to avoid repetition of `a`. 
* Similarly for `b` also skip same values.
* `c` will be unique if `a` & `b` are unique

```python
class Solution(object):
	def threeSum(self, nums):
		"""
		:type nums: List[int]
		:rtype: List[List[int]]
		"""
		nums.sort()
		n = len(nums)
		triplets = []

		for i in range(n):
			if nums[i] > 0:   
				break    # Skip if 'a' becomes possitive
			
			if i>0 and nums[i] == nums[i-1]:
				continue  # move till unique 'a' is found
			
					# Caling twoSum logic to find the Other two
			pairs = self.twoSum(nums, i+1, n-1, -nums[i] )
			for pair in pairs:  # adding all triplets found
				triplets.append( [nums[i]] + pair )
				
		return triplets
			
			
	def twoSum(self, nums, start, end, target):
		pairs = []
		left, right = start, end
		
		while left < right:
			sum = nums[left] + nums[right]
			if sum == target:
				pairs.append([ nums[left], nums[right] ])
				left += 1
				
				while left < right and nums[left] == nums[left-1]:
					left += 1   # Skip repeating b
				
			elif sum < target:
				left += 1
			else:
				right -= 1
					
		return pairs
```

#### In Java using helper function

```java
import java.util.*;

class Solution {
    public List<List<Integer>> threeSum(int[] nums) {
        Arrays.sort(nums);
        int n = nums.length;
        List<List<Integer>> triplets = new ArrayList<>();

        for (int i = 0; i < n; i++) {
            if (nums[i] > 0) {
                break;  // since array sorted
            }
            if (i > 0 && nums[i] == nums[i - 1]) {
                continue;  // skip duplicate 'a' values
            }

            List<List<Integer>> pairs = twoSum(nums, i + 1, n - 1, -nums[i]);
            for (List<Integer> pair : pairs) {
                // combine nums[i] with the pair
                List<Integer> triplet = new ArrayList<>();
                triplet.add(nums[i]);
                triplet.addAll(pair);
                
                triplets.add(triplet);
            }
        }
        return triplets;
    }

    private List<List<Integer>> twoSum(int[] nums, int start, int end, int target) {
        List<List<Integer>> pairs = new ArrayList<>();
        int left = start;
        int right = end;

        while (left < right) {
            int sum = nums[left] + nums[right];
            if (sum == target) {
                pairs.add(Arrays.asList(nums[left], nums[right]));
                left++;
                // Skip duplicate b values
                while (left < right && nums[left] == nums[left - 1]) {
                    left++;
                }
            } else if (sum < target) {
                left++;
            } else {
                right--;
            }
        }
        return pairs;
    }
}
```

### Without helper function for twoSum

Not using a Helper Function, better optimized to skip duplicate (it was not optimal to skip all duplicates in all checks, but only when match found)
* Still using difference and Complement concept to find triplets (not necessary as no function call)
```python
class Solution(object):
    def threeSum(self, nums):
        """
        :type nums: List[int]
        :rtype: List[List[int]]
        """
        nums.sort()
        n = len(nums)
        triplets = []

        for i in range(n):
            if nums[i] > 0:
                break
            if i > 0 and nums[i] == nums[i - 1]:
                continue

            left, right = i + 1, len(nums) - 1
            comp = -nums[i]

            while left < right:
                diff = nums[left] + nums[right]

                if diff == comp:
                    triplet = (nums[i], nums[left], nums[right])
                    triplets.append(triplet)
                    
                    left += 1     # avoiding duplicates
                    right -= 1
                    while left < right and nums[left] == nums[left - 1]:
                        left += 1
                    while left < right and nums[right] == nums[right + 1]:
                        right -= 1
                
                elif diff < comp:
                    left += 1

                else:
                    right -= 1

        return triplets
```

Directly checking if `sum = 0` instead of complement and difference comparison.

```python
class Solution(object):
    def threeSum(self, nums):
        nums.sort()
        n = len(nums)
        triplets = []

        for i in range(n - 2):
            if nums[i] > 0:
                break
            if i > 0 and nums[i] == nums[i - 1]:
                continue
                
            left, right = i+1, n-1
            while left < right:
                total = nums[i] + nums[left] + nums[right]
                if total < 0:
                    left += 1
                elif total > 0:
                    right -= 1
                else:
                    triplets.append((nums[i], nums[left], nums[right]))
                    left += 1
                    right -= 1
                    while left < right and nums[left] == nums[left - 1]:
                        left += 1
                    while left < right and nums[right] == nums[right + 1]:
                        right -= 1
        return triplets
```

#### In Java

```java
import java.util.*;

class Solution {
    public List<List<Integer>> threeSum(int[] nums) {
        
        Arrays.sort(nums);
        int n = nums.length;
        List<List<Integer>> triplets = new ArrayList<>();

        for (int i = 0; i < n - 2; i++) {
            if (nums[i] > 0) {
                break;
            }
            if (i > 0 && nums[i] == nums[i - 1]) {
                continue; // skip duplicates for i
            }

            int left = i + 1;
            int right = n - 1;
					// Two pointer Logic
            while (left < right) {
                int total = nums[i] + nums[left] + nums[right];

                if (total < 0) {
                    left++;
                } else if (total > 0) {
                    right--;
                } else {
                    // Found a triplet
                    triplets.add(Arrays.asList(nums[i], nums[left], nums[right]));
                    left++;
                    right--;

                    // Skip duplicates on left
                    while (left < right && nums[left] == nums[left - 1]) {
                        left++;
                    }
                    // Skip duplicates on right
                    while (left < right && nums[right] == nums[right + 1]) {
                        right--;
                    }
                }
            }
        }

        return triplets;
    }
}

```

## 3Sum Closest (LeetCode 16)

Given an integer array `nums` of length `n` and an integer `target`, find three integers in `nums` such that the sum is closest to `target`. Return the sum of triplet.
    
- Approach: Sort + two-pointer.

- Sort `nums`.
- Initialize `closest` to a big number or to the sum of the first three elements.
- Loop `i` from `0` to `n-3`.
    - Skip duplicates.
    - Use **two pointers** `l` and `r` to find the sum closest to `target - nums[i]`.     
- Update `closest` whenever a closer sum is found.

```python
class Solution(object):

	def threeSumClosest(self, nums, target):
		"""
		:type nums: List[int]
		:type target: int
		:rtype: int
		"""
		
		nums.sort()
		n = len(nums)

		if n < 3:
			return 0
			
		closest = nums[0] + nums[1] + nums[2]
		
		for i in range(0, n-2):
			if i > 0 and nums[i] == nums[i-1]:
				continue 
		
			left, right = i+1, n-1
			
			while left < right:
				current_sum = nums[i] + nums[left] + nums[right]
				
				if current_sum == target:
					return target
				
					# Possitive or negative but difference is minor
				if abs(current_sum - target) < abs(closest - target):
				    closest = current_sum 
				
				if current_sum < target:
					left += 1
				else:
					right -= 1
		return closest
```

#### In java

```java
import java.util.Arrays;

class Solution {
    public int threeSumClosest(int[] nums, int target) {
        Arrays.sort(nums);
        int n = nums.length;

        if (n < 3) {
            return 0;
        }

        int closest = nums[0] + nums[1] + nums[2];

        for (int i = 0; i < n - 2; i++) {
		            // Skip duplicate base values
            if (i > 0 && nums[i] == nums[i - 1]) {
                continue;
            }

            int left = i + 1;
            int right = n - 1;

            while (left < right) {
                int currentSum = nums[i] + nums[left] + nums[right];

                if (currentSum == target) {
                    return target; // exact match
                }

                if (Math.abs(currentSum - target) < Math.abs(closest - target)) {
                    closest = currentSum;
                }

                if (currentSum < target) {
                    left++;
                } else {
                    right--;
                }
            }
        }

        return closest;
    }
}

```

### Optimised by checking Bound and pruning

```python
class Solution(object):
    def threeSumClosest(self, nums, target):
        nums.sort()
        n = len(nums)
        if n < 3:
            return 0
            
        closest = nums[0] + nums[1] + nums[2]
        
        for i in range(n - 2):
            if i > 0 and nums[i] == nums[i - 1]:
                continue  # skip duplicate base numbers
                
            # Prune with min and max sums
            min_sum = nums[i] + nums[i + 1] + nums[i + 2]
            if min_sum > target:
                if abs(min_sum - target) < abs(closest - target):
                    closest = min_sum
                break  # all further sums will be larger
                
            max_sum = nums[i] + nums[-1] + nums[-2]
            if max_sum < target:
                if abs(max_sum - target) < abs(closest - target):
                    closest = max_sum
                continue  # try next i
                
            # Two-pointer search
            left, right = i + 1, n - 1
            while left < right:
                current_sum = nums[i] + nums[left] + nums[right]
                diff = current_sum - target
                
                if diff == 0:
                    return target
                    
                if abs(diff) < abs(closest - target):
                    closest = current_sum
                    
                if diff < 0:
                    left += 1
                else:
                    right -= 1
                    
        return closest
```

#### In java

```java
import java.util.Arrays;

class Solution {
    public int threeSumClosest(int[] nums, int target) {
        Arrays.sort(nums);
        int n = nums.length;
        if (n < 3) {
            return 0; // or throw an exception if desired
        }

        int closest = nums[0] + nums[1] + nums[2];

        for (int i = 0; i < n - 2; i++) {
            if (i > 0 && nums[i] == nums[i - 1]) {
                continue; // skip duplicate base numbers
            }
            
		            // The smallest possible sum in beginning of array
            int minSum = nums[i] + nums[i + 1] + nums[i + 2];
            if (minSum > target) {
                if (Math.abs(minSum - target) < Math.abs(closest - target)) {
                    closest = minSum;
                }
                break; // all further sums will be larger
            }
            
					// Largest possible sum for given 'a' from end of array
            int maxSum = nums[i] + nums[n - 1] + nums[n - 2];
            if (maxSum < target) {
                if (Math.abs(maxSum - target) < Math.abs(closest - target)) {
                    closest = maxSum;
                }
                continue; // try next i
            }

            // Two-pointer search
            int left = i + 1, right = n - 1;
            while (left < right) {
                int currentSum = nums[i] + nums[left] + nums[right];
                int diff = currentSum - target;

                if (diff == 0) {
                    return target; // exact match
                }

                if (Math.abs(diff) < Math.abs(closest - target)) {
                    closest = currentSum;
                }

                if (diff < 0) {
                    left++;
                } else {
                    right--;
                }
            }
        }

        return closest;
    }
}
```


## 3Sum Smaller (LeetCode 259)
 
Given an integer array `nums` and an integer `target`, count the number of triplets `(i, j, k)` such that:
- `i < j < k`
- `nums[i] + nums[j] + nums[k] < target`
    
We don’t need to return the triplets themselves, just the **count** which is the unique part of finding all valid triplet counts.

Approach: Sort + two-pointer counting.
   
1. Sort `nums` to use two-pointer logic effectively. 
2. For each `i` from `0` to `n-3`, use two pointers to count pairs `(j, k)`.
3. Two-pointer counting
    - Start `left = i + 1` and `right = n - 1`.
    - Compute `current_sum = nums[i] + nums[left] + nums[right]`.
    - If `current_sum < target`:
        - **All** numbers from `left+1` to `right` will also satisfy the condition (because array is sorted).
        - Add `(right - left)` to count and move `left` forward.
    - Else:
        - Move `right` backward.

```python
class Solution(object):
    def threeSumSmaller(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: int
        """
        nums.sort()
        n = len(nums)
        count = 0
        
        for i in range(n - 2):
        
            left, right = i + 1, n - 1
            while left < right:
                current_sum = nums[i] + nums[left] + nums[right]
                
                if current_sum < target:
	                    # All elements between left & right form valid triplets
                    count += (right - left)
                    left += 1
                else:
                    right -= 1
                    
        return count
```

This avoids an inner loop and makes counting efficient.

- **Time:** O(n²) (sorting O(n log n) + two-pointer scanning O(n²)).
    
- **Space:** O(1) extra.

```java
import java.util.Arrays;

class Solution {
    public int threeSumSmaller(int[] nums, int target) {
        Arrays.sort(nums);
        int n = nums.length;
        int count = 0;

        for (int i = 0; i < n - 2; i++) {
            int left = i + 1;
            int right = n - 1;

            while (left < right) {
                int currentSum = nums[i] + nums[left] + nums[right];

                if (currentSum < target) {
                    count += (right - left);
                    left++;
                } else {
                    right--;
                }
            }
        }
        return count;
    }
}
```

