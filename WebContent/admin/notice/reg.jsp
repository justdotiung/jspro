<%@page import="java.util.List"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html lang="en" style="font-size: 10px">

<head>
<meta charset="UTF-8">
<title>Document</title>
<link href="/root/css/style.css" type="text/css" rel="stylesheet">
</head>
<%
	request.getAttribute("list");
%>
<body>
	<!-- header block------------------------------------------------------------------------------------------- -->
	<!-- visual block------------------------------------------------------------------------------------------- -->
	<div id="visual">
		<div class="content-box" style="position: relative">
			<!-- <img src="https://i.pinimg.com/236x/bc/86/9c/bc869cbe73bab4b780b1dc50b2c55bda--image-c-spongebob.jpg" > -->
			<!-- <div style =" width:900px;height:400px; border: 1px solid red;
                background: url(https://item.kakaocdn.net/do/490d3fcfcef6c2b69b380d4b66328e53f43ad912ad8dd55b04db6a64cddaf76d)no-repeat;
                background-size: cover ;
                background-attachment: fixed;
                ">
            </div>
        -->
			<span style="left: 100px; top: 100px; position: absolute">웅이만세</span>
			<span style="margin-left: -100px">귀욤웅이</span>
		</div>
		<!-- <img src="https://item.kakaocdn.net/do/490d3fcfcef6c2b69b380d4b66328e53f43ad912ad8dd55b04db6a64cddaf76d" style="opacity:  0.5;" > -->
	</div>
	<!-- body block------------------------------------------------------------------------------------------- -->
	<div id="body">
		<div class="content-box">

			<main id="main">
			<section>
				<h1>공지사항</h1>
				<section id="breadcrumb">
					<h1 class="d-none">경로</h1>
					<ol>
						<li>home</li>
						<li>고객센터</li>
						<li>공지사항</li>
					</ol>
				</section>
			</section>

			<section>
				<h1>공지사항 내용</h1>
				<form action="reg" method="post">
					<table>
						<tbody>
							<tr>
								<th>카테고리</th>
								<td>
								<select name="category">
									<option value="학습">학습</option>
									<option value="결제">결제</option>
									<option value="기타">기타</option>
								</select>
								</td>
							</tr>
							<!-- key값의 중복 방법 (name) -->
							<!-- 
								백단엣는  배열로 받아서 사용 한다 parametervalues() 사용 
								file part[] 파일또한 배열로 받아서
								
								js에서도 ajax는 배열로 받아야 한다.
								 -->
							<tr>
								<th>제목</th>
								<td><input name="title"></td>
							</tr>
							<tr>
								<th>제목</th>
								<td><input name="title"></td>
							</tr>
							<tr>
								<th>제목</th>
								<td><input name="title"></td>
							</tr>
						</tbody>
					</table>
					<input type="submit" value="저장">
				<a href="list">취소</a>
			</form>
			</section>

			</main>
		</div>
	</div>
	<!-- footer block------------------------------------------------------------------------------------------- -->
</body>

</html>