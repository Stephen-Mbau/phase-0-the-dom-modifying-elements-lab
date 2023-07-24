// Write your code here!
const mainElement = document.getElementById('main');
mainElement.remove();
const newHeader = document.createElement('h1');
newHeader.setAttribute('id','victory');
const bodyName = document.querySelector('body');
bodyName.appendChild(newHeader);
document.getElementsByTagName("h1")[0].innerHTML="Stephen is the champion";
