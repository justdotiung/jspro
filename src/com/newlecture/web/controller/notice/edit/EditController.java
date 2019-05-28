package com.newlecture.web.controller.notice.edit;

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

@WebServlet("/root/notice/edit")
public class EditController extends HttpServlet {
//	@Override
//	protected void service(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
//		NoticeDao o = new OracleNoticeDao();
//		Integer a = Integer.parseInt(req.getParameter("id"));
//		try {
//			req.setAttribute("notice", o.get(a));
//		} catch (ClassNotFoundException e) {
//			// TODO Auto-generated catch block
//			e.printStackTrace();
//		} catch (SQLException e) {
//			// TODO Auto-generated catch block
//			e.printStackTrace();
//		}
//		// 가상의 주소에서 상대경로
//		req.getRequestDispatcher("/WEB-INF/view/notice/edit.jsp").forward(req, resp);
//
//	}
	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		NoticeDao o = new OracleNoticeDao();
		Integer a = Integer.parseInt(req.getParameter("id"));
		try {
			req.setAttribute("notice", o.get(a));
		} catch (ClassNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		// 가상의 주소에서 상대경로
		req.getRequestDispatcher("/WEB-INF/view/notice/edit.jsp").forward(req, resp);

	}
	@Override
	protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		
		NoticeDao o = new OracleNoticeDao();
		Notice n;
		String title = req.getParameter("title");
		String content = req.getParameter("content");
		Integer a = Integer.parseInt(req.getParameter("id"));
		int result =0;
		try {
			n = o.get(a);
			n.setContent(content);
			n.setTitle(title);
		 result = o.update(n);
		//req.setAttribute("notice", o.get(a));
			
		} catch (ClassNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		if(result != 1)
			resp.sendRedirect("error");
		else
			resp.sendRedirect("detail?id="+a);
		// 가상의 주소에서 상대경로
		//req.getRequestDispatcher("/WEB-INF/view/notice/detail.jsp").forward(req, resp);
		
	}
}
