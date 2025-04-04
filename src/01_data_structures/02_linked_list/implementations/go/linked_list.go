package linkedList

type Node struct {
	value int
	next  *Node
}

type LinkedList struct {
	head *Node
}

func (list *LinkedList) prepend(value int) {
	if list.head == nil {
		newNode := &Node{value: value, next: nil}
		list.head = newNode

		return
	}

	list.head = &Node{
		value: value,
		next:  list.head,
	}
}

func (list *LinkedList) append(value int) {
	if list.head == nil {
		list.head = &Node{value: value, next: nil}

		return
	}

	current := list.head

	for current.next != nil {
		current = current.next
	}

	current.next = &Node{
		value: value,
		next:  nil,
	}
}

func (list *LinkedList) remove(value int) {
	if list.head == nil {
		return
	}

	if list.head.value == value {
		return
	}

	current := list.head

	for current.next != nil && current.next.value != value {
		current = current.next
	}

	if current.next != nil {
		current.next = current.next.next

		return
	}
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
