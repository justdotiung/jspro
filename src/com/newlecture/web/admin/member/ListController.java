package com.newlecture.web.admin.member;

import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
@WebServlet("/admin/member/list")
public class ListController extends HttpServlet {

	@Override
	protected void service(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		
		//stream - ansi; 기본
		//writer - unicode; 다국어
//		PrintWriter out = resp.getWriter();
//
//		out.print("helloworld");
		
		
		List<Map<String,String>> members= new ArrayList<>();
		Map<String,String> member;
		
		member = new HashMap<>();
		member.put("id", "dargon");
		member.put("name","손오공");
		members.add(member);
		
		member = new HashMap<>();
		member.put("id", "moon");
		member.put("name","문재인");
		members.add(member);
//		resp.sendRedirect("list.jsp"); 
		req.setAttribute("x",30);
		req.setAttribute("x","안녕하세요");
		req.setAttribute("y",new Integer(3));
		req.setAttribute("member",member);
		req.setAttribute("y",new int[] {1,2,3});
		req.setAttribute("members", members);
		req.getRequestDispatcher("list.jsp").forward(req, resp);
	}
}
