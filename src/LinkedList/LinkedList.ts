import { LinkedListNode } from "./LinkedListNode";

export class LinkedList {
    private _root: LinkedListNode | null;

    constructor() {
        this._root =  null;
    }

    get root() {
        return this._root!;
    }

    set root(node: LinkedListNode) {
        this._root = node;
    }

    // O(1)
    insertToEnd(value: number): void {
        const newNode: LinkedListNode = new LinkedListNode(value);
        if (this._root === null) {
            this._root = newNode;
            return;
        }

        let currentNode = this.root;
        while (currentNode.nextNode !== null) {
            currentNode = currentNode.nextNode;
        }

        currentNode.nextNode = newNode;
    }

    // O(1)
    insertToStart(value: number): void {
        const newNode: LinkedListNode = new LinkedListNode(value);
        if (this._root === null) {
            this._root = newNode;
            return;
        }

        const tempNode = this._root;

        this._root = newNode;
        this._root.nextNode = tempNode;
   }

   // O(1) for insertion. O(n) for node searching
    insertAfterNode(value: number, previousNode: LinkedListNode): void {
        const newNode: LinkedListNode = new LinkedListNode(value);
        if (this._root === null || previousNode === null) {
            this._root = newNode;
            return
        }

        newNode.nextNode = previousNode.nextNode;
        previousNode.nextNode = newNode;
    }

    delete(value: number): void {
        if (this._root === null) {
           throw new Error("Linked List is Empty!");
        }

        let currentNode = this._root;
        while(currentNode.nextNode !== null) {
            if (currentNode.nextNode?.value === value) {
                currentNode.nextNode = currentNode.nextNode.nextNode;
            } else {
                currentNode = currentNode.nextNode;
            }
        }
    }

    find(value: number): LinkedListNode | null {
        if (this._root === null) {
            throw new Error("Linked List is Empty!")
        }

        let currentNode = this._root;

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
