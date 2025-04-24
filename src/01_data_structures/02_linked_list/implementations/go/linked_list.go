package linkedList

type Node[T comparable] struct {
	Value T
	Next  *Node[T]
}

type ILinkedList[T comparable] interface {
	Prepend(value T) *LinkedList[T]
	Append(value T) *LinkedList[T]
	Remove(matcher func(T) bool) *LinkedList[T]
	Find(matcher func(T) bool) bool
}

type LinkedList[T comparable] struct {
	Head *Node[T]
}

func (list *LinkedList[T]) Prepend(value T) *LinkedList[T] {
	// Create new node with value and head as next and prepend it
	list.Head = &Node[T]{
		Value: value,
		Next:  list.Head,
	}

	return list
}

func (list *LinkedList[T]) Append(value T) *LinkedList[T] {
	// If list is empty, create and add node
	if list.Head == nil {
		list.Head = &Node[T]{Value: value, Next: nil}

		return list
	}

	// Iterate list
	current := list.Head
	for current.Next != nil {
		current = current.Next
	}

	// At the end, append new node with value
	current.Next = &Node[T]{
		Value: value,
		Next:  nil,
	}

	return list
}

func (list *LinkedList[T]) Remove(matcher func(T) bool) *LinkedList[T] {
	// If list empty, return
	if list.Head == nil {
		return list
	}

	// If first item, remove and return
	if matcher(list.Head.Value) {
		list.Head = list.Head.Next

		return list
	}

	// Iterate list
	current := list.Head
	for current.Next != nil && !matcher(current.Next.Value) {
		current = current.Next
	}

	// If last item, return
	if current.Next == nil {
		return list
	}

	// Item found, link current to next next item and return
	current.Next = current.Next.Next

	return list
}

func (list *LinkedList[T]) Find(matcher func(T) bool) bool {
	// Iterate list
	current := list.Head
	for current != nil {
		// If value found, return true
		if matcher(current.Value) {
			return true
		}

		current = current.Next
	}

	// If not found, return false
	return false
}
