package com.newlecture.web.filter;

import java.io.IOException;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.annotation.WebFilter;
import javax.servlet.annotation.WebInitParam;

//���� �� �̿��ؼ� �ѱ��ڵ� ����
//Ư�� ��� url ���� ��� ���� �����ϰ� �Ҽ��ִ�.
//����(����)�� ������νᵵ ���͸� ����Ҽ��ֵ�.

//������̼����ν� �ʱ�ȭ ���ڵ��� ����
@WebFilter(
		urlPatterns= {"/*"},
		initParams= {@WebInitParam(name="encoding", value="UTF-8")}
		)
public class CharacterEncodingFilter implements Filter {
	
	private String encoding = "UTF-8";

	
	//�ʱⰪ�� �����Ҽ��ִ� �޼���
	//xml �������� ��� getinitparam�� xml param-name �̰��ƾ� �Ѵ�.
	
	@Override
	public void init(FilterConfig filterConfig) throws ServletException {
		String encoding = filterConfig.getInitParameter("encoding");
		
		if(encoding != null && !encoding.equals(""))
			this.encoding = encoding;
	}
	@Override
	public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain)
			throws IOException, ServletException {
	//���࿩�� �Ǵ� 
		//System.out.println("���� ���� ����");
		
		request.setCharacterEncoding("UTF-8");
		chain.doFilter(request, response);

		//������ ���ຸ���ش�.
//		System.out.println("���� ���� ����");
	}
}
