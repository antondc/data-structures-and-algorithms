package disjoint_set

import "fmt"

type DisjointSet struct {
	representatives []int
	ranks           []int
}

func NewDisjointSet(size int) *DisjointSet {
	ds := &DisjointSet{
		representatives: make([]int, size),
		ranks:           make([]int, size),
	}

	// Initialize each element to be its own representative
	for i := range size {
		ds.representatives[i] = i
		ds.ranks[i] = 0
	}

	return ds
}

func (ds *DisjointSet) Find(index int) (int, error) {
	if index < 0 || index >= len(ds.representatives) {
		return -1, fmt.Errorf("Index out of bounds")
	}

	if ds.representatives[index] == index {
		return ds.representatives[index], nil
	}

	representative, err := ds.Find(ds.representatives[index])
	if err != nil {
		return -1, fmt.Errorf("Index out of bounds")
	}

	ds.representatives[index] = representative

	return ds.representatives[index], nil
}

func (ds *DisjointSet) Union(a int, b int) (*DisjointSet, error) {
	if a < 0 || b < 0 || a > len(ds.representatives) || b > len(ds.representatives) {
		return ds, fmt.Errorf("Index out of bounds")
	}

	representativeA, _ := ds.Find(a)
	representativeB, _ := ds.Find(b)

	if representativeA == representativeB {
		return ds, nil
	}

	if ds.ranks[representativeA] < ds.ranks[representativeB] {
		ds.representatives[representativeA] = representativeB
	} else if ds.ranks[representativeA] > ds.ranks[representativeB] {
		ds.representatives[representativeB] = representativeA
	} else {
		ds.representatives[representativeB] = representativeA
		ds.ranks[representativeA] = ds.ranks[representativeA] + 1
	}

	return ds, nil
}

func (ds *DisjointSet) Connected(a int, b int) (bool, error) {
	a, err1 := ds.Find(a)
	b, err2 := ds.Find(b)

	if err1 != nil {
		return false, err1
	}

	if err2 != nil {
		return false, err2
	}

	return a == b, nil
}
