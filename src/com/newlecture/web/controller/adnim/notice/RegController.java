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
		location = "d:\\temp",//파일 메모리 공간에 올려놓으면 많이 잡아먹으니까 파일에 임시로 저장시켜서 보낸다 저장이라기보다 바로 복사 하지만 메모리 소비 를 낮춤
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
//		/업로드된 파일 경로를 얻음
		String urlPath = "/upload";
		String path = req.getServletContext().getRealPath(urlPath);
		
		System.out.println(path);
		
//		업로드된 파일명 얻음.
		String fileName = filePart.getSubmittedFileName();
		System.out.println(fileName);
//		경로는 운영체제 따라서 다르다. 
//		String filePath = path +"\\"+fileName;
		
//		자바에서는 운영체제에 따라서 다르게 경로를 해주는 것이 있다. file.pathseparator
		String filePath = path +File.separator+fileName;
		System.out.println(filePath);
//		경로 오류 문제
		File pathFile = new File(path);
		if(!pathFile.exists()) {
			pathFile.mkdirs();
			System.out.println("durl");
		}
//		동일한 파일명에 경로에 이미 존재하는 문제: 이름정책 좀더 생각해보자.
//		File sameName = new File(fileName);
//		if(sameName.exists()) {
//			 String abb[] = fileName.split("\\.");
//			 if(abb[0].lastIndexOf("\\)")==1)
//				 
//		}
//	업로드 용이기때문에 상대방의 이름만 같은경우엔 (1), (1)부터 시작하면 그때 (2.....n)로 넘어간다.	
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
			
		//트렌젝션의필요성 을 느껴야한다 다른이가 들어왔을때 락을걸어서 마무리를 해야하기때문이다.
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
// 데이터 베이스에 첨부파일을 업로드 할수 있게 만든다,. 
}