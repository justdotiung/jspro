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

//필터 를 이용해서 한글코드 구현
//특정 경로 url 패턴 등에서 동작 가능하게 할수있다.
//보안(인증)의 기능으로써도 필터를 사용할수있따.

//어노테이션으로써 초기화 인코딩값 지정
@WebFilter(
		urlPatterns= {"/*"},
		initParams= {@WebInitParam(name="encoding", value="UTF-8")}
		)
public class CharacterEncodingFilter implements Filter {
	
	private String encoding = "UTF-8";

	
	//초기값을 설정할수있는 메서드
	//xml 설정시의 방법 getinitparam과 xml param-name 이같아야 한다.
	
	@Override
	public void init(FilterConfig filterConfig) throws ServletException {
		String encoding = filterConfig.getInitParameter("encoding");
		
		if(encoding != null && !encoding.equals(""))
			this.encoding = encoding;
	}
	@Override
	public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain)
			throws IOException, ServletException {
	//실행여부 판단 
		//System.out.println("필터 사전 실행");
		
		request.setCharacterEncoding("UTF-8");
		chain.doFilter(request, response);

		//필터후 실행보여준다.
//		System.out.println("필터 사후 실행");
	}
}
