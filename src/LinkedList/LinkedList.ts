import { LinkedListNode } from "./LinkedListNode";

export class LinkedList {
    private _head: LinkedListNode | null;

    constructor() {
        this._head =  null;
    }

    get head() {
        return this._head!;
    }

    set head(node: LinkedListNode) {
        this._head = node;
    }

    // O(1)
    insertToEnd(value: number): void {
        const newNode: LinkedListNode = new LinkedListNode(value);
        if (this._head === null) {
            this._head = newNode;
            return;
        }

        let currentNode = this.head;
        while (currentNode.nextNode !== null) {
            currentNode = currentNode.nextNode;
        }

        currentNode.nextNode = newNode;
    }

    // O(1)
    insertToStart(value: number): void {
        const newNode: LinkedListNode = new LinkedListNode(value);
        if (this._head === null) {
            this._head = newNode;
            return;
        }

        const currentNode = this._head;

        this._head = newNode;
        this._head.nextNode = currentNode;
   }

   // O(1) for insertion. O(n) for node searching
    insertAfterNode(value: number, previousNode: LinkedListNode): void {
        const newNode: LinkedListNode = new LinkedListNode(value);
        if (this._head === null || previousNode === null) {
            this._head = newNode;
            return
        }

        newNode.nextNode = previousNode.nextNode;
        previousNode.nextNode = newNode;
    }

    delete(value: number): void {
        if (this._head === null) {
            throw new Error("Linked List is Empty!")
        }

        let currentNode: LinkedListNode | null = this._head;
        let prevNode: LinkedListNode | null = null;

        if (this._head?.value === value && currentNode?.nextNode === null) {
            this._head = null;
            return
        }

        if (currentNode!.value === value && currentNode !== null) {
            this._head = currentNode!.nextNode;
            return
        }

        while (currentNode !== null && currentNode.value !== value) {
            prevNode = currentNode;
            currentNode = currentNode.nextNode;
        }

        if (currentNode === null) throw new Error(`Cannot delete non-existing node with value ${value}!`)

        prevNode!.nextNode = currentNode!.nextNode
    }

    find(value: number): LinkedListNode | null {
        if (this._head === null) {
            throw new Error("Linked List is Empty!")
        }

        let currentNode = this._head;

        while(currentNode.value !== value) {
            if (currentNode.nextNode !== null) {
                this.find(currentNode.nextNode!.value);
            } else {
                throw new Error(`Node with value ${value} not founded!`)
            }
        }
        return currentNode;
    }
}
