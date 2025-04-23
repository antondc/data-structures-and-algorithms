package linkedList

type Node[T comparable] struct {
	value T
	next  *Node[T]
}

type ILinkedList[T comparable] interface {
	prepend(value T) *LinkedList[T]
	append(value T) *LinkedList[T]
	remove(matcher func(T) bool) *LinkedList[T]
	find(matcher func(T) bool) bool
}

type LinkedList[T comparable] struct {
	head *Node[T]
}

func (list *LinkedList[T]) prepend(value T) *LinkedList[T] {
	// Create new node with value and head as next and prepend it
	list.head = &Node[T]{
		value: value,
		next:  list.head,
	}

	return list
}

func (list *LinkedList[T]) append(value T) *LinkedList[T] {
	// If list is empty, create and add node
	if list.head == nil {
		list.head = &Node[T]{value: value, next: nil}

		return list
	}

	// Iterate list
	current := list.head
	for current.next != nil {
		current = current.next
	}

	// At the end, append new node with value
	current.next = &Node[T]{
		value: value,
		next:  nil,
	}

	return list
}

func (list *LinkedList[T]) remove(matcher func(T) bool) *LinkedList[T] {
	// If list empty, return
	if list.head == nil {
		return list
	}

	// If first item, remove and return
	if matcher(list.head.value) {
		list.head = list.head.next

		return list
	}

	// Iterate list
	current := list.head
	for current.next != nil && !matcher(current.next.value) {
		current = current.next
	}

	// If last item, return
	if current.next == nil {
		return list
	}

	// Item found, link current to next next item and return
	current.next = current.next.next

	return list
}

func (list *LinkedList[T]) find(matcher func(T) bool) bool {
	// Iterate list
	current := list.head
	for current != nil {
		// If value found, return true
		if matcher(current.value) {
			return true
		}

		current = current.next
	}

	// If not found, return false
	return false
}
