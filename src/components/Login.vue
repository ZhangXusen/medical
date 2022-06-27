<template>
  <div
    class="container"
    :class="{ 'right-panel-active': isShow }"
    id="container"
  >
    <!-- 注册 -->
    <div class="form-container sign-up-container">
      <Form ref="sign" v-slot="{ errors }">
        <h1>注册</h1>
        <div class="social-container">
          <a href="#" class="social"><span class="iconfont icon-QQ"></span></a>
          <a href="#" class="social"
            ><span class="iconfont icon-weixin"></span
          ></a>
          <a href="#" class="social"
            ><span class="iconfont icon-weibo"></span
          ></a>
        </div>
        <Field
          autocomplete="off"
          type="text"
          name="account"
          :rules="checkAccount"
          v-model="signForm.account"
          placeholder="请输入用户名或手机号"
          :class="{ 'error-bor': errors.account }"
        />
        <div class="error" v-if="errors.account">{{ errors.account }}</div>
        <Field
          type="email"
          v-model="signForm.email"
          name="email"
          :rules="checkEmail"
          placeholder="请输入邮箱"
          :class="{ 'error-bor': errors.email }"
        />
        <div class="error" v-if="errors.email">
          {{ errors.email }}
        </div>
        <Field
          autocomplete="off"
          type="password"
          v-model="signForm.password"
          name="password"
          :rules="checkPwd"
          placeholder="请输入密码"
          :class="{ 'error-bor': errors.password }"
        />
        <div class="error" v-if="errors.password">
          {{ errors.password }}
        </div>
        <button @click="handleSign">注册</button>
      </Form>
    </div>
    <!-- 登录 -->
    <div class="form-container sign-in-container">
      <Form action="#" ref="login" v-slot="{ errors }">
        <h1>登录</h1>
        <div class="social-container">
          <a href="#" class="social"><span class="iconfont">&#xe667;</span></a>
          <a href="#" class="social"><div class="iconfont">&#xe666;</div></a>
          <a href="#" class="social"><div class="iconfont">&#xe607;</div></a>
        </div>
        <Field
          autocomplete="off"
          type="text"
          name="account"
          :rules="checkAccount"
          v-model="form.account"
          placeholder="请输入用户名或手机号"
          :class="{ 'error-bor': errors.account }"
        />
        <div class="error" v-if="errors.account">{{ errors.account }}</div>
        <Field
          type="password"
          v-model="form.password"
          name="password"
          :rules="checkPwd"
          placeholder="请输入密码"
          :class="{ 'error-bor': errors.password }"
        />
        <div class="error" v-if="errors.password">
          {{ errors.password }}
        </div>
        <a href="#" class="fgtpsa">忘记密码？</a>
        <button @click,prevent="handleLogin">登录</button>
      </Form>
    </div>
    <div class="overlay-container">
      <div class="overlay">
        <div class="overlay-panel overlay-left">
          <h1>Welcome Back!</h1>
          <p>To keep connected with us please login with your personal info</p>
          <button class="ghost" id="signIn" @click="isShow = !isShow">
            登录
          </button>
        </div>
        <div class="overlay-panel overlay-right">
          <h1>Hello, Friend!</h1>
          <p>Enter your personal details and start journey with us</p>
          <button class="ghost" id="signUp" @click="isShow = !isShow">
            注册
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Form, Field } from "vee-validate";
import { defineRule } from "vee-validate";
import { useStore } from "vuex";
import { register } from "@/api/user.js";
import { ElMessage } from "element-plus";
const { ref, reactive } = require("vue-demi");

const isShow = ref(false);
const form = reactive({
  // 用户名
  account: null,
  // 密码
  password: null,
});
const signForm = reactive({
  account: null,
  email: null,
  password: null,
});
// 定义表单-用户名验证规则
const checkAccount = (value) => {
  // value是将来使用该规则的表单元素的值
  // 1. 必填
  // 2. 6-20个字符，需要以字母开头
  // 如何反馈校验成功还是失败，返回true才是成功，其他情况失败，返回失败原因。
  if (!value) return "请输入用户名";
  if (!/^[a-zA-Z]\w{5,9}$/.test(value)) return "字母开头且6-20个字符";
  return true;
};

// 密码验证规则
const checkPwd = (value) => {
  if (!value) return "请输入密码";
  if (!/^\w{6,24}$/.test(value)) return "密码是6-24个字符";
  return true;
};
const checkEmail = (value) => {
  if (!value) return "请输入邮箱";
  if (!/^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(value)) {
    return "请输入正确格式邮箱";
  }
  return true;
};
// defineRule('email', value => {
//   // Field is empty, should pass
//   if (!value || !value.length) {
//     return true;
//   }
//   // Check if email
//   if (!/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}/.test(value)) {
//     return 'This field must be a valid email';
//   }
//   return true;
// });
// defineRule('required', value => {
//   if (!value || !value.length) {
//     return 'This field is required';
//   }
//   return true;
// });

//登录
const store = useStore();
const login = ref(null);

const handleLogin = () => {
  // 1.触发表单校验
  login.value.validate((valid) => {
    if (!valid) return;
    console.log(store);
    store
      .dispatch("user/login", form)
      .then(() => {
        ElMessage({
          message: "注册成功！",
          type: "success",
        });
      })
      .catch((err) => {
        console.log(err);
      });
  });
};

//注册
const sign = ref(null);

const handleSign = () => {
  sign.value.validate((valid) => {
    if (!valid) return;
    register(signForm)
      .then((data) => {
        console.log(data);
        // this.commit("user/setToken", data.token);
        isShow.value = !isShow.value;
        ElMessage({
          message: "注册成功！",
          type: "success",
        });
        resolve();
      })
      .catch((error) => {
        reject(error);
      });
  });
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css?family=Montserrat:400,800");

h1 {
  font-weight: bold;
  margin: 20px 0px;
}

h2 {
  text-align: center;
}

p {
  font-size: 14px;
  font-weight: 100;
  line-height: 20px;
  letter-spacing: 0.5px;
  margin: 20px 0 30px;
}

span {
  font-size: 12px;
}

a {
  color: #333;
  font-size: 14px;
  text-decoration: none;
  margin: 15px 0;
}

button {
  border-radius: 20px;
  border: 1px solid #ff4b2b;
  background-color: #ff4b2b;
  color: #ffffff;
  font-size: 14px;
  font-weight: bold;
  padding: 12px 45px;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: transform 80ms ease-in;
}

button:active {
  transform: scale(0.95);
}

button:focus {
  outline: none;
}

button.ghost {
  background-color: transparent;
  border-color: #ffffff;
}

form {
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 50px;
  height: 100%;
  text-align: center;
}

input {
  position: relative;
  background-color: #eee;
  border: none;
  border-radius: 5px;
  padding: 12px 15px;
  margin: 8px 0;
  width: 100%;
}
input:focus {
  border: 2px solid #66afe9;
  outline: 0;
}
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  position: relative;
  overflow: hidden;
  width: 768px;
  max-width: 100%;
  min-height: 480px;
}

.form-container {
  position: absolute;
  top: 0;
  height: 100%;
  transition: all 0.6s ease-in-out;
}

.sign-in-container {
  left: 0;
  width: 50%;
  z-index: 2;
}
.fgtpsa:hover {
  color: #66afe9;
}
.container.right-panel-active .sign-in-container {
  transform: translateX(100%);
}

.sign-up-container {
  left: 0;
  width: 50%;
  opacity: 0;
  z-index: 1;
}

.container.right-panel-active .sign-up-container {
  transform: translateX(100%);
  opacity: 1;
  z-index: 5;
  animation: show 0.6s;
}

@keyframes show {
  0%,
  49.99% {
    opacity: 0;
    z-index: 1;
  }

  50%,
  100% {
    opacity: 1;
    z-index: 5;
  }
}

.overlay-container {
  position: absolute;
  top: 0;
  left: 50%;
  width: 50%;
  height: 100%;
  overflow: hidden;
  transition: transform 0.6s ease-in-out;
  z-index: 100;
}

.container.right-panel-active .overlay-container {
  transform: translateX(-100%);
}

.overlay {
  background: #ff416c;
  background: -webkit-linear-gradient(to right, #ff4b2b, #ff416c);
  background: linear-gradient(to right, #ff4b2b, #ff416c);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 0 0;
  color: #ffffff;
  position: relative;
  left: -100%;
  height: 100%;
  width: 200%;
  transform: translateX(0);
  transition: transform 0.6s ease-in-out;
}

.container.right-panel-active .overlay {
  transform: translateX(50%);
}

.overlay-panel {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  // padding: 0 40px;
  text-align: center;
  top: 0;
  height: 100%;
  width: 50%;
  transform: translateX(0);
  transition: transform 0.6s ease-in-out;
}

.overlay-left {
  transform: translateX(-20%);
}

.container.right-panel-active .overlay-left {
  transform: translateX(0);
}

.overlay-right {
  right: 0;
  transform: translateX(0);
}

.container.right-panel-active .overlay-right {
  transform: translateX(20%);
}
.social-container {
  margin: 20px 0;
}

.social-container a {
  border: 1px solid #dddddd;
  border-radius: 50%;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin: 0 5px;
  height: 40px;
  width: 40px;
}
.iconfont {
  font-size: 28px;
}
.error {
  width: 100%;
  font-size: 12px;
  color: #ff3040;
  text-align: left;
}
.error-bor {
  border: 2px solid red;
}
</style>
