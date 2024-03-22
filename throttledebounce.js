console.log('js file runing ')
function testfn() {
    console.log('test')
}



function normalfn(value) {
	//console.log('input - ')
	console.log('input - ', value)
}

////////////////////////////////////////
// Throttling
function printfn() {
    console.log('print fn called')
    let temp = document.getElementById('trottleinputid').value;
    console.log(temp);
}

var interval1;

function throttlefn() {
    if(!interval1) {
        interval1 = setInterval(printfn, 3000)
    }   
}

function cancelthrottle() {
    console.log('event cancelled.')
    clearInterval(interval1)
}

////////////////////////////////////////
//Debounce

function printfn2() {
    console.log('print fn 2 called')
    let temp = document.getElementById('debounceinputid').value;
    console.log(temp);
}

var timer1;
function debouncefn () {
    if(timer1) {
        console.log('XXXXXXXXXXXX - clearing old timer')
        clearTimeout(timer1)
    }
    console.log('############ - setting new timer')
    timer1 = setTimeout(printfn2, 3000)
}


////////////////////////////////////////