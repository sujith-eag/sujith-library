export const simpleMethods = [{
    title: "Simple Problems",
    items: [
      { label: "Fibonacci Numbers", link: "/leetcode/basic/fib" },
      { label: "Simple Problems", link: "/leetcode/basic/s1" },
      { label: "Product of Array", link: "/leetcode/basic/s2" },      
      { label: "Increasing Triplet", link: "/leetcode/basic/s3" },
    ]
}];

export const twoPointerMethod = [{
    title: "Two Pointer Method",
    items: [
      { label: "Two Pointer Set-1", link: "/leetcode/twopointer/set1" },
      { label: "Two Pointer Set-2", link: "/leetcode/twopointer/set2" },
      { label: "Two Pointer Set-3", link: "/leetcode/twopointer/set3" },
      { label: "Palindromic Problems", link: "/leetcode/twopointer/set4" },
    ]
}];

export const backTrackingMethod = [{
    title: "Backtracking Method",
    items: [
      { label: "N-Queens Problems", link: "/leetcode/backtrack/nqueens" },
    ]
}];

export const stringMethod = [{
    title: "String Manipulation",
    items: [
    //   { label: "N-Queens Problems", link: "/leetcode/backtrack/nqueens" },
    ]
}];

export const interviewSection = [
    ...twoPointerMethod,
    ...stringMethod,
    ...backTrackingMethod,
    ...simpleMethods,
];
