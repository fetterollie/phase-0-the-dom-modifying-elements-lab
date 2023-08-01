// Write your code here!
// console.log(document.getElementById('main'));

// document.getElementById('body').removeChild();

document.getElementById('main').remove();

console.log(document.getElementsByTagName('body'));

console.log('body:', document.querySelector('body'))

const newHeader = document.createElement("h1");

newHeader.id = 'victory'

newHeader.textContent = 'Chloe is the champion'

document.querySelector('body').append(newHeader);