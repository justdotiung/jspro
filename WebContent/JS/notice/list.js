window.addEventListener("load",function(){
    var tbody = this.document.querySelector("#notice tbody");
    var button1 = this.document.querySelector("#test-pager input[type=button]");
    var text1 = this.document.querySelector("#test-pager input[type=text]");
 
 
    button1.onclick=function(){
      /*
    	var page = 1;
    	if(text1.value != null && text1.value !="")
      		page = text1.value;
      */
      var page = text1.value;
	
      var request = new XMLHttpRequest();
      request.open("GET","/notice/list-ajax?p="+page,false);
      request.send();
  
      var json = JSON.parse(request.responseText);
     
      var tr = tbody.firstElementChild;
      tbody.innerHTML="";
      var keys = Object.keys(json[0]);
      for(var i = 0; i<json.length;i++){
      {
          var cloneTr = tr.cloneNode(true);
          
	      var idEl = cloneTr.querySelector(".num");
          var titleEl = cloneTr.querySelector(".title a");
          var writerEl= cloneTr.querySelector(".writer");
          var dateEl= cloneTr.querySelector(".date");
          var hitEl= cloneTr.querySelector(".hit");
       
            idEl.innerText=json[i][keys[0]];
            titleEl.innerText=json[i][keys[1]];
            writerEl.innerText=json[i][keys[2]];
            dateEl.innerText=json[i][keys[3]];
            hitEl.innerText=json[i][keys[4]];
        
          tbody.append(cloneTr);
      }
    }
    };


});


