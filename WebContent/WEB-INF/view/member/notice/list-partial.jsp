<%@page import="com.newlecture.web.dao.oracle.NoticeView"%>
<%@page import="java.util.List"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

	
						
							<c:forEach var="n" items="${list}" varStatus="s">
							<c:if test="${s.index%2!=0}">
								<tr>
							</c:if>
							<c:if test="${s.index%2==0}">
								<tr class="even">
 							</c:if>
									<td class="num">${n.id}</td>
									<td class="title">
										<a href="detail?id=${n.id}">${n.title}</a>
										<span>${n.commentCount}</span>
										<span><a href="list?eid=${n.id}">수정</a><a href="">삭제</a></span>
									</td>
									<td class="writer">${n.writherId}</td>
									<td class="date">${n.date}</td>
									<td class="hit">${n.hit}</td>
								</tr>
								<!-- 마지막결과물 서버코드가 사라진 상태로 동작하게 만들어야 한다  -->
							</c:forEach>
