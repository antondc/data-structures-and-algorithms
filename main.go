package main

import (
	mergeSort "data-structures-algorithms-problems/src/algorithms/01_sorting/01_merge_sort/implementations/go"
	bubbleSort "data-structures-algorithms-problems/src/algorithms/01_sorting/02_bubble_sort/implementations/go"
	insertionSort "data-structures-algorithms-problems/src/algorithms/01_sorting/03_insertion_sort/implementations/go"
	"fmt"
)

func main() {
	unsortedArray := []int{1, 3, 5}
	resultMergeSort := mergeSort.MergeSort(unsortedArray)
	fmt.Println(resultMergeSort)
	resultBubbleSort := bubbleSort.BubbleSort(unsortedArray)
	fmt.Println(resultBubbleSort)
	resultInsertionSort := insertionSort.InsertionSort(unsortedArray)
	fmt.Println(resultInsertionSort)
}
