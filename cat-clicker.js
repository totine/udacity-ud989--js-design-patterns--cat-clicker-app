
var numberOfCats = 2;
var catsToClick = [];
var counter = document.getElementById('click-counter');
var catsNames = ['Nick', 'Mruczek'];


for (var i=1; i<=numberOfCats; i++) {
    catsToClick.push(document.getElementById('cat' + i + '-image'));
    document.getElementById('cat' + i + '-name').innerText = catsNames[i-1];
}


for (i=0; i<catsToClick.length; i++) {
    catsToClick[i].addEventListener('click', function() {
            var counterValue = counter.innerText;
            counterValue++;
            counter.innerText = counterValue;
        }
            , false);
}

