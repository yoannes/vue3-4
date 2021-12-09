<template>
  <div class="flex justify-center">
    <div class="l-form">
      <div>Usuário</div>
      <input
        ref="userEl"
        v-model="user"
        type="text"
        autofocus
        @keyup="userKeyupHandler"
      />

      <div>Senha</div>
      <input ref="pwdEl" v-model="pwd" type="password" @keyup="pwdKeyupHandler" />

      <div class="flex flex-column">
        <button style="margin-top: 10px" @click="loginHandler">Entrar</button>
        <span style="margin-top: 10px">Cadastrar</span>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  components: {},

  setup() {
    const user = ref("");
    const pwd = ref("");
    const userEl = ref("");
    const pwdEl = ref("");

    const loginHandler = () => {
      console.log("Login");
    };

    const userKeyupHandler = (e) => {
      if (e.key === "Enter" && user.value) {
        if (pwd.value) {
          loginHandler();
        } else {
          pwdEl.value.focus();
        }
      }
    };

    const pwdKeyupHandler = (e) => {
      if (e.key === "Enter" && pwd.value) {
        loginHandler();
      }
    };

    return {
      loginHandler,
      userKeyupHandler,
      pwdKeyupHandler,
      user,
      pwd,
      userEl,
      pwdEl,
    };
  },
};
</script>

<style lang="scss" scoped>
.l-form {
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 300px;
  padding: 1rem;
}
</style>
