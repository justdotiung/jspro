
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
	
	var fbtn;
	var fwin = view.contentWindow;
	
	view.addEventListener =("load", function(){
		fbtn = fwin.document.getElementById("btn-ex3-1");
	});
		// 로드되는 시점에서 자식의 함수가 로드되어 메모리 할당이 되어야 계속해서 보여지기떄문에
		// 먼저 실행되어야 하는 부분을 해줘야 어떨때는 안보여지는것이아니라 항상 보여지게 된다.
		btn.onclick = function(){
			// 	var fwin = view.contentWindow;
			// 	var fbtn = fwin.document.getElementById("btn-ex3");
			fbtn.value="안녕하세요";
		};
		
	

});
