package com.newlecture.web.controller;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.SQLException;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.newlecture.web.dao.NoticeDao;
import com.newlecture.web.dao.oracle.NoticeView;
import com.newlecture.web.dao.oracle.OracleNoticeDao;
import com.newlecture.web.entity.Notice;

//가상의 매핑주소 
@WebServlet("/notice/list-ajax")
public class ListAjaxController extends HttpServlet{
	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		
		
		int page = 1;
		
		String p_ = req.getParameter("p");
		if(p_ != null && !p_.equals(""))
			page = Integer.parseInt(p_);
		
		int count = 0;
		
		//		쿠키는 여러개 배열에 담아야 한다 겟 쿠키는 없다. 겟 쿠키즈 만ㅇ 있다.
//		Cookie[] cookies = req.getCookies();
//		for(int i = 0; i< cookies.length; ++i)
//			if(cookies[i].getName().equals("count")) {
//				count = Integer.parseInt(cookies[i].getValue());
//				System.out.println("name : "+cookies[i].getName()+" // value : "+cookies[i].getValue());
//				count++;
//				break;
//			}
		
		Cookie cookie = new Cookie("count", String.valueOf(count));
		cookie.setMaxAge(1);
		cookie.setPath("/member/");
		resp.addCookie(cookie);
		
		NoticeDao o = new OracleNoticeDao();
		
//		if(!req.getParameter("p").isEmpty())
//			page = Integer.parseInt(req.getParameter("p"));
		
		List<NoticeView> list = null;
		
		
		System.out.println(page);
		
		
		try {
			list = o.getList(page);
		} catch (ClassNotFoundException e) {
			e.printStackTrace();
		} catch (SQLException e) {
			e.printStackTrace();
		}
		//가상의 주소에서 상대경로
		
		
		req.setCharacterEncoding("UTF-8");
		resp.setContentType("text/html; charset=UTF-8");//컨텐츠 타입 필요 마인이 필요하신봐야함
		PrintWriter out = resp.getWriter();
		
		StringBuilder json = new StringBuilder();
		json.append("[");
		for (int i = 0; i < list.size(); i++) {
			Notice n = list.get(i);
			
			json.append(String.format("{\"id\":%d,", n.getId()));
			json.append(String.format("\"title\":\"%s\",", n.getTitle()));
			json.append(String.format("\"writerId\":\"%s\",", n.getWritherId()));
			json.append(String.format("\"regDate\":\"%s\",", n.getDate()));
			json.append(String.format("\"hit\":\"%s\"}", n.getHit()));
			
			if(i != list.size()-1)
				json.append(",");
		}
		json.append("]");
		
		System.out.println(json);
		out.write(json.toString());
		
		
		
	}
	

}
