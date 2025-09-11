# Two Pointer Problem Set 4

* Valid Palindrome I (LeetCode 125)
* Valid Palindrome II (LeetCode 680)
* Many Unsolved

## Palindrome String Problems

Using two pointers to move from front and back making sure both are same, returning false otherwise. in odd numbered values, middle can be ignored.

If there are non-alpanumeric characters like special characters, space and tabs they do no affect, should be skipped, there can be upper and lower cases also.

To skip these extras, increment the left pointer until it moves to a alphanumeric, then decrement the right until it finds one and then compare by converting the letter to lower.

Loop till left less or equal to right


## Valid Palindrome I (LeetCode 125)

A phrase is a **palindrome** if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

```python
class Solution(object):
    def isPalindrome(self, s):
        """
        :type s: str
        :rtype: bool
        """
		left, right = 0, len(s) - 1

		s = s.lower() # Once converting all

        while left < right:
            # Skip non-alphanumeric characters
            while left < right and not s[left].isalnum():
                left += 1
            while left < right and not s[right].isalnum():
                right -= 1

            # Compare characters in lowercase
            if s[left] != s[right]:  # cound have used .lower() for each
                return False

            left += 1
            right -= 1

        return True
```

### Pythonic : using filtering

Create a new string with just alphanumeric in lower case and then flip and compare
```python
class Solution(object):
    def isPalindrome(self, s):
        filtered = ''.join(ch.lower() for ch in s if ch.isalnum())
        return filtered == filtered[::-1]
```


## Valid Palindrome II (LeetCode 680)

Given a string `s`, return `true` _if the_ `s` _can be palindrome after deleting **at most one** character from it_.

- Using the **two-pointer approach** as in the normal palindrome check.
    
- When characters at `left` and `right` differ:
    - Either delete the **left** character or the **right** character.
    - Check if either resulting substring is a palindrome.
	
- If at most one removal yields a palindrome → return `True`.

```python
class Solution(object):
    def validPalindrome(self, s):
        """
        :type s: str
        :rtype: bool
        """
        left, right = 0, len(s) - 1
        while left < right:
            if s[left] != s[right]:
                # Try skipping either left or right char
                return (isPalindrome(left + 1, right) or
                        isPalindrome(left, right - 1))
            left += 1
            right -= 1
        return True

		# Normal Palindrome Check
		def isPalindrome(i, j):
			while i < j:
                if s[i] != s[j]:
                    return False
                i += 1
                j -= 1
            return True
```


## Other Versions

* (LeetCode 5) Find the longest contiguous palindrome substring.
	Expand around center / DP.
	
* (LeetCode 266) Check if a string’s characters can be rearranged into a palindrome.
	Count character frequencies, at most one odd count.

* (LeetCode 131) Partition string into all possible palindrome substrings.
	Backtracking to explore cuts.

* (LeetCode 132) Minimum cuts to partition string into palindromes.

* (LeetCode 516) Find longest palindromic subsequence (not necessarily contiguous).
	DP on two indices.

* (LeetCode 647) Count all palindromic substrings in a string.
	Count all palindromic substrings in a string.

* (LeetCode 214) Add chars in front to make shortest palindrome.
	KMP / hashing to find longest palindromic prefix.

## Valid Palindrome III (LeetCode 1216)

Can be palindrome after removing at most k chars.


## Valid Palindrome IV (LeetCode 2330)

