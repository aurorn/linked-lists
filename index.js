import LinkedList from './LinkedList.js';

const list = new LinkedList();

list.append(2);
list.append(3);

list.prepend(1);

function displayList(list) {
    let current = list.headNode;
    let result = '';
    while (current) {
      result += `( ${current.value} ) -> `;
      current = current.nextNode;
    }
    result += 'null';
    return result;
  }

  console.log(displayList(list));
  console.log('List size:', list.size());
  console.log('Head node value:', list.head().value);
  console.log('Tail node value:', list.tail().value);
  console.log('Node at index 1 value:', list.at(1).value);

  const poppedNode = list.pop();
  console.log('Popped node value:', poppedNode.value);

  console.log(displayList(list));
  console.log('List size:', list.size()); 
  console.log('List contains 2:', list.contains(2)); 
  console.log('List contains 4:', list.contains(4)); 