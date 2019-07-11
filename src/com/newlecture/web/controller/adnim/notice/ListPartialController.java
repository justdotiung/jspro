package com.newlecture.web.controller.adnim.notice;

import java.io.IOException;
import java.sql.SQLException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.newlecture.web.dao.NoticeDao;
import com.newlecture.web.dao.oracle.OracleNoticeDao;
import com.newlecture.web.entity.Notice;

//가상의 매핑주소 
@WebServlet("/admin/notice/list-partial")
public class ListPartialController extends HttpServlet{
	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		
		int page = 1;
		
		String p_ = req.getParameter("p");
		if(p_ != null && !p_.equals(""))
			page = Integer.parseInt(p_);
		
		NoticeDao o = new OracleNoticeDao();
		
//		if(!req.getParameter("p").isEmpty())
//			page = Integer.parseInt(req.getParameter("p"));
		
		
		
		
		
		
		
		try {
			req.setAttribute("list", o.getList(page));
		} catch (ClassNotFoundException e) {
			e.printStackTrace();
		} catch (SQLException e) {
			e.printStackTrace();
		}
		//가상의 주소에서 상대경로
		req.getRequestDispatcher("/WEB-INF/view/member/notice/list-partial.jsp").forward(req, resp);
		
	}
	
	@Override
	protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		int id = Integer.parseInt(req.getParameter("eid"));
		String title = req.getParameter("title");
		
		NoticeDao dao = new OracleNoticeDao();
		try {
			Notice no = dao.get(id);
			no.setTitle(title);
			dao.update(no);
		} catch (ClassNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		resp.sendRedirect("list");
	}
}
