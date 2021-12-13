<template>
  <div class="flex justify-center">
    <div class="l-form">
      <div>Usuário</div>
      <input
        ref="userEl"
        v-model="user"
        :class="{ 'l-input-error': errorField === 'User' }"
        type="text"
        autofocus
        @keyup="userKeyupHandler"
      />
      <div v-if="errorField === 'User'" class="l-error">{{ errorMsg }}</div>

      <div>Senha</div>
      <input
        ref="pwdEl"
        v-model="pwd"
        type="password"
        @keyup="pwdKeyupHandler"
      />
      <div v-if="errorField === 'Pwd'" class="l-error">{{ errorMsg }}</div>

      <div class="flex flex-column">
        <button style="margin-top: 10px" @click="loginHandler">Entrar</button>
        <router-link style="margin-top: 10px" :to="{name: 'Signup'}">Cadastro</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";

export default {
  components: {},

  setup() {
    const state = reactive({
      user: "",
      pwd: "",
      userEl: null,
      pwdEl: null,
      errorField: null,
      errorMsg: "",
    });

    const validate = () => {
      state.errorField = null;
      state.errorMsg = "";

      if (!state.user) {
        state.errorField = "User";
        state.errorMsg = "Usuário é obrigatório";
        state.userEl.focus();
        return false;
      }

      if (!state.pwd) {
        state.errorField = "Pwd";
        state.errorMsg = "A Senha é obrigatória";
        state.pwdEl.focus();
        return false;
      }

      return true;
    };

    const loginHandler = () => {
      if (!validate()) return;

      console.log("Login");
    };

    const userKeyupHandler = (e) => {
      if (e.key === "Enter" && state.user) {
        state.errorField = null;
        state.errorMsg = "";

        if (state.pwd) {
          loginHandler();
        } else {
          state.pwdEl.focus();
        }
      }
    };

    const pwdKeyupHandler = (e) => {
      if (e.key === "Enter" && state.pwd) {
        loginHandler();
      }
    };

    return {
      ...toRefs(state),
      loginHandler,
      userKeyupHandler,
      pwdKeyupHandler,
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

.l-error {
  color: red;
}

.l-input-error {
  border: 1px solid red;
}
</style>
