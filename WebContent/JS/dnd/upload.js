window.addEventListener("load",function(){
   var section = this.document.querySelector("#upload");
    var dropZone = section.querySelector(".drop-zone");

    dropZone.addEventListener("dragenter",function(e){
        e.preventDefault();
       
        console.log("들어왔냐?")
       
        for(var key in e.dataTransfer)
        console.log(key);
        
        for(var key in e.dataTransfer.types[0])
            console.log(e.dataTransfer.types[0]);
        });
        dropZone.addEventListener("dragleave",function(e){
            e.preventDefault();
            dropZone.classList.remove("invalide");
            dropZone.classList.remove("valide");
            console.log("E떠날거니")
        });
        dropZone.addEventListener("dragover",function(e){
            e.preventDefault();
            //dropZone.classList.remove("invalide")
            console.log("이동중")
            if(e.dataTransfer.types != "Files"){
                //alert("잘못된것입니다.")
                dropZone.classList.add("invalide")
            }else{
                dropZone.classList.add("valide")
            }
            //window.setInterval()
        });
        
        dropZone.addEventListener("drop",function(e){
            e.preventDefault();
            dropZone.classList.remove("invalide");
            dropZone.classList.remove("valide");
            console.log("내려놨니?")
        });
    
    
});