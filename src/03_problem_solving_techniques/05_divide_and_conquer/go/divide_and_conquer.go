package sum_array_items

func SumArrayItems(array []int) int {
	if len(array) == 1 {
		return array[0]
	}

	head := array[0]
	tail := array[1:]

	return head + SumArrayItems(tail)
}
