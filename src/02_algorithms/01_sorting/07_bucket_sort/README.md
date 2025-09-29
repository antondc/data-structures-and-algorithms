# Bucket Sort

## Description

Non-comparison sorting algorithm that distributes elements into a finite number of buckets.
Each bucket is then sorted individually often with Insertion Sort or any other internal sort, and the results are concatenated. 
Under common assumptions —uniformly distributed data and a sensible number of buckets— runs in linear time on average.

## Pseudocode

    BUCKET_SORT(array, k)
      buckets ← new array of k empty lists
      M ← 1 + maximum key value in the array
      
      for i = 0 to length(array) do
          insert array[i] into buckets[floor(k × array[i] / M)]

      for i = 0 to k do 
          insertionSort(buckets[i])

      return concatenation of buckets[0], ...., buckets[k]

## Explanation

### As array

Bucket Sort proceeds in three phases:

1. Distribute each element from the input array into one of k buckets using a bucket-index function.
2. Sort each bucket individually using an internal sorting method —often Insertion Sort for small buckets, or any stable O(n log n) sort—.
3. Concatenate all buckets in order to obtain the final sorted array.

## Characteristics

### Time Complexity

- `n`: number of elements
- `k`: number of buckets
- `n_i`: size of bucket `i`.


- Average case (uniform distribution + small buckets): `O(n + k)`, especially when using Insertion Sort or when each `n_i` is small on average.
- Worst case:
  - If all elements land in one bucket, and you use Insertion Sort inside → `O(n²)`.
  - If you use an `O(m log m)` internal sort —like Merge/Quick/Heap— → `O(n log n)`.

### Space Complexity

- `O(n + k)` extra space: n for storing elements across buckets and `k for the bucket container structure.

### Stability

- Stable if: buckets are lists/queues that preserve insertion order, and the internal sort is
  stable —or you insert in a way that preserves relative order—.
- Not stable otherwise.


## Example

#### Input (unsorted): 

    [8, 4, 5, 2, 10, 9, 7, 1, 6, 3]

4 Buckets (ranges using `index = floor(4 * (x - 1) / 10)`):

    B0: numbers 1-3
    B1: numbers 4–5
    B2: numbers 6–8
    B3: numbers 9–10

#### 1) Distribute
  
    8 → B2
    4 → B1
    5 → B1
    2 → B0
    10 → B3
    9 → B3
    7 → B2
    1 → B0
    6 → B2
    3 → B0

Buckets after distribution:
    
    B0: [2, 1, 3]
    B1: [4, 5]
    B2: [8, 7, 6]
    B3: [10, 9]

#### 2) Sort each bucket

    B0 → [1, 2, 3]
    B1 → [4, 5]
    B2 → [6, 7, 8]
    B3 → [9, 10]

#### 3) Concatenate buckets in order

    [1, 2, 3] + [4, 5] + [6, 7, 8] + [9, 10]  →  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

#### Output

    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
