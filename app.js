const king = document.querySelector(".chess-piece");
console.log(king);

const squares = document.querySelectorAll(".square");
console.log(squares);

const infoDisplay = document.querySelector("#info");

king.addEventListener("drag", dragging);
king.addEventListener("dragstart",dragStart);

squares.forEach(square => {
    square.addEventListener("dragover",dragOver)
    square.addEventListener("dragenter",dragEnter)
    square.addEventListener("dragleave",dragLeave)
    square.addEventListener("drop",drop)
    square.addEventListener("dragend",dragEnd)
})

let beignDragged
function dragging(e){
console.log(e.target.id + " is being dragged");
}

function dragStart(e){
    beignDragged = e.target;
    console.log("dragging has started on "+ beignDragged);
    infoDisplay.textContent = beignDragged.id + " is beign dragged";
}
function dragOver(e){
    console.log("You are dragging something over "+ e.target.classList)
}
function dragEnter(e){
    console.log("You are entering the spacce of "+ e.target.classList)
}

function dragLeave(e){
    console.log("You are leaving the spacce of "+ e.target.classList)
}

function dragDrop(e){
    console.log("You have dropped something into "+ e.target.classList)
}

function dragEnd(e){
    console.log("Your dragged has ended in"+ e.target.classList)
}