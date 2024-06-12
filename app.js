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
    square.addEventListener("drop",dragDrop)
    square.addEventListener("dragend",dragEnd)
})

let beignDragged
function dragging(e){
console.log(e.target.id + " is being dragged");
}

function dragStart(e){
    beingDragged = e.target;
    console.log("dragging has started on "+ beingDragged);
    infoDisplay.textContent = beingDragged.id + " is beign dragged";
}
function dragOver(e){
    e.preventDefault();
    console.log("You are dragging something over "+ e.target.classList)
}
function dragEnter(e){
    console.log("You are entering the spacce of "+ e.target.classList)
}

function dragLeave(e){
    console.log("You are leaving the spacce of "+ e.target.classList)
}

function dragDrop(e){
    e.target.append(beingDragged)
    console.log("You have dropped something into "+ e.target.classList)
}

function dragEnd(e){
    console.log("Your dragged has ended in"+ e.target.classList)
}