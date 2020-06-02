let search = document.querySelector('.selector-find');
let next = document.querySelector('.selector-next');
let prev = document.querySelector('.selector-prev');
let parent = document.querySelector('.nav-top');
let child = document.querySelector('.nav-bottom'); 
let left = document.querySelector('.nav-left');
let right = document.querySelector('.nav-right');
let input = document.querySelector('.selector');

let Select = {};

search.addEventListener("click", function(e) {
    unsetStyle(Select);
    if(document.querySelector(input.value)) {
        let elem = document.querySelector(input.value);
        setStyle(elem);
        next.disabled = false;
        prev.disabled = false;
        parent.disabled = false;
        child.disabled = false;
        Select.now = elem;
    }
});
next.addEventListener('click', function(e) {
    if(Select.now.nextElementSibling != undefined) {
        unsetStyle(Select);
        let nextElem = Select.now.nextElementSibling;
        Select.now = nextElem;
        setStyle(nextElem);
    }
});
prev.addEventListener('click', function(e) {
    if(Select.now.previousElementSibling != undefined) {
        unsetStyle(Select);
        let prevElem = Select.now.previousElementSibling;
        Select.now = prevElem;
        setStyle(prevElem);
    }
});
function setStyle(e) {
    e.style.outline = 'solid red 5px';
    e.style.backgroundColor = 'lightblue';
}
function unsetStyle(e) {
    if(e.now != undefined) {
        e.now.style.outline = 'none';
        e.now.style.backgroundColor = '';
    }
}


parent.addEventListener('click', function(e) {
    if(Select.now.parentElement != undefined) {
        unsetStyle(Select);
        let parentElem = Select.now.parentElement;
        Select.now = parentElem;
        setStyle(parentElem);
    }
});
child.addEventListener('click', function(e) {
    if(Select.now.children[0] != undefined) {
        unsetStyle(Select);
        let childElem = Select.now.children[0];
        Select.now = childElem;
        setStyle(childElem);
    }
});



