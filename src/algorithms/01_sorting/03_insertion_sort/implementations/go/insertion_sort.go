package insertionSort

func InsertionSort(unsortedArray []int) []int {
	clonedArray := unsortedArray

	for i := 1; i < len(unsortedArray); i++ {
		key := clonedArray[i]
		j := i

		for j > 0 && clonedArray[j-1] > key {
			clonedArray[j] = clonedArray[j-1]
			j--
		}

		clonedArray[j] = key
	}

	return clonedArray
}
