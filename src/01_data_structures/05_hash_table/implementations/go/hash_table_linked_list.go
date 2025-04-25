package hash_table

import linkedList "data-structures-algorithms-problems/src/01_data_structures/02_linked_list/implementations/go"

type HashTableLinkedListItem[T comparable] struct {
	Key   string
	Value T
}

type IHashTableLinkedList[T comparable] interface {
	Prepend(hashTableLinkedListItem HashTableLinkedListItem[T]) IHashTableLinkedList[T]
	Append(hashTableLinkedListItem HashTableLinkedListItem[T]) IHashTableLinkedList[T]
	Remove(matcher func(HashTableLinkedListItem[T]) bool) IHashTableLinkedList[T]
	Find(matcher func(HashTableLinkedListItem[T]) bool) bool
	GetItemIf(matcher func(HashTableLinkedListItem[T]) bool) (T, bool)
}

type HashTableLinkedList[T comparable] struct {
	LinkedList *linkedList.LinkedList[HashTableLinkedListItem[T]]
}

func (this *HashTableLinkedList[T]) Prepend(hashTableLinkedListItem HashTableLinkedListItem[T]) IHashTableLinkedList[T] {
	this.LinkedList.Prepend(hashTableLinkedListItem)

	return this
}

func (this *HashTableLinkedList[T]) Append(hashTableLinkedListItem HashTableLinkedListItem[T]) IHashTableLinkedList[T] {
	this.LinkedList.Append(hashTableLinkedListItem)

	return this
}

func (this *HashTableLinkedList[T]) Remove(matcher func(HashTableLinkedListItem[T]) bool) IHashTableLinkedList[T] {
	this.LinkedList.Remove(matcher)

	return this
}

func (this *HashTableLinkedList[T]) Find(matcher func(HashTableLinkedListItem[T]) bool) bool {
	return this.LinkedList.Find(matcher)
}

func (this *HashTableLinkedList[T]) GetItemIf(matcher func(HashTableLinkedListItem[T]) bool) (T, bool) {
	var zero T

	current := this.LinkedList.Head

	for current != nil {
		if matcher(current.Value) {
			return current.Value.Value, true
		}

		current = current.Next
	}

	return zero, false
}
