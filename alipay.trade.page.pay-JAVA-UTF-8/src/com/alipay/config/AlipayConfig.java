﻿package com.alipay.config;

import java.io.FileWriter;
import java.io.IOException;

/* *
 *类名：AlipayConfig
 *功能：基础配置类
 *详细：设置帐户有关信息及返回路径
 *修改日期：2017-04-05
 *说明：
 *以下代码只是为了方便商户测试而提供的样例代码，商户可以根据自己网站的需要，按照技术文档编写,并非一定要使用该代码。
 *该代码仅供学习和研究支付宝接口使用，只是提供一个参考。
 */

public class AlipayConfig {
	
//↓↓↓↓↓↓↓↓↓↓请在这里配置您的基本信息↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓

	// 应用ID,您的APPID，收款账号既是您的APPID对应支付宝账号
	public static String app_id = "2021000119649571";
	
	// 商户私钥，您的PKCS8格式RSA2私钥
    public static String merchant_private_key = "MIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDTxO1fDJyf30SR/06QJZtHUJqtC/SFW2r5IgcB7/vFgIdA7AA5R37EqvxJrqVrgUFOXHzp/mPKPXbfjpz+fduRHup0UtPFvzfWiW6W9oi07Yoci/Akepe7xhM0H87St6KRGFrYMVyZzETm/xzeCQj6QPeCL3eLPw8VPy/2LNp5wLnKmM3vbz9C6Dd7ZLDoKK+3xmhvRNQ7z8suuoVLGEGLCiUOx1g9WW7qmqEU4pk3U20jnG+q0VJtBqLX0LQ4swV14rHSJJABXFnWOOUceJFRPSsuecaQB3oPHpOY7mFHAz9pROb4Bl3Lr+Tq125g1Idf5roVMH3gWcUzzzQX+2cJAgMBAAECggEAOtARQHmHMhtWttlZ30yicE7hdjfAxByce+5IVfBpUvOcHJqugTnq6gG2qVv4kv/FvFaRVocQ/cTOM84uqbsYdJhKct3h9KRjhJCMhx6W3vCtj7oJiogFhd+/y5Ud4oWff35tFGe5GPmTFTg6syt9M8tBMgWuxJxRuwvebRcN4gvzsMtZaZVmThsU+exEuDxcdkuYbPDlHq6bhHzW5v9aPSdEx5D+DlAIdBfUXi16b6Ir7ayAmz0fFHpGZF+wNlyEBCV7/rOvb2VSiH6KM0SNRcDbYFvUoxDBfJbbbCbCEpzOu5n3ePyK2bOfo+CvEIdyrq9uHA+AQC+CBkir5vb+gQKBgQD4vbCRoaJuMpvb1jhzIVNrqOu8GfNYVn6CdiqAd6YwP8E7d/YXvtsZG6D+PiZViLB6ebUHWSmBra97LEoaVF5WrnkEi8Z6HhDwg5P5fOBHMTWRyXqNfIG6LCycgLOYwohDpXuvw2U+t1nA2xsFJoAf4pdJ2vYqhz2nQsnBJrqTcQKBgQDZ8wbWpFFIrkXRCHD3/gmmFT0s6NCsozN2jtcc3ZjXhXcad8dek0Ce3HWrllVMfEK4YTy8pKwENBOIEEJkE/H31pFosMZkC/0OLuO5w99W0liSDKoy+TN16bhBdQA6EwvrirpVaw+0ORUDrSmrhyyuZ3cs4//zZmQHd+HgJkCRGQKBgQCt8NA5dqNElkVhfLMq52IThiOa/TarTojXKFTeU002rk6tDF1eC4vhSe3R/JoH9Dcc3mEWS2Z4FYICC12ifd8elJFx+WCI4t+LoSdoLsgTYLkKQq9do3SAQQXNRz7QEzEAxQbySRxSuBqef1msx1iPc3/CGMlNwhb+EPlPBYsxMQKBgA3WeUuteR+1OOeRsqJ8NZ6e4Jh2W7FqVz0iypOhmi+s4KgEjNr7XHH5q1rum5HUnePZAKM1jVpi+A5+gcia35UNwYO1HZOCk1mQLpM/1XFMv6TeOvwriFHnOfSl+hK13N7imvwLZR7bNPNbzjZ+yZ51IULvYvPQP2+d8/BoXVcZAoGAb4bmW7orkQxN7uzBp8TnKrHV9EWtldOIvFoskvF7S2YHQCMOj0oUWRW5uLfh9QNKMUa0nga+7OnZMnqMqZvcr2QwN0t44UWDywXBdTDhY4j6N1U0Ytn1UG+//6D7CHeUuCarLLro9kf3l69nQKQgXz7DLIUxnQ2jP8oQ/loSeWs=";
	
	// 支付宝公钥,查看地址：https://openhome.alipay.com/platform/keyManage.htm 对应APPID下的支付宝公钥。
    public static String alipay_public_key = "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA08TtXwycn99Ekf9OkCWbR1CarQv0hVtq+SIHAe/7xYCHQOwAOUd+xKr8Sa6la4FBTlx86f5jyj12346c/n3bkR7qdFLTxb831olulvaItO2KHIvwJHqXu8YTNB/O0reikRha2DFcmcxE5v8c3gkI+kD3gi93iz8PFT8v9izaecC5ypjN728/Qug3e2Sw6Civt8Zob0TUO8/LLrqFSxhBiwolDsdYPVlu6pqhFOKZN1NtI5xvqtFSbQai19C0OLMFdeKx0iSQAVxZ1jjlHHiRUT0rLnnGkAd6Dx6TmO5hRwM/aUTm+AZdy6/k6tduYNSHX+a6FTB94FnFM880F/tnCQIDAQAB";

	// 服务器异步通知页面路径  需http://格式的完整路径，不能加?id=123这类自定义参数，必须外网可以正常访问
	public static String notify_url = "http://wchenyi.github.io/alipay.trade.page.pay-JAVA-UTF-8/notify_url.jsp";

	// 页面跳转同步通知页面路径 需http://格式的完整路径，不能加?id=123这类自定义参数，必须外网可以正常访问
	public static String return_url = "http://wchenyi.github.io/alipay.trade.page.pay-JAVA-UTF-8/return_url.jsp";

	// 签名方式
	public static String sign_type = "RSA2";
	
	// 字符编码格式
	public static String charset = "utf-8";
	
	// 支付宝网关
	public static String gatewayUrl = "https://openapi.alipaydev.com/gateway.do";
	
	// 支付宝网关
	public static String log_path = "C:\\";


//↑↑↑↑↑↑↑↑↑↑请在这里配置您的基本信息↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑

    /** 
     * 写日志，方便测试（看网站需求，也可以改成把记录存入数据库）
     * @param sWord 要写入日志里的文本内容
     */
    public static void logResult(String sWord) {
        FileWriter writer = null;
        try {
            writer = new FileWriter(log_path + "alipay_log_" + System.currentTimeMillis()+".txt");
            writer.write(sWord);
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            if (writer != null) {
                try {
                    writer.close();
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
        }
    }
}

