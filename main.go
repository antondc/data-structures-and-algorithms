package main

import (
	mergeSort "data-structures-algorithms-problems/src/algorithms/01_sorting/01_merge_sort/implementations/go"
	bubbleSort "data-structures-algorithms-problems/src/algorithms/01_sorting/02_bubble_sort/implementations/go"
	"fmt"
)

func main() {
	left := []int{1, 3, 5}
	right := []int{2, 4, 6}
	resultMergeSort := mergeSort.MergeAlreadySortedArrays(left, right)
	fmt.Println(resultMergeSort)
	resultBubbleSort := bubbleSort.BubbleSort(left)
	fmt.Println(resultBubbleSort)
}
