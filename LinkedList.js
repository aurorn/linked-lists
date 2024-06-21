import Node from './Node.js';

export default class LinkedList {
    constructor() {
        this.headNode = null;
        this.length = 0;
    }


    append(value) {
        const newNode = new Node(value);
        if (!this.headNode) {
        this.headNode = newNode;
        } else {
        let current = this.headNode;
        while (current.nextNode) {
            current = current.nextNode;
        }
        current.nextNode = newNode;
        }
        this.length++;
    }

    prepend(value) {
        const newNode = new Node(value, this.headNode);
        this.headNode = newNode;
        this.length++;
      }

      size() {
        return this.length;
      }
}