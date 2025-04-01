package heapSort

import heap "data-structures-algorithms-problems/src/01_data_structures/07_heap/implementations/go"

func HeapSort(array []int) {
	heap.Heap(array)

	for i := len(array) - 1; i >= 1; i-- {
		array[0], array[i] = array[i], array[0]

		heap.Heapify(array, 0, i)
	}
}
