# Prefix Sum

Pre-calculate the sums of elements in a list or array up to a certain point, so you can quickly find the sum of any subarray —or segment— later on. Helps calculating sums of subarrays quickly by doing most of the work in advance.

Technique for answering range queries fast by precomputing a running total.
Build an array `P` where `P[i]` holds the sum of the first `i` elements.
Then the sum of any subarray `[l..r]` (0-indexed, inclusive) is `P[r + 1] - P[l]`.
This turns many brute-force `O(n * q)` queries into `O(n + q)` (precompute once, each query in `O(1)`).

## Pseudocode

### 1D prefix sums — range sum in O(1)

```
PREFIX_SUM(A):
  n = length(A)
  P = array of size n + 1
  P[0] = 0
  for i from 1 to n:
    P[i] = P[i - 1] + A[i - 1]
  return P

RANGE_SUM(P, l, r):            # 0 ≤ l ≤ r < n
  return P[r + 1] - P[l]
```

### 2D prefix sums (matrix) — sum of any submatrix in O(1)

```
PREFIX_SUM_2D(M):               # M has R rows and C cols
  S of size (R + 1) x (C + 1) filled with 0
  for i from 1 to R:
    for j from 1 to C:
      S[i][j] = M[i-1][j-1] + S[i-1][j] + S[i][j-1] - S[i-1][j-1]
  return S

SUBMATRIX_SUM(S, r1, c1, r2, c2):    # inclusive 0-indexed coords
  # convert to 1-based
  r1++, c1++, r2++, c2++
  return S[r2][c2] - S[r1-1][c2] - S[r2][c1-1] + S[r1-1][c1-1]
```

## Explanation

- Build `P` once in `O(n)`.
- Any contiguous sum becomes a difference of two prefix values, so each query is `O(1)`.
- Works beyond sums: convert data to 0/1 (e.g., “is vowel?”, “is even?”) and prefix-sum the counts.
- In 2D, the inclusion–exclusion formula gives submatrix sums in `O(1)` after `O(R*C)` preprocessing.

## Time Complexity

- Build: `O(n)` (1D), `O(R*C)` (2D).
- Query: `O(1)` for each range or submatrix sum.
- Space: `O(n)` (1D), `O(R*C)` (2D).

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

- Many range sum queries on the same array/matrix.
- Count of items satisfying a simple predicate in each range (prefix counts).
- Problems like: number of subarrays with sum `K` (use prefix sums + hash map), subarray sums divisible by `K` (prefix sums modulo `K`).

## Problems

- Subarray Sum Equals K (LC 560) — prefix sums + hash map.
- Range Sum Query – Immutable (LC 303).
- Continuous Subarray Sum (LC 523) — modulo prefix sums.
- Subarray Sums Divisible by K (LC 974).
- Find Pivot Index (LC 724).
