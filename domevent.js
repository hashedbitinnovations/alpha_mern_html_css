// mouse - hover, mousein, mouseout, click
// keyboard - keyup, keydown
// touch - touchstart touchend, touchmove
// form - focus, blur, change, select, submit, reset
// window - scroll, resize, load


//dom events


function applyColor() {
    document.getElementById('maintext').style.color = 'red';
}


// button, hide an Element
// button, counter ++
// on click, button color change




function showfn() {
    document.getElementById('hiddenpara').style.display = 'block';
}

//HW
// 1) create another button to hide same paragraph.
// 2) use same first button to show or hide the same paragraph and also update the content of the button.


function btnColorUpdate() {
    document.getElementById('btnColorUpdate').style.backgroundColor = 'red';
}

//HW
// in the above function update color among the entries of an array.
// ['red', 'green', 'blue', 'yellow', '#a21100', '#ad0022', '#1100dd']


function btnColorRandomUpdate() {
    let array = ['red', 'green', 'blue', 'yellow', '#a21100', '#ad0022', '#1100dd'];

    //let index = parseInt(Math.random() * 10) 
    //- 0 to 9

    let index = Math.floor(Math.random() * array.length)

    let finalColor = array[index];
    console.log(index, finalColor)
    document.getElementById('btnColorRandomUpdate').style.backgroundColor = finalColor;
}



// #jh1100
// RGB - color coding


// rgba(50, 40, 100, 0.5)

// rgba(255, 255, 255, 1)- white
// rgba(0, 0, 0, 1) - black

// 2 byte - 2 byte - 2 byte blue
// bit - 0 or 1
// byte - 000000 - 111111
// Decimal - 0 - 255
// Binary - 
// Hex - 00 - FF
// RGB - Red Green Blue
// Soft colors - RGB

// HS - 
// CMYK

// 000000 - ffffff

// Math.random
// 0.87263423462476 * 10
// 8.87358726365827365
// parseInt()

var num = 0

function counterIncrease() {
    num++
    // let numrandom = parseInt(Math.random()*1000000000)

    document.getElementById('counterValue').innerText = num;
}



// dropdown on hover
// modal
// accordion


//forms
//event listener
//event propagation


function submitform(event) {
    
    let name = document.getElementById('form_name').value;
    let city = document.getElementById('form_city').value;

    console.log('Name - ', name)
    console.log('City - ', city)

    // event.preventDefault();
    //return false;
}

function displayleftpanel () {
    console.log('displayleftpanel');
}

function displayleftpanel2 () {
    console.log('display left panel 2');
}

function colorRed() {
    console.log('color - red')
}


let element = document.getElementById('displayleftpanel_button2');

element.addEventListener('click', displayleftpanel2);
element.addEventListener('click', colorRed);


//element.removeEventListener('click', colorRed);


let element2 = document.getElementById('eventpropagation');
element2.addEventListener('click', function() {
    console.log('--------eventpropagation--------')
});


let element3 = document.getElementById('eventpropagation_inner');
element3.addEventListener('click', function(event) {
    event.stopPropagation();
    console.log('--------eventpropagation inner--------')
});



// Event Bubbling and Event Capturing