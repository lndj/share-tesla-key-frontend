<template>
  <v-container>
    <v-parallax
      dark
      height="150"
      src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
    >
      <v-row align="center" justify="center">
        <v-col class="text-center" cols="12">
          <h1 class="display-1 font-weight-thin mb-4">Share Tesla Key</h1>
          <h4 class="subheading">安全分享我的 Tesla 钥匙!</h4>
        </v-col>
      </v-row>
    </v-parallax>

    <v-form ref="form" v-model="valid">
      <v-text-field
        v-model="email"
        :rules="emailRules"
        label="邮箱"
        required
      ></v-text-field>

      <v-text-field
        v-model="password"
        :rules="passwordRules"
        type="password"
        label="密码"
        required
      ></v-text-field>

      <v-select
        v-model="validSeconds"
        :items="states"
        menu-props="auto"
        hide-details
        label="有效时间"
        single-line
      ></v-select>

      <v-checkbox v-model="agreement" :rules="agreementRules">
        <template v-slot:label>
          <div>
            同意
            <a @click.stop.prevent="openDialog"> 用户使用协议 </a>
          </div>
        </template>
      </v-checkbox>

      <v-btn :disabled="!valid" color="success" class="mr-4" @click="login">
        创建临时钥匙
      </v-btn>
    </v-form>
    <UserAgreement
      v-bind:showDialog="openAgreementDialog"
      @closeDialog="closeDialog"
    ></UserAgreement>

    <v-snackbar v-model="errorTips" :timeout="3000" color="red" :top="true">
      {{ errorTipsText }}
      <template v-slot:action="{ attrs }">
        <v-btn color="blue" text v-bind="attrs" @click="errorTips = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </v-container>
</template>

<script>
import request from "@/utils/request";
import UserAgreement from "./UserAgreement";

export default {
  name: "LoginForm",
  components: {
    UserAgreement,
  },
  data: () => ({
    openAgreementDialog: false,
    valid: false,
    agreement: false,
    agreementRules: [(v) => !!v || "必须同意用户协议"],
    email: "",
    emailRules: [
      (v) => !!v || "邮箱不可以为空",
      (v) => /.+@.+\..+/.test(v) || "邮箱格式错误",
    ],
    password: "",
    passwordRules: [(v) => !!v || "密码必须填写"],

    validSeconds: null,
    states: [
      { text: "10 min", value: 600 },
      { text: "30 min", value: 1800 },
      { text: "1 hour", value: 3600 },
      { text: "2 hour", value: 7200 },
      { text: "6 hour", value: 21600 },
    ],

    errorTips: false,
    errorTipsText: null
  }),

  methods: {
    login() {
      const that = this;
      const data = {
        email: this.email,
        password: this.password,
        valid_seconds: this.validSeconds,
      };
      request({
        url: "/api/auth/login",
        method: "post",
        data: data,
      })
        .then((res) => {
          console.log(res);
          if(res.code != 0){
            that.errorTips = true;
            that.errorTipsText = res.msg;
            return;
          }
          // 登陆成功
          // todo
        })
        .catch((err) => {
          console.error(err);
          that.errorTips = true;
          that.errorTipsText = '请求出错了:' + err;
        });
    },
    openDialog() {
      this.openAgreementDialog = true;
    },
    closeDialog(data) {
      //子组件触发父组件事件，进行数据变更
      this.openAgreementDialog = data;
    },
  },
};
</script>
