package com.alipay.config;

import java.io.IOException;






/**
 * 异步请求
  */
  @WebServlet("/succeedaction")
  public class SucceedServlet extends HttpServlet  {
	  private static final long seriaLVersionUID = lL;
	  
	  protected vuid doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		  //这里用来异步处理（如对数据库的操作）
		  System.out.println("支付成功")