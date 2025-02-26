package main

import (
	mergeSort "data-structures-algorithms-problems/src/algorithms/01_sorting/01_merge_sort/implementations/go"
	"fmt"
)

func main() {
	left := []int{1, 3, 5}
	right := []int{2, 4, 6}
	result := mergeSort.MergeAlreadySortedArrays(left, right)
	fmt.Println(result) // Output: [1 2 3 4 5 6]
}
