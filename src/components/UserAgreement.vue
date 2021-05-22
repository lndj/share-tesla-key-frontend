<template>
  <v-dialog v-model="openStatus" width="500">
    <v-card>
      <v-card-title class="headline grey lighten-2"> 用户协议 </v-card-title>
      <v-card-text>
        ..... 为方便描述，以下称之为“本工具”。
        <br /><br />
        <b>二、用户 Tesla 账户安全</b><br />
        1.
        由本工具生成的车辆临时钥匙，可控制车辆，请<b>不要</b>分享到网络等公共空间，也不要分享给不信任的人，由此而造成的财产损失，本工具概不负责；<br />
        2. 本工具需要使用用户的 Tesla 账号和密码获取操作车辆需要的 Token
        ，但本工具 <b>不存储</b> 用户的账号密码信息；<br />
        3. 本工具需要临时存储用户的 Token 信息，以对称加密的方式存储，<b
          >不会</b
        >
        使用该信息做其他用途，用户主动失效共享钥匙或到达设置的过期时间后，该数据立刻删除，不做任何备份；<br />
        4. 本工具源码开放，可前往 Github
        查看源码，也可自行部署使用（需要遵循相关协议）；<br />
        5. 使用本工具生成临时钥匙之后，如产生任何安全方面的担忧，可以前往 Tesla
        官方网站修改账户密码；<br />
        6. 如仍有担忧，请勿使用本工具。<br /><br />

        <b>三、数据收集</b><br />
        1. 出于统计需要，本工具会记录服务使用的次数情况。
      </v-card-text>

      <v-divider></v-divider>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="primary" text @click="doClose"> 我已经阅读 </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: 'UserAgreement',
  props: {
    showDialog: Boolean,
  },
  data() {
    return {
      openStatus: this.showDialog
    }
  },
  watch: {
    showDialog (val) {
      console.log(val)
      this.openStatus = val
    }
  },
  methods: {
    doClose: function() {
      this.$emit('closeDialog', false)
    }
  },
};
</script>
