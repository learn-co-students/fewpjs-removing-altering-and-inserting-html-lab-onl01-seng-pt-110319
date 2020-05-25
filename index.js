let main = document.querySelector("main#main");

main.remove();

let newHeader = document.createElement('h1');

newHeader.id = "victory"

let myName = "Henry"

newHeader.innerHTML = `${myName} is the champion`