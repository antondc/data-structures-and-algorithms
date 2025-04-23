import { LinkedList } from "../../../02_linked_list/implementations/ts/linked_list";

/*
  LINKED LIST FOR HASH TABLES
  In hash tables we will store items in our linked lists as key, value tuples.
  To find an item by the key we need a method that receives a matcher function, and will return the item that matches it.
  Thus, we extend the Linked list to add this behavior.
*/
interface IHashTableLinkedList<T> extends LinkedList<T> {
  getItemByCallback(matcher: (arg: T) => boolean): T | null;
}

export class HashTableLinkedList<T>
  extends LinkedList<T>
  implements IHashTableLinkedList<T>
{
  getItemByCallback(matcher: (arg: T) => boolean): T | null {
    let current = this.head;

    while (current !== null) {
      // If found
      if (matcher(current.value)) {
        return current.value;
      }
      current = current.next;
    }

    // Not found
    return null;
  }
}
