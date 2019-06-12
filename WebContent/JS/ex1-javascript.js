
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
		
		btnResult.onclick  = function(){
			var xInput = document.getElementById("x-input");
			var yInput = document.getElementById("y-input");
			
			xInput = parseInt(xInput.value);
			yInput = parseInt(yInput.value);
			
			alert(xInput+yInput);
		};
	});

//  ex2----------------------------------------------
window.addEventListener("load",function(){
	var countdown = document.getElementById("countdown-button");
		countdown.onclick = function(){
		alert(countdown.value);
	}

});
