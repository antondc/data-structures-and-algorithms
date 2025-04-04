package linkedList

type Node[T comparable] struct {
	value T
	next  *Node[T]
}

type LinkedList[T comparable] struct {
	head *Node[T]
}

func (list *LinkedList[T]) prepend(value T) *LinkedList[T] {
	if list.head == nil {
		newNode := &Node[T]{value: value, next: nil}
		list.head = newNode

		return list
	}

	list.head = &Node[T]{
		value: value,
		next:  list.head,
	}

	return list
}

func (list *LinkedList[T]) append(value T) *LinkedList[T] {
	if list.head == nil {
		list.head = &Node[T]{value: value, next: nil}

		return list
	}

	current := list.head

	for current.next != nil {
		current = current.next
	}

	current.next = &Node[T]{
		value: value,
		next:  nil,
	}

	return list
}

func (list *LinkedList[T]) remove(value T) *LinkedList[T] {
	if list.head == nil {
		return list
	}

	if list.head.value == value {
		return list
	}

	current := list.head

	for current.next != nil && current.next.value != value {
		current = current.next
	}

	if current.next != nil {
		current.next = current.next.next

		return list
	}

	return list
}

func (list *LinkedList[T]) find(value T) bool {
	if list.head == nil {
		return false
	}

	current := list.head

	for current.next != nil {
		current = current.next

		return current.value == value
	}

	return false
}
