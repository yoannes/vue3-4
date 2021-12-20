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
import { useRouter } from "vue-router";
import useAuth from "@/modules/auth";

export default {
  components: {},

  setup() {
    const router = useRouter();
    const auth = useAuth();
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

    const loginHandler = async () => {
      if (!validate()) return;

      const res = await auth.login(state.user, state.pwd);

      if (res === "WRONG_USER") {
        state.errorField = "User";
        state.errorMsg = "Usuário não encontrado";
        state.userEl.focus();
      } else if (res === "WRONG_PWD") {
        state.errorField = "Pwd";
        state.errorMsg = "Senha incorreta";
        state.pwdEl.focus();
      }

      console.log("Login", res);
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

    if (auth.state.token) {
      router.push({ name: "Home" });
    }

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
