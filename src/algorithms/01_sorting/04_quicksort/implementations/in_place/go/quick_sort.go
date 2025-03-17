package quickSort

func Partition(array []int) int {
	right := len(array) - 1
	i := 0

	for j := 0; j < right; j++ {
		if array[j] <= array[right] {
			array[i], array[j] = array[j], array[i]
			i++
		}
	}

	array[i], array[right] = array[right], array[i]

	return i
}

func QuickSort(array []int) {
	if len(array) > 1 {
		var pivot_index = Partition(array)

		QuickSort(array[:pivot_index])
		QuickSort(array[pivot_index+1:])
	}
}
