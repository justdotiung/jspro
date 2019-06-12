package com.newlecture.web.controller;

import java.io.IOException;
import java.sql.SQLException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.newlecture.web.dao.NoticeDao;
import com.newlecture.web.dao.oracle.OracleNoticeDao;
import com.newlecture.web.entity.Notice;

//가상의 매핑주소 
@WebServlet("/member/notice/list")
public class ListController extends HttpServlet{
	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		
		int page = 1;
		
		String p_ = req.getParameter("p");
		if(p_ != null && !p_.equals(""))
			page = Integer.parseInt(p_);
		
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
		cookie.setMaxAge(1);
		cookie.setPath("/member/");
		resp.addCookie(cookie);
		
		NoticeDao o = new OracleNoticeDao();
		
//		if(!req.getParameter("p").isEmpty())
//			page = Integer.parseInt(req.getParameter("p"));
		
		
		
		
		System.out.println(page);
		
		
		try {
			req.setAttribute("list", o.getList(page));
		} catch (ClassNotFoundException e) {
			e.printStackTrace();
		} catch (SQLException e) {
			e.printStackTrace();
		}
		//가상의 주소에서 상대경로
		req.getRequestDispatcher("/WEB-INF/view/member/notice/list.jsp").forward(req, resp);
		
	}
	

}
