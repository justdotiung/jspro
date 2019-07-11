
	
		$(function(){
		var btnResult = $("#btn-result");
		var InputX = $("#x-input");
		var InputY = $("#y-input");
		InputX.val(30);
		InputY.val(44);

		btnResult.bind("mouseover",function(){
			xInput = parseInt(InputX.val());
			yInput = parseInt(InputY.val());
			
			alert(xInput+yInput);
		});
		
	});

//  ex2----------------------------------------------
$(function(){	
	var countdown = $("#countdown-button");
	var countSpan = $("#count-span");	
	var tid;

	
	countdown.bind("click", function(){
		
		var f1 = function(){
			var count = parseInt(countSpan.text());
			console.log(count);
			count--;
			countSpan.text(count);
			
			if(count == 0)
			clearInterval(tid);
	};        
		if(tid == undefined)
			tid = setInterval(f1 ,100);
	});
});

//ex3-----------------------------------------------------------------------
window.addEventListener("load",function(){
	var btn = document.getElementById("btn-ex3");
	var view = document.getElementById("view");
	
	var fwin = view.contentWindow;
	var fbtn;
	
		fbtn = fwin.document.getElementById("btn-ex3-1");
	
		btn.onclick = function(){
			fbtn.value="안녕하세요";
			window.location.href="http://www.newlecture.com";
			console.log(window.location.port);
		};
});

// ex4-------노드의 선택방법 1-----------------------------------------------
$(function(){
	var section = $("#ex4");
	var button =section.children("input").eq(0);
	var ul = section.children("ul");
	var lis = ul.children("li");

	button.click(function(){
		console.log("test");
		button.val("gkgk");
		lis.eq(3).remove();
	});



// ex4----노드의 선택방법 3--------------------------------------------------



	

	


	this.console.log(button.nodeType);
	
	button.click(function(){
		console.log("test");
		lis.eq(3).remove();
	});
});

// ex4----노드의 선택방법 4---최신 브라우져가 만 적용가능-----------------------------------------------


//ex5----속성 다루기 ----------------------------------------------------
// class 명은 id의 상대적으로 물고들어가기떄문에 id 지역내의 구분을 할수 있다 
$(function(){
	var section = $("#ex5");
	var button1 = section.find(".btn1");
	var button2 = section.find(".btn2");
	var img =section.find("img");
	var tid;
	
	button1.click(function(){
		img.attr("src","https://previews.123rf.com/images/bogumil/bogumil1301/bogumil130100007/17101750-%ED%91%B8%EB%A5%B8-%ED%95%98%EB%8A%98%EC%97%90-narew-%EA%B0%95-%E2%80%8B%E2%80%8B%EA%B5%AC%EB%A6%84%EA%B3%BC-%EC%97%AC%EB%A6%84-%ED%92%8D%EA%B2%BD.jpg");
		// img.style["borderBottom"] = "3px solid blue" ;
		//img.fadeOut(3000);
	});
	
	button2.click(function(){
		img.css("borderBottom","3px solid blue")
		.animate({width:'200px',opacity:'0.5'},1000)
		.delay(1000)
		.animate({height:'100px',opacity:'0.5'},3000,
			function(){	button1.animate({width:"200px"},1000);
			});
	
		});
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

$(function(){
	var section = $("#ex6");
	var addTextButton = section.find(".btn-add-text");
	var addElmentButton = section.find(".btn-add-elment");
	var container = section.find(".container");

	addElmentButton.click(function(){
		var el = $("<div>");
		el
			.addClass("box")
			.appendTo(container);
		//container.append(el);
	});
	addTextButton.click(function(){
		container.append('안녕하세요');
	});
});
// ex7--- 노드 조작하기 맨땅 DOM조작-#1 appendChild --------------------------------------------

window.addEventListener("load",function(){

});

// ex7--- 노드 조작하기 맨땅 DOM조작--#1 append ----------------------------------------

window.addEventListener("load",function(){

});

// ex7-1 ------노드조작 뎀플릿 을 이용 DOM 조작------------------------------------------------
window.addEventListener("load",function(){

});


// ex7-1 ------노드조작 뎀플릿 을 이용 DOM 조작 2 ------------------------------------------------
window.addEventListener("load",function(){

});

// ex7-1 ------노드조작 뎀플릿 을 이용 DOM 조작 2 을 이용한 데이터 요청하기 --------------------
$(function(){
		var section = $("#ex7");
		var noticeTBody = section.find(".notice tbody");
		var loadButton = section.find(".btn-load");
	
		var page = 1;
		
		loadButton.click(function(){
			//포멧문자열을 보내준 것이 필요하다

		$
			// .ajax("/notice/list-ajax?p=1")
			// .done(function(aa){
			// 	alert(aa);
			// });
//			.ajax({
//				dataType:"json",
//				url:"/notice/list-ajax?p=1",
//				complete:function(request, status){
//					alert(request.responseText);
//				}
//			}).done(function(data){
//				alert(data[0].title);
//			}) 
//		.getJSON("/notice/list-ajax?p=1")
//		.done(function(data){
//				alert(data[0].title);
//		});
//		파일 불러오기 
		.get("/admin/notice/list-partial?p="+page++)
		.done(function(partial){
				//alert(partial);
				// noticeTBody.html(partial);
				//noticeTBody.append(partial).fadeOut().fadeIn();
				$(partial)
					.css({opacity:0})
					.appendTo(noticeTBody)
					.animate({opacity:1});
			});
//				
		// noticeTBody
		// 	.fadeOut()
		// 	.load("/admin/notice/list-partial?p="+ page++)
		// 	.fadeIn();
		// 	var request = new XMLHttpRequest();
		// 	request.open("GET","/notice/list-ajax?p=1",false);
		// 	request.send();

		// 	alert(request.responseText);
		// 	var json = JSON.parse(request.responseText);
		// 	console.log(json[0].title)
		// //대체하기
		// //notices = json
		// //누적하기 기존의것을 두고 쌓인다.
//		 	notices= notices.concat(json);
//
//		 	var keys = Object.keys(notices[0]);
//		 	var html =[];
//		 	for(var j = 0; j <notices.length; j++){
//		 		html.push("<tr>");
//		 		for(var i = 0; i<5; i++){
//		 			var key=keys[i];
//		 			html.push("<td>"+notices[j][key]+"</td>");
//		 		}
//		 		html.push("</tr>");
//		 	}
//			
//		 	console.log(html.join("/"));
//		 	noticeTBody.innerHTML=html.join("");
//				
		});
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