<template>
  <div class="login_container">
    <el-row>
      <el-col :span="12" :xs="0">
      </el-col>
      <el-col :span="12" :xs="24">
        <el-form class="login_form" :model="loginForm" :rules="rules" ref="loginForms">
          <h1>Hello</h1>
          <h2>欢迎来到硅谷甄选</h2>
          <el-form-item prop="username">
            <el-input :prefix-icon="User" placeholder="请输入用户名" v-model="loginForm.username"></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input :prefix-icon="Lock" type="password" placeholder="请输入密码" show-password
              v-model="loginForm.password"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" class="login_button" size="default" @click="login"
              :loading="loading">登录</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
// 收集数据
import { reactive, ref } from 'vue';
// 引入仓库
import useUserStore from '@/store/modules/user';
import { ElNotification } from 'element-plus';
import { User, Lock } from '@element-plus/icons-vue'
import { useRouter, useRoute } from 'vue-router';
let $router = useRouter();
let $route = useRoute();
// 引入获取当前时间
import { getTime } from '@/utils/time';
// 控制加载效果
let loading = ref(false);
// 校验表单
let loginForms = ref();
const userStore = useUserStore();
const loginForm = reactive({
  username: '',
  password: ''
});
// 登录回调
const login = async () => {
  // 校验表单
  await loginForms.value.validate();
  // 开启加载效果
  loading.value = true;
  try {
    // 调用仓库的登录方法
    let result = await userStore.userLogin(loginForm);
    // 编程式导航跳转,如果路由路径有query参数，就跳转到query路径，否则跳转到首页
    const redirect = $route.query.redirect;
    $router.push({ path: redirect || '/' });
    // 提示登录成功
    ElNotification({
      type: 'success',
      message: '欢迎回来',
      title: `HI,${getTime()}好`
    });
    // 关闭加载效果
    loading.value = false;
  } catch (error) {
    // 捕获错误并提示具体信息
    ElNotification({
      type: 'error',
      message: error
    });
    // 关闭加载效果
    loading.value = false;
  }
};
const validateUsername = (rules, value, callback) => {
  if (value.length >= 3) {
    callback()
  } else {
    callback(new Error('账号长度至少三位'))
  }
}
const validatePassword = (rules, value, callback) => {
  if (value.length >= 3) {
    callback()
  } else {
    callback(new Error('密码长度至少三位'))
  }
}
// 定义表单验证规则
const rules = {
  username: [
    // {required: true, min: 6, max: 12, message:"账号长度至少六位", trigger: 'change'},
    { trigger: 'change', validator: validateUsername }
  ],
  password: [
    // {required: true, min: 6, max: 12, message:"密码长度至少六位", trigger: 'change'},
    { trigger: 'change', validator: validatePassword }
  ]
}


</script>

<style scoped>
.login_container {
  width: 100%;
  height: 100vh;
  background: url(../../assets/images/background2.jpg) no-repeat center center;
  background-size: cover;
}

.login_form {
  position: relative;
  width: 60%;
  top: 30vh;
  padding: 20px;
  background-image: url('../../assets/images/login_form.png');
  background-size: cover;
  margin-left: 120px;

}

.login_button {
  width: 100%;
  ;
}

.login_form h1 {
  font-size: 30px;
  color: white;
}

.login_form h2 {
  font-size: 18px;
  margin: 20px 0;
  color: white;
}
</style>