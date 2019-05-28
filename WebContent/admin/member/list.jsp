<%@page import="java.util.HashMap"%>
<%@page import="java.util.Map"%>
<%@page import="java.util.ArrayList"%>
<%@page import="java.util.List"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
 <%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%List<Map<String,String>> members = (List<Map<String,String>>)request.getAttribute("members"); %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
	<h1>회원 목록</h1>
	<div>${requestScope.x}</div>
	<div>${member.name}</div>
	<div>${y[2]}</div>
	<%int count =30;
	pageContext.setAttribute("c", count);
	%>
	<div><%=request.getAttribute("x") %>,${c}</div>
	<table border="1">
		<tr>
			<td>아이디</td>
			<td>이름</td>
		</tr>
		<%-- <%
		for(int i = 0;i<members.size();i++){
		%>
		<tr>
			<td><%=members.get(i).get("id") %></td>
			<td><%=members.get(i).get("name") %></td>
		</tr>
		<%
		}
		%>

		<%
		for(Map<String,String> m: members){
		%>
		<tr>
			<td><%=m.get("id") %></td>
			<td><%=m.get("name") %></td>
		</tr>
		<%
		}
		%> --%>
		
		<c:forEach var="m" items="${members}">
			${m.name}<br>
			${m.id}<br>
		</c:forEach>
 		<%
		for(Map<String,String> m: members){
		%>
		<tr>
			<td><%=m.get("id") %></td>
			<td><%=m.get("name") %></td>
		</tr>
	 <%} %>
	</table>
</body>
</html>