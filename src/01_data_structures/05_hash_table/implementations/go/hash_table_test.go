package hash_table

import (
	"reflect"
	"testing"
)

func TestCreatesEmptyStack(t *testing.T) {
	var emptyHashTable IHashTable[int] = &HashTable[int]{}

	hashTable := emptyHashTable.New(50)
	hashTable.Set("a", 1)

}

func TestSetItemToHashTable(t *testing.T) {
	var emptyHashTable IHashTable[int] = &HashTable[int]{}
	hashTable := emptyHashTable.New(50).Set("a", 1)
	result, ok := hashTable.Get("a")

	if !reflect.DeepEqual(ok, true) {
		t.Errorf("%v != %v", ok, true)
	}

	if !reflect.DeepEqual(result, 1) {
		t.Errorf("%v != %v", result, 1)
	}
}
