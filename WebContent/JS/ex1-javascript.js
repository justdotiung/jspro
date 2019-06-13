
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

window.addEventListener("load",function(){
	var section = this.document.querySelector("#ex5");
	var button = section.querySelector("input");
	var img =section.querySelector("img");

	button.onclick=function(){
		img.src="https://previews.123rf.com/images/bogumil/bogumil1301/bogumil130100007/17101750-%ED%91%B8%EB%A5%B8-%ED%95%98%EB%8A%98%EC%97%90-narew-%EA%B0%95-%E2%80%8B%E2%80%8B%EA%B5%AC%EB%A6%84%EA%B3%BC-%EC%97%AC%EB%A6%84-%ED%92%8D%EA%B2%BD.jpg";
	}
});