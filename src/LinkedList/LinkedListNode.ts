export class LinkedListNode {
    private _value: number;
    private _nextNode: LinkedListNode | null

    constructor(value: number, nextNode: LinkedListNode | null = null) {
        this._value = value;
        this._nextNode = nextNode;
    }

    get value() {
        return this._value;
    }

    set value(value: number) {
        this._value = value;
    }

    get nextNode() {
        return this._nextNode
    }

    set nextNode(node: LinkedListNode | null) {
        this._nextNode = node;
    }
}
