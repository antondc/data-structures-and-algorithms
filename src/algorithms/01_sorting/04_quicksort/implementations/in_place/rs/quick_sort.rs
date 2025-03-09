pub fn quick_sort(array: &mut [i32]) {
    if array.len() > 1 {
        let pivot_index = partition(array);

        quick_sort(&mut array[..pivot_index]);
        quick_sort(&mut array[pivot_index + 1..]);
    }
}

pub fn partition(array: &mut [i32]) -> usize {
    let mut i = 0;
    let right = array.len() - 1;

    for j in 0..right {
        if array[j] <= array[right] {
            array.swap(j, i);
            i += 1;
        }
    }

    array.swap(i, right);

    i
}
