package hash_table

import (
	linkedList "data-structures-algorithms-problems/src/01_data_structures/02_linked_list/implementations/go"
)

var DEFAULT_HASH_TABLE_SIZE = 50

type IHashTable[T comparable] interface {
	Set(key string, value T) IHashTable[T]
	Get(key string) (T, bool)
	Remove(key string) IHashTable[T]
}

type HashTable[T comparable] struct {
	buckets []*HashTableLinkedList[T]
	size    int
}

func NewHashTable[T comparable](size int) HashTable[T] {
	if size == 0 {
		size = DEFAULT_HASH_TABLE_SIZE
	}

	buckets := make([]*HashTableLinkedList[T], size)

	return HashTable[T]{
		buckets: buckets,
		size:    size,
	}
}

func (hashTable *HashTable[T]) hash(key string) int {
	var hash int

	for _, r := range key {
		hash += int(r)
	}

	result := hash % hashTable.size

	return result
}

func (hashTable HashTable[T]) Set(key string, value T) IHashTable[T] {
	index := hashTable.hash(key)
	bucket := hashTable.buckets[index]

	if bucket == nil {
		hashTable.buckets[index] = &HashTableLinkedList[T]{
			LinkedList: &linkedList.LinkedList[HashTableLinkedListItem[T]]{},
		}

		bucket = hashTable.buckets[index]
	}

	bucket.Append(HashTableLinkedListItem[T]{Key: key, Value: value})

	return hashTable
}

func (hashTable HashTable[T]) Get(key string) (T, bool) {
	var zero T
	index := hashTable.hash(key)
	bucket := hashTable.buckets[index]

	if bucket == nil {
		return zero, false
	}

	var item, ok = bucket.GetItemIf(func(v HashTableLinkedListItem[T]) bool { return v.Key == key })

	if !ok {
		return zero, false
	}

	return item, true
}

func (hashTable HashTable[T]) Remove(key string) IHashTable[T] {
	index := hashTable.hash(key)
	bucket := hashTable.buckets[index]

	if bucket != nil {
		bucket.Remove(func(item HashTableLinkedListItem[T]) bool { return item.Key == key })
	}

	return hashTable
}
