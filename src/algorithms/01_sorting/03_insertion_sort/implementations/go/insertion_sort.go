package insertionSort

func InsertionSort(array []int) {
	for i := 1; i < len(array); i++ {
		key := array[i]
		j := i

		for j > 0 && array[j-1] > key {
			array[j] = array[j-1]
			j--
		}

		array[j] = key
	}

}
