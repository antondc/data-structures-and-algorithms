package mergeSort

// MergeAlreadySortedArrays Function to merge two sorted slices
func MergeAlreadySortedArrays(left []int, right []int) []int {
	var sortedItems []int

	for len(left) > 0 && len(right) > 0 {
		if left[0] <= right[0] {
			sortedItems = append(sortedItems, left[0])
			left = left[1:]
		} else {
			sortedItems = append(sortedItems, right[0])
			right = right[1:]
		}
	}

	// Append any remaining elements
	sortedItems = append(sortedItems, left...)
	sortedItems = append(sortedItems, right...)

	return sortedItems
}

func MergeSort(unsortedArray []int) []int {
	if len(unsortedArray) <= 1 {
		return unsortedArray
	}

	// Split the array into two halves
	mid := len(unsortedArray) / 2
	left := MergeSort(unsortedArray[:mid])
	right := MergeSort(unsortedArray[mid:])

	return MergeAlreadySortedArrays(left, right)
}
