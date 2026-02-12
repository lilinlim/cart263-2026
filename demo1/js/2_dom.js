window.onclick = setup

document.querySelector("#two").children[0].innerHTML = "<h2> this is now a header</h2>";

function setup(){
    let newDivTwo = document.createElement("div");
    newDivTwo.classList.add("square_shape");
    newDivTwo.innerHTML = " NEW ELEMENT TWO ";
    newDivTwo.style.backgroundColor = "yellow";
    newDivTwo.querySelector("p").style.color = "black"
    // access parent element
    let sibling = document.querySelector("#three")
    let parentElementAgain = document.querySelector(".wrapper_flex_box")
    parentElementAgain.insertBefore(newDivTwo,sibling);
}