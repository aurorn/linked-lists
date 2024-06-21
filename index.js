import LinkedList from './LinkedList.js';

const list = new LinkedList();

list.append(2);
list.append(3);

list.prepend(1);



  console.log(list.toString());
  console.log('List size:', list.size());
  console.log('Head node value:', list.head().value);
  console.log('Tail node value:', list.tail().value);
  console.log('Node at index 1 value:', list.at(1).value);

  const poppedNode = list.pop();
  console.log('Popped node value:', poppedNode.value);

  console.log(list.toString());
  console.log('List size:', list.size()); 
  console.log('List contains 2:', list.contains(2)); 
  console.log('List contains 4:', list.contains(4));
  console.log('Index of value 2:', list.find(2)); 
  console.log('Index of value 4:', list.find(4)); 