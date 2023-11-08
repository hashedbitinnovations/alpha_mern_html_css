//creation and appending of new elements


let newLink = document.createElement('a');

newLink.innerText = 'New Link JS'

newLink.setAttribute('href', '#');

console.log(newLink);

let parentdiv = document.getElementsByClassName('article-links')[0];

parentdiv.appendChild(newLink);


let newImage=document.createElement('img');
newImage.setAttribute('src','https://economictimes.indiatimes.com/thumb/height-450,width-600,imgsize-92902,msid-96559100/the-rimac-nevera-is-now-the-fastest-electric-car-in-the-world-image-rimac.jpg?from=mdr');
let parentDiv=document.getElementsByClassName('article-links')[0];
newImage.setAttribute('class', 'carimage')
parentDiv.appendChild(newImage);

let testelem = document.getElementById('testelement');
testelem.append('abcdfghi');
testelem.prepend('prepand');
