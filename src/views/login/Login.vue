<template>
  <div class="login-wrap">
    <div class="login-left">
      <div class="login-left-box"></div>
    </div>

    <div class="login-right">
      <div class="account-body login-wrap login-start ">
        <div class="account-body-tabs">
          <ul class="tab-start">
            <li class="account-tab-phone on">短信登录／注册</li>
            <li class="account-tab-account">密码登录</li>
          </ul>
          <ul class="tab-quick">
            <li class="account-tab-scan">二维码登录</li>
          </ul>
          <div class="account-tab-switch">
            <div class="account-tab-switch-icon">
              <a class="quick icon-switch"></a>
              <a class="start icon-switch"></a>
            </div>
            <div class="account-tab-switch-text">
              <span class="quick">扫码登录</span>
              <span class="start">短信登录／注册</span>
            </div>
          </div>
        </div>
        <div class="account-tabcon-start">
          <div class="account-form">
            <div class="account-form-tips">
              请仔细阅读
              <a
                target="_blank"
                href="https://accounts.douban.com/passport/agreement"
                >豆瓣使用协议、隐私政策</a
              >
            </div>
            <div class="account-form-error"><span class="hide"></span></div>

            <div class="account-form-raw">
              <label class="account-form-label">手机号：</label>
              <div class="account-form-field account-form-field-phone">
                <span class="icon clear-input"></span>
                <input
                  type="phone"
                  name="phone"
                  maxlength="13"
                  class="account-form-input"
                  placeholder="手机号"
                  tabindex="1"
                />
                <div class="account-form-field-area-code">
                  <div
                    class="account-form-field-area-code-label js-choose-district"
                  >
                    +86
                  </div>
                </div>
              </div>
            </div>
            <div class="nation-select hide"></div>

            <div class="account-form-raw">
              <label class="account-form-label">验证码：</label>
              <div class="account-form-field account-form-codes">
                <input
                  id="code"
                  type="text"
                  name="code"
                  maxlength="6"
                  class="account-form-input"
                  placeholder="验证码"
                  tabindex="2"
                  autocomplete="off"
                />
                <div class="account-form-field-code">
                  <a href="javascript:;">重新发送</a>
                </div>
              </div>
            </div>

            <div class="account-form-field-submit ">
              <a href="javascript:;" class="btn btn-phone">登录豆瓣</a>
            </div>
          </div>
          <div class="account-form-ft">
            <p class="account-form-link">
              <a
                class="help-link"
                target="_blank"
                data-action="login_phone_nocode"
                href="https://help.douban.com/account?app=1#t1-q5"
                >收不到验证码</a
              >
            </p>
            <!-- 账号安全改进 2020-09-23 -->
            <!-- <p class="account-form-remember">
        <input name="remember" type="checkbox" id="account-form-remember" tabindex="4"><label for="account-form-remember">下次自动登录</label>
      </p> -->
          </div>
          <div class="captcha-error hide">
            登录出现问题，<a
              href="javascript:window.location.reload()"
              data-action="captch_error"
              >反馈并刷新</a
            >
          </div>
          <div class="account-form-3rd ">
            <div class="account-form-3rd-hd">第三方登录:</div>
            <div class="account-form-3rd-bd">
              <a
                href="https://www.douban.com/accounts/connect/wechat/?from=book&amp;redir=https%3A//book.douban.com/"
                class="link-3rd-wx link-3rd-wx-on"
                target="_top"
                title="用微信登录"
                >wechat</a
              >
              <a
                href="https://www.douban.com/accounts/connect/sina_weibo/?from=book&amp;redir=https%3A//book.douban.com/&amp;fallback="
                class="link-3rd-wb link-3rd-wb-on"
                target="_top"
                title="用微博登录"
                >weibo</a
              >
            </div>
          </div>
        </div>
        <div class="account-tabcon-quick account-quick">
          <div class="account-qr-code">
            <div class="account-qr-scan">
              加载中...
            </div>
            <div class="account-qr-text">
              打开 <a href="https://www.douban.com/mobile/">豆瓣App</a><br />
              扫一扫登录
            </div>
            <div class="account-qr-fail hide">
              <span>登录失败</span>
              <a href="javascript:;" class="btn btn-refresh account-qr-refresh"
                >点击刷新</a
              >
            </div>
          </div>
          <div class="account-qr-success hide">
            <div class="account-qr-success-hd">扫描成功！</div>
            <div class="account-qr-success-bd">
              <div class="account-qr-success-bd-text">请在手机上确认登录</div>
              <div class="account-qr-success-bd-pic"></div>
              <div class="account-qr-success-bd-link">
                <a href="javascript:;">返回二维码登录</a>
              </div>
            </div>
          </div>
          <div class="account-qr-link">
            <a href="javascript:;" class="link-phone">短信登录/注册</a>
            <span>|</span>
            <a href="javascript:;" class="link-account">密码登录</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login"
};
</script>

<style lang="less" scoped>
.login-wrap {
  width: 1002px;
  margin: 124px auto 0;
  position: relative;

  .login-left {
    display: inline-block;
    height: 584px;
    width: 494px;
    position: relative;
    left: 50%;
    margin-left: -432px;
    vertical-align: top;
    background: url("../../assets/img/download.png") 0 0 no-repeat;
    background-size: 100%;
    overflow: visible;
  }

  .login-right {
    display: inline-block;
    border: 1px solid #d8d8d8;
    width: 340px;
    position: relative;
    left: 50%;
    margin-top: 25px;
    margin-left: -46px;
    vertical-align: top;

    .account-body {
      min-height: 450px;
      width: 340px;
      padding: 50px 30px 100px;
      overflow: hidden;
      position: relative;
      background: #fff;
      margin: auto;
      box-sizing: border-box;

      .account-tabcon-start {
        .account-form {
          position: relative;
          .account-form-tips {
            color: #9b9b9b;
          }
          .account-form-error {
            min-height: 20px;
            position: static;
            margin-bottom: 5px;
            background: none;
          }
          .account-form-raw {
            margin-bottom: 10px;
            position: relative;
          }
        }
      }

      .account-body-tabs {
        margin-bottom: 10px;
        color: #9b9b9b;
        font-size: 0;

        ul {
          border-bottom: 1px solid #ececec;

          li {
            display: inline-block;
            width: 50%;
            font-size: 18px;
            line-height: 2;
            text-align: center;
            cursor: pointer;
          }

          li.on {
            border-bottom: 2px solid #494949;
            color: #333;
            font-weight: 600;
          }
        }
      }
    }
  }
}
</style>