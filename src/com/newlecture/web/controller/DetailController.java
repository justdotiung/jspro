package com.newlecture.web.controller;

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
@WebServlet("/member/notice/detail")
public class DetailController extends HttpServlet {
	@Override
	protected void service(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {

		int id =Integer.parseInt(req.getParameter("id"));
		if(req.getSession().getAttribute("id") == null) {
			resp.sendRedirect("/member/login?return-url=/member/notice/detail?id="+id);
			//���ϰ���url�� ������ ����url���� �޾ƾ��Ѵ�.
			return;
		}
		
		
		NoticeDao o = new OracleNoticeDao();
		NoticeFileDao of = new OracleNoticeFileDao();
		//�Ķ���ͽ�Ʈ��
		
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
		req.getRequestDispatcher("/WEB-INF/view/member/notice/detail.jsp").forward(req, resp);
	}
	
}
