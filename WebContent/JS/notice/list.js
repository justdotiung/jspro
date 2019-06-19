

//첫번째 복제 방법 ---ex1--------------------------------------
window.addEventListener("load",function(){
   /*
    var tbody = this.document.querySelector("#notice tbody");
    var button1 = this.document.querySelector("#test-pager input[type=button]");
    var text1 = this.document.querySelector("#test-pager input[type=text]");
 
 
    button1.onclick=function(){
      
    	// var page = 1;
    	// if(text1.value != null && text1.value !="")
      // 		page = text1.value;
      
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
    */
});


//두번째 복제 방법 ---ex2--------------------------------------
window.addEventListener("load",function(){

  var section = this.document.querySelector("#notice");
  var tbody = this.document.querySelector("#notice tbody");
  var button1 = this.document.querySelector("#test-pager input[type=button]");
  var text1 = this.document.querySelector("#test-pager input[type=text]");

// true 전체 아니면 가장처음 하나
  button1.onclick=function(){
    var page = text1.value;

    var request = new XMLHttpRequest();
    request.open("GET","/notice/list-ajax?p="+page,false);
    request.send();
   
    var json = JSON.parse(request.responseText);
    //alert(json[0].content);
    var template = section.querySelector(".notice-template");
    tbody.innerHTML="";
    var keys = Object.keys(json[0]);
    for(var i = 0; i<json.length;i++){
    
        var cloneTr = document.importNode(template.content,true);
        
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
  };

});

// 게시글 삭제----------------------------------------------------
window.addEventListener("load",function(){
  
    var notice = this.document.querySelector("#notice");
    var textRemove = this.document.querySelector("#test-remove");
    var txt1 = textRemove.querySelector("input[type=text]");
    var btn1 = textRemove.querySelector("input[type=button");
    var tbody = notice.querySelector("tbody");

    btn1.onclick=function(e){

      alert(e.clientX);

      var id = txt1.value;
      // 삭제는 서버 삭제후 화면 갱신해줘야 한다 
      var request = new XMLHttpRequest();
      request.open("GET","/notice/del-ajax?id="+id,false);
      request.send();

      if(request.responseText =="ok")
        //화면에서도 해당 게시글을 지운다.
        var request = new XMLHttpRequest();
        request.open("GET","/notice/list-ajax?p=1",false);
        request.send();

        var json = JSON.parse(request.responseText);
      
        var template = notice.querySelector(".notice-template");
        tbody.innerHTML="";
        var keys = Object.keys(json[0]);
        for(var i = 0; i<json.length;i++){
        {
            var cloneTr = document.importNode(template.content,true);
            
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
          alert("삭제되었습니다.");
    };
});

//---위치값에대한 이벤트 실행--------------------------------------------------------------
window.addEventListener("load",function(){
  
  // var notice = this.document.querySelector("#notice");
  // var pager = this.document.querySelector("#pager");
  // var tbody = notice.querySelector("tbody");

  // var nums = pager.querySelectorAll("a");
  
  
  // //js는 객체를 생성하는 것으로 한번 반복할때마다 수백개의 반복문이 실행된다 그렇기대문에
  // // function(e)라는 함수를 밖에 정의해줘서 꽂아 넣는 식으로 바꿔야한다. 아니 반복문을 제거해줘야한다.
  // for(var i=0; i< nums.length; i++)
  
//  온클릭을 각각의 nums[i] 에 넣어준것이 자식을 
  // nums[i].onclick = function(e){
  //     // e객체의 기본값을 막는 것으로 기본액션을 가지고있는것들을 막을수있다 
  //     e.preventDefault();
  //     e.target.style.background ="pink";
  //    //현재 페이지 값 가져온다.
  //     // alert(e.currentTarget.innerText);
  //     var page = e.currentTarget.innerText;

  //     var request = new XMLHttpRequest();
  //     request.open("GET","/notice/list-ajax?p="+page,false);
  //     request.send();
    
  //     var jsons = JSON.parse(request.responseText);
 
  //     var template = notice.querySelector(".notice-template");
  //     tbody.innerHTML="";
  //     var keys = Object.keys(jsons[0]);
      
  //     for(var i = 0; i<jsons.length;i++){
      
  //         var cloneTr = document.importNode(template.content,true);
          
  //         var idEl = cloneTr.querySelector(".num");
  //         var titleEl = cloneTr.querySelector(".title a");
  //         var writerEl= cloneTr.querySelector(".writer");
  //         var dateEl= cloneTr.querySelector(".date");
  //         var hitEl= cloneTr.querySelector(".hit");
      
  //           idEl.innerText=jsons[i][keys[0]];
  //           titleEl.innerText=jsons[i][keys[1]];
  //           writerEl.innerText=jsons[i][keys[2]];
  //           dateEl.innerText=jsons[i][keys[3]];
  //           hitEl.innerText=jsons[i][keys[4]];
        
  //         tbody.append(cloneTr);
      
  //      }
  // }
  
});

//---위치값에대한 이벤트 실행-리팩토링-버블링-버그제거---------------------------------------
window.addEventListener("load",function(){
  var notice = this.document.querySelector("#notice");
  var pager = this.document.querySelector("#pager");
  var tbody = notice.querySelector("tbody");

  var ul = pager.querySelector("ul");
  var nums = ul.querySelectorAll("a");
  
    nums[2].onclick=function(e){
  
      e.target.style.background = "blue";   
      
      // e.preventDefault();
     //이벤트 전이과정을 막는다 버블링 막음
      // e.stopPropagation();;
    };
    //ul.onclick = function(e){
      ul.addEventListener("click",function(e){
     // 모든 노드의 네임을 가져온다 도큐맨트 인라인 기타 등등 
     //alert(e.target.nodeName);
     // 테그의 네임만 가져온다
     // alert(e.target.tagName);

     if(e.target.tagName !='A')
      return;

      e.preventDefault();
      e.target.style.background ="pink";
      
      var page = e.target.innerText;

      var request = new XMLHttpRequest();
      request.open("GET","/notice/list-ajax?p="+page,false);
      request.send();
     
      var json = JSON.parse(request.responseText);
    
      var template = notice.querySelector(".notice-template");
      tbody.innerHTML="";
      var keys = Object.keys(json[0]);
      
      for(var i = 0; i<json.length;i++){
      
          var cloneTr = document.importNode(template.content,true);
          
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
  },falue);
});