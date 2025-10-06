# Prefix Sum

Pre-calculate the sums of elements in a list or array, so you can quickly find the sum of any subarray later on.
Helps to calculate sums of subarrays quickly by doing most of the work in advance.

Build an array `P` where `P[i]` holds the sum of the first `i` elements. Then the sum of any subarray `[l..r]` (
0-indexed, inclusive) is `P[r + 1] - P[l]`.

Turns many brute-force `O(n * q)` queries into `O(n + q)` (precompute once, each query in `O(1)`).

## Pseudocode

### 1D prefix sums — range sum in O(1)

```
PREFIX_SUM(A):
  n = length(A)
  P[0..n] ← 0   
  for i from 1 to n:
    P[i] = P[i - 1] + A[i - 1]
  return P

RANGE_SUM(P, l, r): 
  return P[r + 1] - P[l]
```

## Explanation

- Build `P` once in `O(n)`.
- Any contiguous sum becomes a difference of two prefix values, so each query is `O(1)`.
- Works beyond sums: convert data to 0/1 (e.g., “is vowel?”, “is even?”) and prefix-sum the counts.

## Time Complexity

- Build: `O(n)` (1D).
- Query: `O(1)` for each range or submatrix sum.
- Space: `O(n)` (1D).

## Example

Problem: Max sum of any subarray of length `k = 3` using prefix sums.

Input:
`A = [2, 1, 5, 1, 3, 2]`, `k = 3`

Steps:

```
Build P:
P[0]=0
P[1]=2
P[2]=3
P[3]=8
P[4]=9
P[5]=12
P[6]=14

Window sums via P:
[0..2] → P[3]-P[0] = 8    → best = 8
[1..3] → P[4]-P[1] = 7    → best = 8
[2..4] → P[5]-P[2] = 9    → best = 9
[3..5] → P[6]-P[3] = 6    → best = 9
```

Output: `9`

## When to Use

- Many range sum queries on the same array.
- Count of items satisfying a simple predicate in each range (prefix counts).
- Problems like: number of subarrays with sum `K` (use prefix sums + hash map), subarray sums divisible by `K` (prefix
  sums modulo `K`).

## Problems

.
