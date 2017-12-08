

var elem = document.getElementById('cat-image');
var counter = document.getElementById('click-counter');
elem.addEventListener('click', function(){
    var counterValue = counter.innerText;
    counterValue++;
    counter.innerText = counterValue;
}, false);
