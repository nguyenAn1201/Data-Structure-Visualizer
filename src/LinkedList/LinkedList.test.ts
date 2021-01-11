import { LinkedList } from "./LinkedList"
import { LinkedListNode } from "./LinkedListNode";

describe("Linked List Tests", () => {
    test("insertToEnd inserts new node to linked list", () => {
        const testLinkedList: LinkedList = new LinkedList();
        testLinkedList.insertToEnd(1);
        expect(testLinkedList.head.value).toBe(1);
        expect(testLinkedList.head.nextNode).toBeNull();

        const expectedSecondNode: LinkedListNode = new LinkedListNode(2);
        testLinkedList.insertToEnd(2);

        expect(testLinkedList.head.nextNode!).toMatchObject(expectedSecondNode);
    })

    test("insertToStart inserts new node to beginning of linked list", () => {
        const testLinkedList: LinkedList = new LinkedList();
        testLinkedList.insertToEnd(1);

        const expectedNode: LinkedListNode = new LinkedListNode(2, testLinkedList.head);
        testLinkedList.insertToStart(2);

        expect(testLinkedList.head).toMatchObject(expectedNode)
    })

    test("insertAfterNode inserts new node after a certain node", () => {
        const testLinkedList: LinkedList = new LinkedList();
        testLinkedList.insertToEnd(1);
        testLinkedList.insertToEnd(2);

        const expectedNode: LinkedListNode = new LinkedListNode(3, testLinkedList.head.nextNode);
        testLinkedList.insertAfterNode(3, testLinkedList.head);

        expect(testLinkedList.head.nextNode).toMatchObject(expectedNode)
    })

    test("find return node base on value", () => {
        const testLinkedList: LinkedList = new LinkedList();
        testLinkedList.insertToEnd(1);

        expect(testLinkedList.find(1)).toMatchObject(new LinkedListNode(1));
    })

    test("find throws error when trying to find non-existing node with given value", () => {
        const testLinkedList: LinkedList = new LinkedList();
        testLinkedList.insertToEnd(1);

        expect(() => {testLinkedList.find(2)}).toThrowError("Node with value 2 not founded!")
    })

    test("delete deletes a node based on the node value", () => {
        const testLinkedList: LinkedList = new LinkedList();
        testLinkedList.insertToEnd(1);
        testLinkedList.insertToEnd(2);
        testLinkedList.insertToEnd(3);

        testLinkedList.delete(2);
        expect(testLinkedList.head.value).toEqual(1);
        expect(testLinkedList.head.nextNode?.value).toEqual(3);

        // delete head node
        testLinkedList.delete(1);
        expect(testLinkedList.head).toMatchObject({value: 3, nextNode: null});

        // delete last node within the linked list
        testLinkedList.delete(3);
        expect(testLinkedList.head).toEqual(null);
    })

    test("delete empty Linked List throw error", () => {
        const emptyLinkedList = new LinkedList();

        expect(() => emptyLinkedList.delete(1)).toThrowError("Linked List is Empty!")
    })

    test("delete non-existing node throw error", () => {
        const testLinkedList: LinkedList = new LinkedList();
        testLinkedList.insertToEnd(1);

        expect(() => testLinkedList.delete(2)).toThrowError('Cannot delete non-existing node with value 2!');
    })
})
