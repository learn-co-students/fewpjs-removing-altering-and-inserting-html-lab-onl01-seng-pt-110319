// Write your code here!

//index.html
//after index.js is processed

//1) no longer has DOM node 'main#main'

//2) has a 'newHeader' variable that points to node 'h1#victory'

//3) has a 'newHeader' variable that points to node 'h1#victory'

//4) has a 'newHeader' variable that points to node 'h1#victory' with "YOUR-NAME is the champion" inside

//-----------------------------------------------------------------------------------------------------------//

let remover = document.querySelector("main#main");
    remover.remove();

let newHeader = document.createElement("h1");
    newHeader.id = "victory";
    newHeader.innerHTML = "Jharell is the champion";