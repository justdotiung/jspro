package com.newlecture.web.controller.adnim.notice;

import java.io.IOException;
import java.sql.SQLException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.newlecture.web.dao.NoticeDao;
import com.newlecture.web.dao.NoticeFileDao;
import com.newlecture.web.dao.oracle.OracleNoticeDao;
import com.newlecture.web.dao.oracle.OracleNoticeFileDao;
@WebServlet("/root/notice/detail")
public class DetailController extends HttpServlet {
	@Override
	protected void service(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		NoticeDao o = new OracleNoticeDao();
		NoticeFileDao of = new OracleNoticeFileDao();
		//파라메터스트링
		int id =Integer.parseInt(req.getParameter("id"));
		
		try {
			req.setAttribute("noticeFiles", of.getListByNoticeId(id));
			req.setAttribute("prev", o.getPrev(id));
			req.setAttribute("next", o.getNext(id));
			req.setAttribute("notice", o.get(id));
		} catch (ClassNotFoundException e) {

			e.printStackTrace();
		} catch (SQLException e) {

			e.printStackTrace();
		}
		req.getRequestDispatcher("/WEB-INF/view/notice/detail.jsp").forward(req, resp);
	}
	
}
