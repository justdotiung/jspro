
/*
	window.onload = function(){
		var btnResult = document.getElementById("btn-result");
		btnResult.onclick  = function(){
			var xInput = document.getElementById("x-input");
			var yInput = document.getElementById("y-input");
			
			xInput = parseInt(xInput.value);
			yInput = parseInt(yInput.value);
			
			alert(xInput+yInput);
		};
	}
	*/
// 이벤트를 추가하는 방법 


		window.addEventListener("load",function(){
		var btnResult = document.getElementById("btn-result");
		var xInput = document.getElementById("x-input");
		var yInput = document.getElementById("y-input");
		
		btnResult.onclick  = function(){
			
			xInput = parseInt(xInput.value);
			yInput = parseInt(yInput.value);
			
			alert(xInput+yInput);
		};
	});

//  ex2----------------------------------------------
window.addEventListener("load",function(){
	var countdown = document.getElementById("countdown-button");
	var countSpan = document.getElementById("count-span")
	
	// countdown.onclick = function(){
		
	// 	var f1 = function(){
	// 		// 숫자 클릭시 감소.
	// 		var count = parseInt(countSpan.innerText);
	// 		count--;
	// 		countSpan.innerText= count;
	// 		// alert(countdown.value);
	// 	}
	// 	//자동 숫자 감소 계속 클릭시 중복 시작되기때문에 마치 알람시계를 또 사온것과 같다.
	// 	window.setInterval(f1,1000);
	// };
	
	//두개 이상의 타이머 방지 선언의 방법을 잘 보자 
	var tid = null;
	this.console.log(typeof(tid));
	//강제 형변환으로 null 과 undefined 의 == 부호가 성립된다,.
	//null 과 undefined 차이는 객체에 null 을 넣는 것과 기본객체에서 undefined 은 정의만 하면 
	//undefined 가 된다. 
	var cc ;
	this.console.log(typeof(cc));
	countdown.onclick = function(){
		
		var f1 = function(){
			var count = parseInt(countSpan.innerText);
			count--;
			countSpan.innerText= count;
			
			if(count == 0)
				window.clearInterval(tid);
		}
		
		if( tid === null)//null
			tid = window.setInterval(f1,1000);
	};
});
//ex3-----------------------------------------------------------------------
window.addEventListener("load",function(){
	var btn = document.getElementById("btn-ex3");
	var view = document.getElementById("view");
	
	var fwin = view.contentWindow;
	var fbtn;
	
	
		fbtn = fwin.document.getElementById("btn-ex3-1");
	
		// 로드되는 시점에서 자식의 함수가 로드되어 메모리 할당이 되어야 계속해서 보여지기떄문에
		// 먼저 실행되어야 하는 부분을 해줘야 어떨때는 안보여지는것이아니라 항상 보여지게 된다.
		btn.onclick = function(){
			// 	var fwin = view.contentWindow;
			// 	var fbtn = fwin.document.getElementById("btn-ex3");
			fbtn.value="안녕하세요";
			window.location.href="http://www.newlecture.com";
			console.log(window.location.port);
		};
});

// ex4-------노드의 선택방법 1-----------------------------------------------
/*
window.addEventListener("load",function(){
	var section = this.document.getElementById("ex4");
	//input 버튼을 객체화 하기
	//값은 배열로 얻어진다. 한정할수있다.
	var button =section.getElementsByTagName("input")[0];
	//ul 객체화 하기
	var ul = section.getElementsByTagName("ul")[0];
	//li 의 객체화 하기
	var lis = ul.getElementsByTagName("li");

	button.onclick= function(){
		console.log("test");
		lis[3].remove();
	};
});
*/

// ex4----노드의 선택방법 2-1-------------------------------------------------
/*
window.addEventListener("load",function(){
	
	var section = this.document.getElementById("ex4");
	//childnodes 로 선택 복수형 배열임 
	var button = section.childNodes[1];
	//텍스트 노드도 읽어오게된다. 노드타입으로 1,3을 구분해서 해결방법 찾기
	this.console.log(button.nodeType);
	var ul=section.childNodes[3];
	var lis=ul.getElementsByTagName("li");

	button.onclick= function(){
		console.log("test");
		lis[3].remove();
	};
});
*/

// ex4----노드의 선택방법 2-2--------------------------------------------------
/*
window.addEventListener("load",function(){
	
	var section = this.document.getElementById("ex4");
	var button = section.children[0];
	this.console.log(button.nodeType);
	var ul=section.children[1];
	//ul의 자식노드들이기때문에 children사용.
	var lis=ul.children;

	button.onclick= function(){
		console.log("test");
		lis[3].remove();
	};
});
*/

// ex4----노드의 선택방법 3--------------------------------------------------
/*
window.addEventListener("load",function(){

	var section = this.document.getElementById("ex4");
	
	// var button = section.firstChild; 모든 노드 대상 1,3
	var button = section.firstElementChild; //엘리먼트 노드 대상 1
	//var ul=button.nextSibling; 모든 노드 대상
	var ul=button.nextElementSibling; //엘리먼트 노드 대상
	var lis=ul.children;
	
	this.console.log(button.nodeType);
	
	button.onclick= function(){
		console.log("test");
		lis[3].remove();
	};
});
*/
// ex4----노드의 선택방법 4---최신 브라우져가 만 적용가능-----------------------------------------------

window.addEventListener("load",function(){
	
	var section = this.document.getElementById("ex4");
		section = this.document.querySelector("#ex4");
	
	var button = this.document.querySelector("#ex4>input");
	var ul= section.querySelector("ul");
	//api에서의 기능
	//메모리에서는 그대로 있고 보여지는 부분(화면)에서만 연결이 끊어진것으로 다음 노드가 삭제가 안된다.
	var lis=ul.querySelectorAll("li");
	this.console.log(lis);
	//플랫폼에서의 기능 모두가 다르다.
	//메모리에서의 삭제는 알아서 참조가 안된다면 gc의해서 수거해간다.
	//var lis = ul.children;
	this.console.log(lis);
	this.console.log(button.nodeType);
	
	button.onclick= function(){
		console.log("test");
		lis[3].remove();
		ul.appendChild(lis[3]);
		console.log(lis[3]);
	};
});

//ex5----속성 다루기 ----------------------------------------------------
// class 명은 id의 상대적으로 물고들어가기떄문에 id 지역내의 구분을 할수 있다 
window.addEventListener("load",function(){
	var section = this.document.querySelector("#ex5");
	var button1 = section.querySelector(".btn1");
	var button2 = section.querySelector(".btn2");
	var img =section.querySelector("img");
	var tid;
	
	button1.onclick=function(){
		img.src="https://previews.123rf.com/images/bogumil/bogumil1301/bogumil130100007/17101750-%ED%91%B8%EB%A5%B8-%ED%95%98%EB%8A%98%EC%97%90-narew-%EA%B0%95-%E2%80%8B%E2%80%8B%EA%B5%AC%EB%A6%84%EA%B3%BC-%EC%97%AC%EB%A6%84-%ED%92%8D%EA%B2%BD.jpg";
		console.log(img.width);
		img.style.borderBottom ="3px solid blue" ;
	 // img.style["borderBottom"] = "3px solid blue" ;
	};

	button2.onclick=function(){


		//읽기 전용으로 되어있따. img.width
		//이미지를 다루고 싶으면 style로써 들어가야 조작할수있게 된다.
		var f1 = function(){

			var width = img.width;
			width -=3 ;
			var im2 =  img.style.width=width+"px";
		
			if(width <= 200)
			window.clearInterval(tid);
		}
		
		if(tid == undefined)
		//60프레임 초당
			tid = window.setInterval(f1,17);
		}
});

//ex5-1-예제연습--속성 다루기 ----------------------------------------------------
// class 명은 id의 상대적으로 물고들어가기떄문에 id 지역내의 구분을 할수 있다 
window.addEventListener("load",function(){
	var section = this.document.querySelector("#ex5-1");
	var btn12 = section.querySelector(".btn12");
	var btn1 = section.querySelector(".btn1");
	var select = section.querySelector(".img-select");
	var i = section.querySelector(".i");

	btn12.onclick=function(){
		
		console.log(select.value);
		i.src= select.value;
		i.style.border=btn1.value;
	}
});

// ex6-------노드 추가삭제 --------------------------------------------------------

window.addEventListener("load",function(){
	var section = this.document.querySelector("#ex6");
	var addTextButton = section.querySelector(".btn-add-text");
	var addElmentButton = section.querySelector(".btn-add-elment");
	var container = section.querySelector(".container");

	addElmentButton.onclick = function(){
		console.log("test");
		var el = document.createElement("div");
		el.className = "box";

		container.appendChild(el);
	};

	this.console.log(addTextButton.onclick);
		addTextButton.onclick =function(){
			console.log("test");

		var textNode= document.createTextNode("안녕하세요");
		container.appendChild(textNode);
		};
});
// ex7--- 노드 조작하기 맨땅 DOM조작-#1 appendChild --------------------------------------------

window.addEventListener("load",function(){
	/*
	var section = this.document.querySelector("#ex7");
	var noticeTBody = section.querySelector(".notice tbody");
	var loadButton = section.querySelector(".btn-load");

	var notices = [
		{
			id:"6",
			title:"뉴렉쌤",
			writerId:"newlec",
			regDate:"2019-06-11",
			hit:30
		},
		{
			id:"7",
			title:"뉴렉쌤1",
			writerId:"newlec1",
			regDate:"2019-06-11",
			hit:301
		},
		{
			id:"8",
			title:"뉴렉쌤2",
			writerId:"newlec2",
			regDate:"2019-06-11",
			hit:302
		}
	];

	loadButton.onclick = function(){
		console.log("test");
		console.log(notices[1]);
		//키값을 얻어올수 있는 방법. 
		var keys = Object.keys(notices[0]);
		//["id","title","writerId","regdate","hit"];
		for(var j = 0 ; j<notices.length ;j++){
			
			var tr = document.createElement("tr");
			
			for(var i= 0; i<5; i++ ){
				var td = document.createElement("td");
				var key = keys[i];
				var txt = document.createTextNode(notices[j][key]);
				td.appendChild(txt);
				tr.appendChild(td);
			}
			
			noticeTBody.appendChild(tr);
		}
	};
	*/
});

// ex7--- 노드 조작하기 맨땅 DOM조작--#1 append ----------------------------------------

window.addEventListener("load",function(){
	/*
	var section = this.document.querySelector("#ex7");
	var noticeTBody = section.querySelector(".notice tbody");
	var loadButton = section.querySelector(".btn-load");

	var notices = [
		{
			id:"6",
			title:"뉴렉쌤",
			writerId:"newlec",
			regDate:"2019-06-11",
			hit:30
		},
		{
			id:"7",
			title:"뉴렉쌤1",
			writerId:"newlec1",
			regDate:"2019-06-11",
			hit:301
		},
		{
			id:"8",
			title:"뉴렉쌤2",
			writerId:"newlec2",
			regDate:"2019-06-11",
			hit:302
		}
	];

	loadButton.onclick = function(){
		
		var keys = Object.keys(notices[0]);
		for(var j = 0 ; j<notices.length ;j++){
			var tr = document.createElement("tr");
			for(var i= 0; i<5; i++ ){
				 var td = document.createElement("td");
				 var key = keys[i];
				// var txt = document.createTextNode(notices[j][key]);
				td.append(notices[j][key]);
				tr.append(td);
			}
			
			noticeTBody.append(tr);
		}
	};
	*/
});

// ex7-1 ------노드조작 뎀플릿 을 이용 DOM 조작------------------------------------------------
window.addEventListener("load",function(){
/*
	var section = this.document.querySelector("#ex7");
	var noticeTBody = section.querySelector(".notice tbody");
	var loadButton = section.querySelector(".btn-load");

	var notices = [
		{
			id:"6",
			title:"뉴렉쌤",
			writerId:"newlec",
			regDate:"2019-06-11",
			hit:30
		},
		{
			id:"7",
			title:"뉴렉쌤1",
			writerId:"newlec1",
			regDate:"2019-06-11",
			hit:301
		},
		{
			id:"8",
			title:"뉴렉쌤2",
			writerId:"newlec2",
			regDate:"2019-06-11",
			hit:302
		}

	];
	
	loadButton.onclick = function(){
		// var keys = Object.keys(notices[0]);
		// var html = "";
		// for(var j = 0; j <notices.length; j++){
		// 	var n="";
		// 	for(var i = 0; i<5; i++){
		// 		var key=keys[i];
		// 		n += "<td>"+notices[j][key]+"</td>";
		// 	}
		// 	html += "<tr>"+n+"</tr>";
		// }
		// noticeTBody.innerHTML=html;
		
		var keys = Object.keys(notices[0]);
		var html = "";
		for(var j = 0; j <notices.length; j++){
			html =""
			for(var i = 0; i<5; i++){
				var key=keys[i];
				n += "<td>"+notices[j][key]+"</td>";
			}
			html += "<tr>"+n+"</tr>";
		}
		noticeTBody.innerHTML=html;
		
	};
	*/	
});


// ex7-1 ------노드조작 뎀플릿 을 이용 DOM 조작 2 ------------------------------------------------
window.addEventListener("load",function(){
/*
	var section = this.document.querySelector("#ex7");
	var noticeTBody = section.querySelector(".notice tbody");
	var loadButton = section.querySelector(".btn-load");

	var notices = [
		{
			id:"6",
			title:"뉴렉쌤",
			writerId:"newlec",
			regDate:"2019-06-11",
			hit:30
		},
		{
			id:"7",
			title:"뉴렉쌤1",
			writerId:"newlec1",
			regDate:"2019-06-11",
			hit:301
		},
		{
			id:"8",
			title:"뉴렉쌤2",
			writerId:"newlec2",
			regDate:"2019-06-11",
			hit:302
		}
	];
	
	loadButton.onclick = function(){
		
		var keys = Object.keys(notices[0]);
		var html =[];
		for(var j = 0; j <notices.length; j++){
			html.push("<tr>");
			for(var i = 0; i<5; i++){
				var key=keys[i];
				html.push("<td>"+notices[j][key]+"</td>");
			}
			html.push("</tr>");
		}
		//join 함수의 구분자 변경으로 구분자를 없애줄수도 있다.
		console.log(html.join("/"));
		noticeTBody.innerHTML=html.join("");
		//현재 객체 문자열을 바꾸면 객체 자체를 마련한 메서드
		//각항목들을 쉼표로 구분해준다.
			
	};
	*/
});

// ex7-1 ------노드조작 뎀플릿 을 이용 DOM 조작 2 을 이용한 데이터 요청하기 --------------------
window.addEventListener("load",function(){
	/*
		var section = this.document.querySelector("#ex7");
		var noticeTBody = section.querySelector(".notice tbody");
		var loadButton = section.querySelector(".btn-load");
	
		var notices = [
			{
				id:"6",
				title:"뉴렉쌤",
				writerId:"newlec",
				regDate:"2019-06-11",
				hit:30
			},
			{
				id:"7",
				title:"뉴렉쌤1",
				writerId:"newlec1",
				regDate:"2019-06-11",
				hit:301
			},
			{
				id:"8",
				title:"뉴렉쌤2",
				writerId:"newlec2",
				regDate:"2019-06-11",
				hit:302
			}
		];
		
		loadButton.onclick = function(){
			//포멧문자열을 보내준 것이 필요하다

			var request = new XMLHttpRequest();
			request.open("GET","/notice/list-ajax?p=1",false);
			request.send();

			alert(request.responseText);
			var json = JSON.parse(request.responseText);
			console.log(json[0].title)
		//대체하기
		//notices = json
		//누적하기 기존의것을 두고 쌓인다.
			notices= notices.concat(json);

			var keys = Object.keys(notices[0]);
			var html =[];
			for(var j = 0; j <notices.length; j++){
				html.push("<tr>");
				for(var i = 0; i<5; i++){
					var key=keys[i];
					html.push("<td>"+notices[j][key]+"</td>");
				}
				html.push("</tr>");
			}
			
			console.log(html.join("/"));
			noticeTBody.innerHTML=html.join("");
				
		};
		*/
	});

	// ex8-trigger -----------------------------------------------

	window.addEventListener("load",function(){
		var section = this.document.querySelector("#ex8");
		var fileButton = section.querySelector("input[type=file]");
		var trigButton = section.querySelector("input[type=button]");
		trigButton.onclick = function(e){
		//윈도우 브라우져 조건을 걸어보자 윈도우 객체로 사용할수있따.
		
			console.log("aa");
			//하위버전의 브라우져에서는 통하지않는다 최신버전
			var event = new MouseEvent(
				"click",
				{
					view:window,
					bubbles:true,
					cancelable:true
				}
			);
			//옛날브라주져에서 통하는것 (쓸모없는것.) 사라질것이다.
			var file =document.createEvent("MouseEvent");
			event.initEvent("click",true,true);//evet type , bubbles, cancelable

			fileButton.dispatchEvent(event);
		}

	});
	
	// ex9--애니메이션 ---------------------------------------------
window.addEventListener("load",function(){
/*
	var section = document.querySelector("#ex9")
	var startBtn = section.querySelector(".start");
	var pauseBtn = section.querySelector(".pasue");

	var ball = section.querySelector(".ball");
	startBtn.onclick=function(){
		
		
		
		// css에서의 값을 가져오지 못하기 때문에 css에서도 정의를 하고 js에서도 정의를 하는 
		//개떡같은 코드가 발생한다. 그것을 막기위해서 css값을 가져오는 윈도우 객체를 사용
		//getComputedStyle()를 사용 한다.
		var ballStyle = window.getComputedStyle(ball);
		ball.style.left = ballStyle.getPropertyValue("left");
		ball.style.top = ballStyle.getPropertyValue("top");
	
		var tid = setInterval(function(){
			console.log(ball.style.width);
			var left = parseInt(ball.style.left);
			var top = parseInt(ball.style.top);

			left += 1;
			top += 1;

			ball.style.left = left+"px";
			ball.style.top = top+"px";

			if(left >= 300)
				clearInterval(tid);
		}, 17);
	};
	
	pauseBtn.onclick=function(){

	};
*/

});

// ex9--애니메이션 -css 사용방법 ----------------------------------

//css에서 할수있는것은 css에서하는것이 더 바람직하다.
	window.addEventListener("load",function(){
		var section = document.querySelector("#ex9")
		var startBtn = section.querySelector(".start");
		var pauseBtn = section.querySelector(".pasue");
		var bacbutton = section.querySelector(".cl")
		var ball = section.querySelector(".ball");
		var divc = section.querySelector(".dialog");
		var screen = section.querySelector(".screen");
		var content = section.querySelector(".content");
		startBtn.onclick=function(){
			ball.style.transform = "rotate(45deg)";
			ball.style.left = "300px";
			//ball.style.top = "300px";
			ball.style.width = "300px";
		};
		
		pauseBtn.onclick=function(){
			
		};
		bacbutton.onclick=function(){
			
			divc.classList.add("show");
			//divc.innerText="dialog show";
			//여닫이 태그 사이에 들어가는 것 innerText
			// console.log(divc.innerText);
			// divc.className="dialog show";
			//divc.style.display = "block";
			//screen.style.opacity =0.7;
		
		}
// 트렌지션이 끝나고 다음 애니메이션이 나오게 하기위애선 js에서 만 가능하며 
//아래와 같은 방법으로 사용할수있다 단 대상은 1명 
		screen.addEventListener("transitionend",function(){
			content
			.style
			.display = "block";
		});
		screen.onclick=function(){
			divc.classList.remove("show");
			content
			.style
			.display = "none";
		}
	
	});

// ex10--애니메이션 -효과넣기----------------------------------

//css에서 할수있는것은 css에서하는것이 더 바람직하다.
window.addEventListener("load",function(){
	var section = this.document.querySelector("#ex10");
	var delbtn = section.querySelector(".del-button");
	var container = section.querySelector(".container");
	var box = section.querySelector(".box");

	delbtn.onclick=function(){
		console.group("test");
		box.classList.add("ani-slide-open");

		box.addEventListener("animationend",function(){
			box.remove();
			//box.parentElement.remove();
		
		});
	
	};

});
//ex11-----------------------------------------------------
window.addEventListener("load",function(){
	var section = this.document.querySelector("#ex11");
	var goBtn = section.querySelector(".go-button");
	var container = section.querySelector(".container1");

	goBtn.onclick=function(){
		//var boxes = container.querySelectorAll("div");
		var boxes = container.children;
		//랜덤함수 가져오는 함수  수학 math객체
	
		function getRandomInt(max) {
			return Math.floor(Math.random() * Math.floor(max));
		  }	
		for(var i = 0; i<boxes.length; i++){
			boxes[i].style.left = getRandomInt(600)+"px";
			boxes[i].style.top = getRandomInt(400)+"px";
		}
	};



	// var request = new XMLHttpRequest();
	// request.open("GET","/notice/list-ajax?p=1",false);
	// request.send(); 
	// post 방법
	// var data ="x=1&y=2&x=3&y=3";
	// var request = new XMLHttpRequest();
	// request.open("POST","/notice/list-ajax?p=1",false);
	// request.send(ajax);

	// false는 비동기가 아니다 라는 뜻이다.
	// 동기화 는 줄을 세워서 일한다 (상대방 한번 나한번 )
	// 비동기는 병렬로 일한다
	// 파일전송 방법은 아직 안배움. 
});

//ex12--------------------------------------------------
window.addEventListener("load",function(){
	var section = this.document.querySelector("#ex12");
	var prev = section.querySelector(".prev-button");
	var next = section.querySelector(".next-button");

	var imglist = section.querySelector(".img-list");
	var lis = imglist.querySelector("li");

	prev.onclick = function(){
		
		var centerLi= imglist.querySelector(".center");
		var rightLi = centerLi.nextElementSibling;
		
		centerLi.classList.remove("center");
		centerLi.classList.add("left");
		rightLi.classList.remove("right");
		rightLi.classList.add("center");
	};

	next.onclick = function(){

	};
});
//ex13----------------------------------------------------
window.addEventListener("load",function(){
	var section =this.document.querySelector("#ex13");
	var ul= section.querySelector(".tab-menu-list")
	var div=section.querySelector(".content-list");
	
	ul.onclick = function(e){
		e.preventDefault();
		if(e.target.tagName !='A'){
			return;
		}
		//아이디 뽑기 
		// alert(e.target.href.indexOf("#"));
		// alert(e.target.href.indexOf(e.target.href.length));
		// alert(e.target.href.split("#")[1]);

		var divs = div.children;
		for(var i =0 ; i<divs.length; i++){
			divs[i].classList.remove("current");
		}
		var contetntId = e.target.href.split("#")[1];

		var contentIddiv = div.querySelector("#"+contetntId);
		contentIddiv.classList.add("current");
	};
	
});