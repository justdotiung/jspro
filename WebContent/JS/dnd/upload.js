window.addEventListener("load",function(){
   var section = this.document.querySelector("#upload");
    var dropZone = section.querySelector(".drop-zone");

    dropZone.addEventListener("dragenter",function(e){
        console.log("들어왕ㅆ니?")
    });
    dropZone.addEventListener("dragleave",function(e){
        console.log("니나갔니?")
    });
    dropZone.addEventListener("dragover",function(e){
        console.log("이동중")
    });

    
});