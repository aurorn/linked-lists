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