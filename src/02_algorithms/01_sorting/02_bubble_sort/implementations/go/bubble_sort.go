package bubbleSort

func BubbleSort(unsortedArray []int) []int {
	clonedArray := unsortedArray

	for {
		swapped := false

		for i := 0; i < len(unsortedArray)-1; i++ {
			if clonedArray[i] > clonedArray[i+1] {
				clonedArray[i], clonedArray[i+1] = clonedArray[i+1], clonedArray[i]
				swapped = true
			}
		}

		if !swapped {
			break
		}
	}

	return clonedArray
}
