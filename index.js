document.body.removeChild(document.querySelector('main'))
let newHeader = document.createElement('h1');
newHeader.id = "victory"
newHeader.innerHTML = "<h1>Brad is the champion</h1>";
newHeader.className = "victory";


document.head.append(newHeader);
