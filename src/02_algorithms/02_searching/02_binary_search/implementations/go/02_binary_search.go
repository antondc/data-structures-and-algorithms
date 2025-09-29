package binarySearch

import "fmt"

func BinarySearch(items []int, target int) (int, error) {
	leftIndex := 0
	rightIndex := len(items) - 1

	for leftIndex <= rightIndex {
		middleIndex := (leftIndex + rightIndex) / 2

		if target == items[middleIndex] {
			return target, nil
		} else if target < items[middleIndex] {
			rightIndex = middleIndex - 1
		} else {
			leftIndex = middleIndex + 1
		}
	}

	return -1, fmt.Errorf("index out of bounds")
}
