package linkedList

type Node struct {
	value int
	next  *Node
}

type LinkedList struct {
	head *Node
}

func (list *LinkedList) prepend(value int) *LinkedList {
	if list.head == nil {
		newNode := &Node{value: value, next: nil}
		list.head = newNode

		return list
	}

	list.head = &Node{
		value: value,
		next:  list.head,
	}

	return list
}

func (list *LinkedList) append(value int) *LinkedList {
	if list.head == nil {
		list.head = &Node{value: value, next: nil}

		return list
	}

	current := list.head

	for current.next != nil {
		current = current.next
	}

	current.next = &Node{
		value: value,
		next:  nil,
	}

	return list
}

func (list *LinkedList) remove(value int) *LinkedList {
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

func (list *LinkedList) find(value int) bool {
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
