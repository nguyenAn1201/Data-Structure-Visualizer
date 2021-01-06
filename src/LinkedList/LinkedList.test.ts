import { ErrorSharp } from "@material-ui/icons";
import { LinkedList } from "./LinkedList"
import { LinkedListNode } from "./LinkedListNode";

describe("Linked List Tests", () => {
    test("insertToEnd inserts new node to linked list", () => {
        const testLinkedList: LinkedList = new LinkedList();
        testLinkedList.insertToEnd(1);
        expect(testLinkedList.root.value).toBe(1);
        expect(testLinkedList.root.nextNode).toBeNull;

        const expectedSecondNode: LinkedListNode = new LinkedListNode(2);
        testLinkedList.insertToEnd(2);

        expect(testLinkedList.root.nextNode!).toMatchObject(expectedSecondNode);
    })

    test("insertToStart inserts new node to beginning of linked list", () => {
        const testLinkedList: LinkedList = new LinkedList();
        testLinkedList.insertToEnd(1);

        const expectedNode: LinkedListNode = new LinkedListNode(2, testLinkedList.root);
        testLinkedList.insertToStart(2);

        expect(testLinkedList.root).toMatchObject(expectedNode)
    })

    test("insertAfterNode inserts new node after a certain node", () => {
        const testLinkedList: LinkedList = new LinkedList();
        testLinkedList.insertToEnd(1);
        testLinkedList.insertToEnd(2);

        const expectedNode: LinkedListNode = new LinkedListNode(3, testLinkedList.root.nextNode);
        testLinkedList.insertAfterNode(3, testLinkedList.root);

        expect(testLinkedList.root.nextNode).toMatchObject(expectedNode)
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

        expect(testLinkedList.root.value).toEqual(1);
        expect(testLinkedList.root.nextNode?.value).toEqual(3);
    })

    test("delete empty Linked List throw error", () => {
        const emptyLinkedList = new LinkedList();

        expect(() => emptyLinkedList.delete(1)).toThrowError("Linked List is Empty!")
    })
})
