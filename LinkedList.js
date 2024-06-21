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

    pop() {
        if (!this.headNode) {
          return null;
        }
        if (!this.headNode.nextNode) {
          const poppedNode = this.headNode;
          this.headNode = null;
          this.length--;
          return poppedNode;
        }
        let current = this.headNode;
        while (current.nextNode.nextNode) {
          current = current.nextNode;
        }
        const poppedNode = current.nextNode;
        current.nextNode = null;
        this.length--;
        return poppedNode;
    }

    contains(value) {
        let current = this.headNode;
        while (current) {
          if (current.value === value) {
            return true;
          }
          current = current.nextNode;
        }
        return false;
    }
      
}