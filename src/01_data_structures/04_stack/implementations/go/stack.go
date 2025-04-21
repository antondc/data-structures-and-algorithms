package stack

type Stack[T comparable] struct {
	storage []T
}

func (stack *Stack[T]) push(value T) *Stack[T] {
	stack.storage = append(stack.storage, value)

	return stack
}

func (stack *Stack[T]) pop() (T, bool) {
	var zero T

	if len(stack.storage) == 0 {
		return zero, false
	}

	popedElement := stack.storage[stack.length()-1]
	stack.storage = stack.storage[0 : stack.length()-1]

	return popedElement, true
}

func (stack Stack[T]) isEmpty() bool {
	return len(stack.storage) == 0
}

func (stack Stack[T]) length() int {
	return len(stack.storage)
}

func (stack Stack[T]) peek() (T, bool) {
	var zero T

	if len(stack.storage) == 0 {
		return zero, false
	}

	return stack.storage[stack.length()-1], true
}
