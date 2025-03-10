package quickSort

func Partition(array []int) (int, []int) {
	cloned := make([]int, len(array))
	copy(cloned, array)

	i := 0
	right := len(cloned) - 1

	for j := 0; j < right; j++ {
		if cloned[j] <= cloned[right] {
			cloned[j], cloned[i] = cloned[i], cloned[j]
			i++
		}
	}

	cloned[i], cloned[right] = cloned[right], cloned[i]

	return i, cloned
}

func QuickSort(array []int) []int {
	if len(array) <= 1 {
		return array
	}

	cloned := make([]int, len(array))
	copy(cloned, array)

	pivot_index, partitioned_array := Partition(array)

	left := QuickSort(partitioned_array[:pivot_index])
	right := QuickSort(partitioned_array[pivot_index:])

	return append(left, right...)
}
