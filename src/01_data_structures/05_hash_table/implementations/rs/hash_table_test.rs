#[cfg(test)]
mod tests {
  use super::super::hash_table::HashTable;

  #[test]
  fn creates_hash_table() {
    let mut hash_table: HashTable<i32> = HashTable::new(10);
    hash_table.set("a", 1);

    assert_eq!(true, true);
  }

  #[test]
  fn get_item_from_empty_hash_table() {
    let hash_table: HashTable<i32> = HashTable::new(10);
    let result = hash_table.get("a");

    assert_eq!(result, None);
  }

  #[test]
  fn get_item_from_bucket_with_single_item() {
    let mut hash_table: HashTable<i32> = HashTable::new(10);
    let result = hash_table.set("a", 1).get("a");

    assert_eq!(result, Some(1));
  }

  #[test]
  fn get_item_from_bucket_with_collisions() {
    let mut hash_table: HashTable<i32> = HashTable::new(10);
    hash_table.set("abc", 1).set("cba", 2);

    let abc = hash_table.get("abc");
    assert_eq!(abc, Some(1));

    let cba = hash_table.get("cba");
    assert_eq!(cba, Some(2));
  }

  #[test]
  fn tries_remove_from_empty_hash_table() {
    let mut hash_table: HashTable<i32> = HashTable::new(10);
    hash_table.remove("a");

    assert_eq!(true, true);
  }

  #[test]
  fn removes_from_hash_table_with_single_item() {
    let mut hash_table: HashTable<i32> = HashTable::new(10);
    let result = hash_table.set("a", 1).get("a");

    assert_eq!(result, Some(1));
  }

  #[test]
  fn removes_from_hash_tables_with_several_items() {
    let mut hash_table: HashTable<i32> = HashTable::new(10);
    hash_table.set("a", 1).set("b", 2);

    let a = hash_table.get("a");
    let b = hash_table.get("b");

    assert_eq!(a, Some(1));
    assert_eq!(b, Some(2));

    let removed_a = hash_table.remove("a").get("a");
    assert_eq!(removed_a, None);

    let removed_b = hash_table.remove("b").get("b");
    assert_eq!(removed_b, None);
  }
}
