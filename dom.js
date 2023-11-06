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