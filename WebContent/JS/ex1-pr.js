
window.do = function(){
    var so = this.document.getElementById("so");
    var sososo = this.document.getElementById("sososo");
    var soso = this.document.getElementById("soso");
    var countdown;
    
    sososo.onclick= function(){
        soso.value = "1";
        
    
        var count = function(){
            var sd =parseInt(so.innerText);
            sd--;
            so.innerText = sd;
       
            if(sd == 0)
            window.clearInterval(countdown);
        };
        
        if(countdown == undefined)
            countdown = window.setInterval(count,100);

    };
};

window.addEventListener("load",window.do);
