package selectionSort

func SelectionSort(array []int) {
	for i := 0; i < len(array)-1; i++ {
		min_index := i

		for j := i + 1; j < len(array); j++ {
			if array[j] < array[min_index] {
				min_index = j
			}
		}

		if min_index != i {
			array[i], array[min_index] = array[min_index], array[i]
		}
	}
}
