<template>
  <v-container>
    <v-parallax
      dark
      height="200"
      src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
    >
      <v-row align="center" justify="center">
        <v-col class="text-center" cols="12">
          <h1 class="display-1 font-weight-thin mb-4">ShareTeslaKey</h1>
          <h4 class="subheading">安全分享我的 Tesla 钥匙!</h4>
        </v-col>
      </v-row>
    </v-parallax>

    <v-form ref="form" v-model="valid" lazy-validation>
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
      <v-btn :disabled="!valid" color="success" class="mr-4" @click="login">
        创建临时钥匙
      </v-btn>
    </v-form>
  </v-container>
</template>

<script>
import request from '@/utils/request'

export default {
  name: "LoginForm",
  data: () => ({
    valid: true,
    email: '',
    emailRules: [
      v => !!v || '邮箱不可以为空',
      v => /.+@.+\..+/.test(v) || '邮箱格式错误',
    ],
    password: '',
    passwordRules: [
      v => !!v || '密码必须填写'
    ],
  }),

  methods: {
    login() {
      const query = {
        client_id: 'ownerapi',
        code_challenge: '122333333ddsdsdds',
        code_challenge_method: 'S256',
        redirect_uri: 'https://auth.tesla.com/void/callback',
        response_type: 'code',
        scope: 'openid email offline_access',
        state: '1111332323',
        login_hint: this.email
      }
      request({
        url: '/oauth2/v3/authorize',
        method: 'get',
        params: query
      }).then(res => {
        console.log(res)
      }).catch(err => {
        console.error(err)
      })
    }
  }
};
</script>
