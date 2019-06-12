package com.newlecture.web.controller.adnim.notice;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.sql.SQLException;

import javax.servlet.ServletException;
import javax.servlet.annotation.MultipartConfig;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.Part;

import com.newlecture.web.dao.NoticeDao;
import com.newlecture.web.dao.NoticeFileDao;
import com.newlecture.web.dao.oracle.OracleNoticeDao;
import com.newlecture.web.dao.oracle.OracleNoticeFileDao;
import com.newlecture.web.entity.Notice;
import com.newlecture.web.entity.NoticeFile;

@WebServlet("/root/notice/reg")
@MultipartConfig(
		location = "d:\\temp",//���� �޸� ������ �÷������� ���� ��Ƹ����ϱ� ���Ͽ� �ӽ÷� ������Ѽ� ������ �����̶�⺸�� �ٷ� ���� ������ �޸� �Һ� �� ����
		fileSizeThreshold= 1024*1024,
		maxFileSize=1024*1024*5,
		maxRequestSize=1024*1024*5*5
	)
public class RegController extends HttpServlet{
	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		req.getRequestDispatcher("/WEB-INF/view/notice/reg.jsp").forward(req, resp);
	}
	@Override
	protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {

		Part filePart = req.getPart("file");
//		/���ε�� ���� ��θ� ����
		String urlPath = "/upload";
		String path = req.getServletContext().getRealPath(urlPath);
		
		System.out.println(path);
		
//		���ε�� ���ϸ� ����.
		String fileName = filePart.getSubmittedFileName();
		System.out.println(fileName);
//		��δ� �ü�� ���� �ٸ���. 
//		String filePath = path +"\\"+fileName;
		
//		�ڹٿ����� �ü���� ���� �ٸ��� ��θ� ���ִ� ���� �ִ�. file.pathseparator
		String filePath = path +File.separator+fileName;
		System.out.println(filePath);
//		��� ���� ����
		File pathFile = new File(path);
		if(!pathFile.exists()) {
			pathFile.mkdirs();
			System.out.println("durl");
		}
//		������ ���ϸ� ��ο� �̹� �����ϴ� ����: �̸���å ���� �����غ���.
//		File sameName = new File(fileName);
//		if(sameName.exists()) {
//			 String abb[] = fileName.split("\\.");
//			 if(abb[0].lastIndexOf("\\)")==1)
//				 
//		}
//	���ε� ���̱⶧���� ������ �̸��� ������쿣 (1), (1)���� �����ϸ� �׶� (2.....n)�� �Ѿ��.	
		File sameFile = new File(filePath);
		
		if (sameFile.exists()) {
			
			int ne = fileName.lastIndexOf(".");
			String name = fileName.substring(0,ne);
			String suffix = fileName.substring(ne);
			
			int parenS = name.lastIndexOf("(");
			int parenE = name.lastIndexOf(")");
			
			System.out.println(name);
			System.out.println(suffix);
			System.out.println(parenE);
			
			if (parenE == -1) {
				
				fileName = name + "(" + 1 + ")" + suffix;
				
			}else {
				
				String indexC = name.substring(parenS + 1, parenE);
				int indexN = Integer.parseInt(indexC);
				indexN++;
				fileName = fileName.substring(0, parenS + 1) + indexN + ")" + suffix;
			}
			
		}
		
		
		InputStream fis =filePart.getInputStream();
		OutputStream fos =new FileOutputStream(filePath);
			
		int i= 0;
		byte[] arr = new byte[1024];
		
		while((i=fis.read(arr)) != -1) {
			fos.write(arr, 0, i);
		}
		fos.close();
		fis.close();
		
		int result =0;
		//upload
		NoticeFileDao nf= new OracleNoticeFileDao();
		NoticeDao o = new OracleNoticeDao();
		String title = req.getParameter("title");
		String content = req.getParameter("content");
		
		Notice n= new Notice(); 
		n.setContent(content);
		n.setTitle(title);
		System.out.println(title);
		try {
			
		//Ʈ���������ʿ伺 �� �������Ѵ� �ٸ��̰� �������� �����ɾ �������� �ؾ��ϱ⶧���̴�.
		 result = o.insert(n);
		 int noticeId = o.getLastId();
		 
		 NoticeFile nFile = new NoticeFile();
		
		 nFile.setName(fileName);
		 nFile.setNoticeId(noticeId);
		 
		 nf.insert(nFile);
		 
		 
		} catch (ClassNotFoundException e) {
			e.printStackTrace();
		} catch (SQLException e) {
			e.printStackTrace();
		}
		if(result != 1)
			resp.sendRedirect("error");
		else
			resp.sendRedirect("list");
	}
// ������ ���̽��� ÷�������� ���ε� �Ҽ� �ְ� �����,. 
}