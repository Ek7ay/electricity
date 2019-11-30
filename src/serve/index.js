import ajax from './ajax'

// 1. 定义基础路径
const BASE_URL = 'https://mock.cangdu.org/mock/5d940466d360e8289c6a8eb7/api/';
const baseUrl = "http://39.106.33.110:7300/mock/5de0dee2994998166e562224/electricity/";



/***** 登录界面接口 *********/
// 1.获取手机验证码(GET)
// Easy Mock 模拟发送验证码
export const getPhoneCaptcha = (phoneNumber) => ajax(baseUrl + 'getVerificationCode', {
  phoneNumber
});

// 2.手机验证码登录(POST)
// Easy Mock 模拟用户登录
export const phoneCaptchaLogin = (phone, captcha) => ajax(BASE_URL + 'login_code', {
  phone,
  captcha
}, 'POST');

// 3.账号密码登录(POST)
export const pwdLogin = (userName, pwd, captcha) => ajax(BASE_URL + 'login_pwd', {
  userName,
  pwd,
  captcha
}, 'POST');
