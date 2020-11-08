<template>
  <div class="logincontainer">
    <div class="topBannerWrap">
      <div class="bannerContainer">
        <a>
          <img
            src="https://img3.doubanio.com/f/accounts/4fd84763a74089b20eb02ba0225d6e7739d2c432/passport/pics/douban_logo@2x.png"
          />
        </a>
      </div>
    </div>
    <div class="login-wrap">
      <div class="login-left">
        <div class="login-left-box"></div>
      </div>

      <div class="login-right">
        <div class="account-body login-wrap login-start ">
          <div class="account-body-tabs">
            <ul class="tab-start">
              <li
                class="account-tab-phone"
                :class="{ on: type === 0 }"
                @click="type = 0"
              >
                短信登录／注册
              </li>
              <li
                class="account-tab-account"
                :class="{ on: type === 1 }"
                @click="type = 1"
              >
                密码登录
              </li>
            </ul>
            <!-- <ul class="tab-quick">
            <li class="account-tab-scan">二维码登录</li>
          </ul> -->
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
            <div
              class="loginInpt1"
              :style="{ display: type === 0 ? 'block' : 'none' }"
            >
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
                  <div class="account-form-field account-form-field-phone">
                    <span class="icon clear-input"></span>
                    <input
                      v-model="phone"
                      type="phone"
                      name="phone"
                      maxlength="11"
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
                  <div class="account-form-field account-form-codes">
                    <input
                      v-model="code"
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
                      <a href="javascript:;" @click="isCode ? '' : getCode()">{{
                        isCode ? `${time}s后重新发送` : "获取验证码"
                      }}</a>
                    </div>
                  </div>
                </div>

                <div class="account-form-field-submit ">
                  <a
                    href="javascript:;"
                    class="btn btn-phone"
                    :class="{
                      'btn-active': phone.trim() != '' && code.trim() != ''
                    }"
                    @click="toLogin(0)"
                    >登录豆瓣</a
                  >
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
              </div>
            </div>
            <div
              class="loginInpt2"
              :style="{ display: type === 1 ? 'block' : 'none' }"
            >
              <div class="account-form">
                <div class="account-form-error"><span class="hide"></span></div>

                <div class="account-form-raw">
                  <div class="account-form-field account-form-field-phone">
                    <span class="icon clear-input"></span>
                    <input
                      v-model="phone"
                      type="phone"
                      name="phone"
                      maxlength="11"
                      class="account-form-input"
                      placeholder="手机号 / 邮箱"
                      tabindex="1"
                    />
                  </div>
                </div>
                <div class="nation-select hide"></div>

                <div class="account-form-raw">
                  <div class="account-form-field account-form-codes">
                    <input
                      v-model="password"
                      id="code"
                      type="password"
                      name="password"
                      class="account-form-input"
                      placeholder="密码"
                      tabindex="2"
                      autocomplete="off"
                    />
                    <div class="account-form-field-code">
                      <a
                        href="javascript:;"
                        @click="$message('此功能正在开发中...')"
                        >找回密码</a
                      >
                    </div>
                  </div>
                </div>

                <div class="account-form-field-submit ">
                  <a
                    href="javascript:;"
                    class="btn btn-phone"
                    :class="{
                      'btn-active': phone.trim() != '' && code.trim() != ''
                    }"
                    @click="toLogin(1)"
                    >登录豆瓣</a
                  >
                </div>
              </div>
              <div class="account-form-ft">
                <p class="account-form-link">
                  <a
                    class="help-link"
                    target="_blank"
                    data-action="login_phone_nocode"
                    href="https://help.douban.com/account?app=1#t1-q5"
                    >海外手机登录</a
                  >
                </p>
              </div>
            </div>

            <div class="captcha-error hide" style="display:none">
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
                  >微信</a
                >
                <a
                  href="https://www.douban.com/accounts/connect/sina_weibo/?from=book&amp;redir=https%3A//book.douban.com/&amp;fallback="
                  class="link-3rd-wb link-3rd-wb-on"
                  target="_top"
                  title="用微博登录"
                  >微博</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  getRequestPhone,
  getLoginVerify,
  getVerifyUserCode
} from "@/api/login";
import { mapMutations } from "vuex";
export default {
  name: "Login",
  data() {
    return {
      phone: "",
      code: "",
      password: "",
      isCode: false,
      time: 60,
      type: 0
    };
  },
  methods: {
    ...mapMutations(["receiveUserInfo"]),
    async getCode() {
      let phoneExp = /^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/;
      let { phone, code } = this;
      if (!phone.trim()) {
        this.$message.error("手机号码不能为空!");
        this.phone = "";
        return;
      } else if (!phoneExp.test(phone)) {
        this.$message("请正确填写手机号!");
        this.phone = "";
        return;
      }

      if (!this.timer) {
        this.timer = setInterval(() => {
          this.time -= 1;
          if (this.time === 0) {
            clearInterval(this.timer);
            this.timer = null;
            this.time = 60;
            this.isCode = false;
          }
        }, 1000);
      }
      this.isCode = true;
      this.$message("发送验证码成功,请注意查收!");
      await getRequestPhone({ area_code: "+89", phone });
    },

    async toLogin(index) {
      let phoneExp = /^1[3|4|5|7|8][0-9]{9}$/;
      let { phone, password, code } = this;
      if (index === 0) {
        let result = await getVerifyUserCode({ telephone: phone, code });
        if (result.code === 2000) {
          this.receiveUserInfo(result.data);
          this.saveUserInfo(result.data);
          this.$message("登录成功,准备跳转");
          this.$router.push("/");
        } else {
          this.$message(result.message);
        }
      } else {
        if (!phone.trim()) {
          this.$message.error("手机号码不能为空!");
          this.phone = "";
          return;
        } else if (!phoneExp.test(phone)) {
          this.$message("请正确填写手机号!");
          this.phone = "";
          return;
        }

        if (!password.trim()) {
          this.$message.error("密码不能为空!");
          this.password = "";
          return;
        }

        let result = await getLoginVerify({ telephone: phone, password });
        if (result.code === 2000) {
          this.receiveUserInfo(result.data);
          this.saveUserInfo(result.data);
          this.$message("登录成功,准备跳转");
          this.$router.push("/");
        } else {
          this.$message(result.message);
        }
      }
    },

    saveUserInfo(data) {
      localStorage.setItem("userInfo", JSON.stringify(data));
    }
  }
};
</script>

<style lang="less" scoped>
.btn-active {
  cursor: pointer;
  background-color: #41ac52 !important;
}
.topBannerWrap {
  background: #edf4ed;
  .bannerContainer {
    width: 1040px;
    height: 70px;
    margin: 0 auto;

    img {
      margin-top: 22px;
      width: 142px;
      height: 28px;
    }
  }
}
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
        .account-form-ft {
          width: 100%;
          height: 41px;
          line-height: 41px;
          color: #333;

          .account-form-link {
            float: right;

            a {
              font-size: 13px;
              color: #41ac52;
              cursor: pointer;
            }
          }
        }
        .loginInpt1 {
          .account-form {
            position: relative;

            .account-form-field-submit {
              width: 280px;
              .btn {
                color: #fff;
                font-weight: 600;
                font-size: 15px;
                line-height: 36px;
                line-height: 36px;
                text-align: center;
                outline: 0;
                cursor: pointer;
                border-radius: 3px;
                background-color: rgba(66, 189, 86, 0.5);
                display: block;
              }
            }
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
              height: 37px;
              position: relative;
              border: 1px solid #e4e6e5;

              .account-form-codes {
                input#code {
                  padding: 0;
                  padding-left: 10px;
                  outline: none;
                }

                .account-form-field-code {
                  position: absolute;
                  top: 0px;
                  right: 10px;
                  line-height: 42px;
                  a {
                    color: #41ac52;
                    text-decoration: none;
                    border: none;
                    cursor: pointer;
                    font-size: 13px;
                  }
                }
              }

              .account-form-field {
                display: block;
                width: 100%;
                position: relative;
                margin-bottom: 10px;

                input {
                  padding-left: 60px;
                  padding-right: 40px;
                  height: 37px;
                  width: 100%;
                  box-sizing: border-box;
                  outline: none;
                  border: none;
                }

                .account-form-field-area-code {
                  width: 50px;
                  position: absolute;
                  top: 1px;
                  left: 1px;
                  overflow: hidden;

                  .account-form-field-area-code-label {
                    position: relative;
                    width: 100%;
                    margin: 0;
                    padding-right: 1px;
                    text-align: center;
                    font-size: 15px;
                    font-weight: 700;
                    line-height: 40px;
                    background: none;
                    cursor: pointer;
                  }
                }
              }
            }
          }
        }

        .loginInpt2 {
          .account-form {
            position: relative;

            .account-form-field-submit {
              width: 280px;
              .btn {
                color: #fff;
                font-weight: 600;
                font-size: 15px;
                line-height: 36px;
                line-height: 36px;
                text-align: center;
                outline: 0;
                cursor: pointer;
                border-radius: 3px;
                background-color: rgba(66, 189, 86, 0.5);
                display: block;
              }
            }
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
              height: 37px;
              position: relative;
              border: 1px solid #e4e6e5;

              .account-form-codes {
                input#code {
                  padding: 0;
                  padding-left: 10px;
                  outline: none;
                }

                .account-form-field-code {
                  position: absolute;
                  top: 0px;
                  right: 10px;
                  line-height: 42px;
                  a {
                    color: #41ac52;
                    text-decoration: none;
                    border: none;
                    cursor: pointer;
                    font-size: 13px;
                  }
                }
              }

              .account-form-field {
                display: block;
                width: 100%;
                position: relative;
                margin-bottom: 10px;

                input {
                  padding-left: 10px;
                  padding-right: 40px;
                  height: 37px;
                  width: 100%;
                  box-sizing: border-box;
                  outline: none;
                  border: none;
                }

                .account-form-field-area-code {
                  width: 50px;
                  position: absolute;
                  top: 1px;
                  left: 1px;
                  overflow: hidden;

                  .account-form-field-area-code-label {
                    position: relative;
                    width: 100%;
                    margin: 0;
                    padding-right: 1px;
                    text-align: center;
                    font-size: 15px;
                    font-weight: 700;
                    line-height: 40px;
                    background: none;
                    cursor: pointer;
                  }
                }
              }
            }
          }
        }

        .account-form-3rd {
          width: 280px;
          position: absolute;
          margin-top: 20px;

          .account-form-3rd-hd {
            color: #9b9b9b;
            font-size: 11px;
            text-align: center;

            &::after {
              content: "";
              display: block;
              background: #ddd;
              margin-top: 9px;
              width: 100px;
              height: 1px;
              float: left;
            }

            &::before {
              float: right;
              content: "";
              display: block;
              background: #ddd;
              margin-top: 9px;
              width: 100px;
              height: 1px;
            }
          }

          .account-form-3rd-bd {
            padding-top: 10px;
            text-align: center;

            a {
              display: inline-block;
              width: 80px;
              height: 100%;
              font-size: 15px;
            }
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