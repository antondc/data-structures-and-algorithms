package queue

type ArrayQueue[T comparable] struct {
	storage []T
}

func (queue *ArrayQueue[T]) enqueue(value T) *ArrayQueue[T] {
	queue.storage = append(queue.storage, value)

	return queue
}

func (queue *ArrayQueue[T]) dequeue() (T, bool) {
	var zero T

	if len(queue.storage) == 0 {
		return zero, false
	}

	dequeuedElement := queue.storage[0]
	queue.storage = queue.storage[1:]

	return dequeuedElement, true
}

func (queue ArrayQueue[T]) isEmpty() bool {
	return len(queue.storage) == 0
}

func (queue ArrayQueue[T]) length() int {
	return len(queue.storage)
}

func (queue ArrayQueue[T]) peek() T {
	return queue.storage[0]
}
