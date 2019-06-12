package com.newlecture.web.controller.member;

import java.io.IOException;
import java.sql.SQLException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.newlecture.web.dao.MemberDao;
import com.newlecture.web.dao.oracle.OracleMemberDAO;
import com.newlecture.web.entity.Member;



@WebServlet("/member/login")
public class LoginController extends HttpServlet{
	
	@Override
	protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		String id = req.getParameter("id");
		String pw = req.getParameter("pw");
		/* System.out.println(id); */
		MemberDao dao = new OracleMemberDAO();
		try {
			Member member = dao.get(id);
			if(member == null)
				resp.sendRedirect("login?error=1");
			else if(!member.getPw().equals(pw))
				resp.sendRedirect("login?error=1");
			else {
				HttpSession session = req.getSession();
				session.setAttribute("id", id);
				
				String returnUrl= req.getParameter("return-url");
				if(returnUrl != null)
					resp.sendRedirect(returnUrl);
				else {
					resp.sendRedirect("/member/notice/list");
				}
			}
		} catch (ClassNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	
	}
	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		int count = 0;
			
			//		쿠키는 여러개 배열에 담아야 한다 겟 쿠키는 없다. 겟 쿠키즈 만ㅇ 있다.
			Cookie[] cookies = req.getCookies();
			for(int i = 0; i< cookies.length; ++i)
				if(cookies[i].getName().equals("count")) {
					count = Integer.parseInt(cookies[i].getValue());
					System.out.println("name : "+cookies[i].getName()+" // value : "+cookies[i].getValue());
					count++;
					break;
				}
			
			Cookie cookie = new Cookie("count", String.valueOf(count));
			cookie.setMaxAge(1000*60*60*24*30);
			cookie.setPath("/member/");
			resp.addCookie(cookie);
		
		req.getRequestDispatcher("/WEB-INF/view/member/notice/login.jsp").forward(req, resp);
	}
}
