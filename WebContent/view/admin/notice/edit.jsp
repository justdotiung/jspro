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
	<jsp:include page="../../inc/header.jsp"/>
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
			<jsp:include page="../../inc/aside.jsp"/>


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
				<form action="edit" method="post" >
				<table>
					<tbody>
					<tr>
							<th>카테고리</th>
							<td>
							<select name="category">
								<option>학습</option>
								<option>결제</option>
								<option>기타</option>
							</select>
							</td>
					</tr>
						<tr>
							<th>제목</th>
							<td><input name="title" value="${notice.title}"></td>
						</tr>
						<tr>
							<th>작성일</th>
							<td>${notice.date}</td>
						</tr>
						<tr>
							<th>내용</th>
							<td><textarea name="content">${notice.content}</textarea></td>
						</tr>
					</tbody>
				</table>
				<input type="hidden" name="id" value="${notice.id}">
				<input type="submit" value="저장">
				<a href="detail?id=${notice.id}">취소</a>
			</form>
			</section>

			</main>
		</div>
	</div>
	<!-- footer block------------------------------------------------------------------------------------------- -->
	<jsp:include page="../../inc/footer.jsp"/>
</body>

</html>