console.log('DOM js added.')

let articleone = document.getElementById('articleone');

console.log(articleone.innerHTML)

articleone.innerHTML = 'New Article 1';


let articles = document.getElementsByClassName('py-2');

console.log(articles)


articles[1].innerHTML = 'New Article 2';

for (let single_element of articles) {
    single_element.innerHTML = 'New Article 2';
}


let articlestemp = document.getElementsByTagName('li');

console.log(articlestemp);

for (let single_element of articlestemp) {
    console.log(single_element.innerText)
}




let linkone = document.querySelector('#articleone')
linkone.innerHTML = 'Link 1 Updated.'


let linksall = document.querySelectorAll('.py-2')

console.log(linksall)


//articles[1].innerHTML = 'New Article 2';

for (let single_element of linksall) {
    single_element.innerHTML = 'Link 2';
}



// NodeList vs HTMLCollection
// innerHTML, innerText, textContent


let testelement = document.getElementById('testelement');
console.log('textContent', testelement.textContent);
console.log('innerHTML',testelement.innerHTML);
console.log('innerText',testelement.innerText);





let articleslisttemp = document.getElementsByClassName('article-links');
//articleslisttemp[0];

console.log(articleslisttemp[0].nodeName)
console.log(articleslisttemp[0].nodeType)
console.log(articleslisttemp[0].nodeValue)


// element - 1
// atrribute - 2
// text node - 3
// comments - 8

//returns HTMLCollection
console.log(articleslisttemp[0].children);

//returns NodeList
console.log(articleslisttemp[0].childNodes);

console.log(articleslisttemp[0].childElementCount);


//firstElement, lastElement
articleslisttemp[0].children[0].innerText = 'New Link using Children'
articleslisttemp[0].children[0].nextElementSibling.innerText = 'this is next sibling link'


let chelement = document.getElementById('testelementchildspan').parentElement;

console.log(chelement);



//style thru js
testelement = document.getElementById('testelement');

testelement.style.color = '#ff0000';
testelement.style.fontWeight = 'bold';
testelement.style.backgroundColor = '#007700';


console.log(testelement.getAttribute('id'));



let images = document.querySelectorAll('.tiles-container .card img.card-img-top');
console.log(images);



console.log(images[1].getAttribute('src'));

//Chnage all three image url using above method

// images[1].setSttribute('src', 'new image url');
console.log(document.querySelector('.btn.btn-success').classList);
console.log(document.querySelector('.btn.btn-success').classList.remove('btn-success'));
console.log(document.querySelector('.btn').classList.add('btn-warning'));

document.querySelector('.btn.btn-warning').removeAttribute('class');

console.log(document.querySelectorAll('button')[1].hasAttribute('class'));




//hide and show elements
//creation and appending of new elements
//dom events