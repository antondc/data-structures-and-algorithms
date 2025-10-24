import { ListNode, mergeTwoLists } from './playground';

describe('Playground', () => {
  test('Returns correct result', () => {
    const list1 = new ListNode(1, new ListNode(2, new ListNode(4, null)));
    const list2 = new ListNode(1, new ListNode(3, new ListNode(4, null)));
    const result = mergeTwoLists(list1, list2);

    const expectedResult = {
      val: 1,
      next: {
        val: 1,
        next: {
          val: 2,
          next: {
            val: 3,
            next: {
              val: 4,
              next: {
                val: 4,
                next: null,
              },
            },
          },
        },
      },
    };
    expect(result).toEqual(expectedResult);
  });

  test('Returns correct result', () => {
    const list1 = null;
    const list2 = null;
    const result = mergeTwoLists(list1, list2);

    const expectedResult = null;
    expect(result).toEqual(expectedResult);
  });

  test('Returns correct result', () => {
    const list1 = new ListNode(0);
    const list2 = null;
    const result = mergeTwoLists(list1, list2);

    const expectedResult = {
      val: 0,
      next: null,
    };
    expect(result).toEqual(expectedResult);
  });
});
