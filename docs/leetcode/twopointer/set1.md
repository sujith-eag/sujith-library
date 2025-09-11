# Two Pointer Problems Set 1

* Two Sum : Unsorted Array (LeetCode 1)
* Two Sum : Sorted Array (LeetCode 167)
* Container with most water (LeetCode 11)

## Two Sum Problems

Given an array of integers `nums` and an integer `target`, return _indices of the two numbers such that they add up to `target`_. You may assume that each input would have **_exactly_ one solution**, and you may not use the _same_ element twice.

You can return the answer in any order.

### Brute Force Method

```python
class Solution(object):
	def twoSum(self, nums, target):
		"""
		:type nums: List[int]
		:type target: int
		:rtype: List[int]
		"""
	
		n = len(nums)
		for i in range(n):
			for j in range(i+1, n):
				if nums[i]+nums[j] == target:
					return [i, j]
		return []
```

In Java
```java
class Solution {
    public int[] twoSum(int[] nums, int target) {
        int n = nums.length;
        for (int i = 0; i < n; i++) {
            for (int j = i + 1; j < n; j++) {
                if (nums[i] + nums[j] == target) {
                    return new int[]{i, j};
                }
            }
        }
        return new int[]{};
    }
}
```

## Unsorted Array (LeetCode 1) : Hashmap solution

No guarantee of sorting, one valid answer, O(n) solution expected.
Approach: Hashmap for complement lookup.

* Store num as key and its index as value if it is not in hashmap.
* If the Complement of the num is already in hashmap then solution found.

```python
class Solution(object):
    def twoSum(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: List[int]
        """
        seen = {}
        for i, num in enumerate(nums):
            diff = target - num
            if diff in seen:  # complement known
                return [seen[diff], i]  # return indexes
            seen[num] = i
        return []
```

Slightly optimizing by avoiding duplicate addition to hashmap
```python
class Solution(object):
    def twoSum(self, nums, target):
        seen = {}
        for i, num in enumerate(nums):
            diff = target - num
            if diff in seen:
                return [seen[diff], i]
            if num not in seen:  # Not adding duplicates
	            seen[num] = i
        return []
```

In java Using hashmaps

```java
import java.util.HashMap;
import java.util.Map;

class Solution {
    public int[] twoSum(int[] nums, int target) {
        Map<Integer, Integer> seen = new HashMap<>();  // number → index

        for (int i = 0; i < nums.length; i++) {
            int num = nums[i];
            int diff = target - num;

            if (seen.containsKey(diff)) {
                return new int[]{seen.get(diff), i};
            }
            seen.put(num, i);
        }
        return new int[]{};
    }
}
```

## Sorted Array (LeetCode 167) : Two Pointer

Same as classic, but array is sorted, and result must be **1-indexed**.

Iteration is 0 indexed only, but return should be 1 indexed.

```python
class Solution(object):
    def twoSum(self, numbers, target):
        left, right = 0, len(numbers) - 1

        while left < right:
            sum = numbers[left] + numbers[right]
            if sum < target:
                left += 1
            elif sum > target:
                right -= 1
            else:
                return [left + 1, right + 1]  # convert to 1-index
        return []
```

In Java
```java
class Solution {

    public int[] twoSum(int[] numbers, int target) {
        int left = 0;
        int right = numbers.length - 1;

        while (left < right) {
            int sum = numbers[left] + numbers[right];

            if (sum < target) {
                left++;
            } else if (sum > target) {
                right--;
            } else {
                return new int[]{left + 1, right + 1};
            }
        }
        return new int[]{}; // no pair found
    }
}

```

## Container with most water (LeetCode 11)

You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (`i, 0`) and (`i, height[i]`).
Find two lines that together with the x-axis form a container, such that the container contains the most water.

Return the maximum amount of water a container can store.

* Using two pointers from opposite direction to find water storage
* Main formula is, min height of the two lines and the width which is the difference between them. `area = height * width` , `water_level = min(h[l], h[r]) * (r-l)`.
* For moving the pointer, Water capacity is limited by the smallest so move the smallest of two
* If both are same, there is no advantage in even going to next larger one as smaller one decides capacity and the width will reduce. So no chance of increment in capacity.
* So move both the lines and check water level with max.

```python
class Solution(object):

	def maxArea(self, height):
		"""
		:type height: List[int]
		:rtype: int
		"""
		max_water = 0
		left, right = 0, len(height)-1
		
		while (left < right):
			# Calculating water
			water = min( height[left], height[right] ) * (right-left)
			max_water = max( water, max_water)
			
			# Moving the Lines
			if height[left] > height[right]:
				right -= 1
			elif height[left] < height[right]:
				left += 1
			else:
				right -= 1
				left += 1

		return max_water
```

In Java
```java
class Solution {
    public int maxArea(int[] height) {
        int maxWater = 0;
        int left = 0, right = height.length - 1;

        while (left < right) {
            int water = Math.min(height[left], height[right]) * (right - left);
            maxWater = Math.max(water, maxWater);

            if (height[left] > height[right]) {
                right--;
            } else if (height[left] < height[right]) {
                left++;
            } else {
                right--;
                left++;
            }
        }
        return maxWater;
    }
}
```

