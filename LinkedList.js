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

    head() {
        return this.headNode;
    }

    tail() {
        let current = this.headNode;
        if (!current) {
          return null;
        }
        while (current.nextNode) {
          current = current.nextNode;
        }
        return current;
    }

    at(index) {
        if (index >= this.length || index < 0) {
          return null;
        }
        let current = this.headNode;
        for (let i = 0; i < index; i++) {
          current = current.nextNode;
        }
        return current;
    }
}