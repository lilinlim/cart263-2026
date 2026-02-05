let speedX=1;
let fastSpeedX=15;
let turbo = false;

window.onload = function(){

    //remove both top
    window.setTimeout(addTimeoutText,2000);
    function addTimeoutText(){
        let parent = document.getElementById("parent");
        parent.innerHTML+=" NEW TEXT TO APPEAR "; 
    }

    window.setInterval(addTextRecur,2000);
    function addTextRecur(){ 
        let parent = document.getElementById("parent");
        parent.innerHTML+=" NEW TEXT TO APPEAR RECUR ";
    }

    window.setInterval(moveBoxB, 50);
    function moveBoxB(){ 
        document.getElementById("boxB").style.left;
        parseInt(this.document.getElementById("boxB").style.left) + speedX + "px";
    }

    window.addEventListener("keydown", function (event) {
        //this.document.querySelector("#textContainer").textContent+=`${event.key} `;
        //this.document.getElementById("textContainer").textContent+=`${event.key} `;
        
        if (event.key === "ArrowRight") {
            if(turbo){
            document.getElementById("boxA").style.left =
            parseInt(this.document.getElementById("boxA").style.left) + fastSpeedX + "px"; 
            }
            else
            document.getElementById("boxA").style.left =
            parseInt(this.document.getElementById("boxA").style.left) + speedX + "px";
        } 
        
        if (event.key === "ArrowLeft") {
            if(turbo){
            document.getElementById("boxA").style.left =
            parseInt(this.document.getElementById("boxA").style.left) - fastSpeedX + "px";
            }
            else
            document.getElementById("boxA").style.left =
            parseInt(this.document.getElementById("boxA").style.left) - speedX + "px";
        }

        else if (event.key === "Shift") {
            document.getElementById("boxA").style.background ="rgb(226, 112, 177)";
        }
    });

    window.addEventListener("keyup", function (event) {
        if (event.key === "Shift") {
            turbo = true;
            document.getElementById("boxA").style.background = "rgb(112, 184, 226)";
        } 
    });
}