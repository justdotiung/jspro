package com.newlecture.web.controller.adnim.notice;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.SQLException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.newlecture.web.dao.NoticeDao;
import com.newlecture.web.dao.oracle.OracleNoticeDao;

@WebServlet("/notice/del-ajax")
public class DeleteController extends HttpServlet {
	@Override
	protected void service(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		Integer id = Integer.parseInt(req.getParameter("id"));
		
		NoticeDao noticeDao = new OracleNoticeDao();
		int result = 0;
		try {
			result = noticeDao.delete(id);
		} catch (ClassNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		resp.setCharacterEncoding("UTF-8");
		resp.setContentType("text/html; charset=UTF-8");
		
		PrintWriter out = resp.getWriter();
		if (result != -1)
		out.write("ok");
		else
			out.write("����");
	}
}
