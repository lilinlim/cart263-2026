window.onload = setup;

function setup() {
    
    let handleDragging = function (event) {
        console.log("on drag")
        //HERE :: the event target refers to the object being dragged...
        console.log(event.target.id);
    };

    let handleDraggingStop = function (event) {
        console.log("on stop")
        //HERE :: the event target refers to the object being dragged...
        console.log(event.target.id);
        
        // Clear the drag data cache (for all formats/types)
        event.dataTransfer.clearData();
        // The dataTransfer.setData() method sets the data type and the value of the dragged data
        event.dataTransfer.setData("objDraggedID", event.target.id);
    };

    /** NEW:: TO HANDLE DROPPING **/
    let handleDrop = function(event){
        event.preventDefault();
        console.log("dropped");

        let theObj = event.dataTransfer.getData("objDraggedID");
        event.target.appendChild(document.getElementById(theObj));
    }

   window.addEventListener("drop",handleDrop); 

   window.addEventListener("dragover", function(event) {
        console.log("over");
        event.preventDefault();
    });

   window.addEventListener("dragstart", handleDragging);
   window.addEventListener("dragend", handleDraggingStop);

}