package com.newlecture.web;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/signup")
public class SignUp extends HttpServlet {
	@Override
	protected void service(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		resp.setCharacterEncoding("UTF-8");
		resp.setContentType("text/html; charset = UTF-8");
		
		String id =req.getParameter("id");
		String pw =req.getParameter("pwd");
		
		PrintWriter out = resp.getWriter();
		if(req.getMethod().equals("POST")) {
			
		out.println(id+":id");
		out.println(pw+":pwd");
	
		}
	}
}
