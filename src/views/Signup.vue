<template>
  <div class="flex justify-center">
    <div class="l-form">
      <strong>Cadastro</strong>

      <div style="margin-top: 20px">nome</div>
      <input
        ref="nameEl"
        v-model="name"
        :class="{ 'l-input-error': errorField === 'name' }"
        type="text"
        autofocus
        @keyup="nameKeyupHandler"
      />

      <div>Usuário</div>
      <input
        ref="userEl"
        v-model="user"
        :class="{ 'l-input-error': errorField === 'User' }"
        type="text"
        @keyup="userKeyupHandler"
      />
      <div v-if="errorField === 'User'" class="l-error">{{ errorMsg }}</div>

      <div>Senha</div>
      <input
        ref="pwd1El"
        v-model="pwd1"
        type="password"
        @keyup="pwd1KeyupHandler"
      />

      <div>Confirma senha</div>
      <input
        ref="pwd2El"
        v-model="pwd2"
        type="password"
        @keyup="pwd2KeyupHandler"
      />
      <div v-if="errorField === 'Pwd'" class="l-error">{{ errorMsg }}</div>

      <div class="flex flex-column">
        <button style="margin-top: 10px" @click="signupHandler">
          Cadastrar
        </button>
        <router-link style="margin-top: 10px" :to="{ name: 'Login' }">
          Login
        </router-link>
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
      name: "",
      user: "",
      pwd1: "",
      pwd2: "",
      nameEl: null,
      userEl: null,
      pwd1El: null,
      pwd2El: null,
      errorField: null,
      errorMsg: "",
    });

    const validate = () => {
      state.errorField = null;
      state.errorMsg = "";

      console.log("[]...", state.name, state.user, state.pwd1, state.pwd2);

      if (!state.name) {
        state.errorField = "name";
        state.errorMsg = "Nome é obrigatório";
        state.nameEl.focus();
        return false;
      }

      if (!state.user) {
        state.errorField = "User";
        state.errorMsg = "Usuário é obrigatório";
        state.userEl.focus();
        return false;
      }

      if (!state.pwd1) {
        state.errorField = "Pwd";
        state.errorMsg = "A Senha é obrigatória";
        state.pwd1El.focus();
        return false;
      }

      if (state.pwd1 !== state.pwd2) {
        state.errorField = "Pwd";
        state.errorMsg = "As senhas não conferem";
        state.pwd1El.focus();
        return false;
      }

      return true;
    };

    const signupHandler = () => {
      if (!validate()) return;

      console.log("Login");
    };

    const nameKeyupHandler = (e) => {
      if (e.key === "Enter" && state.name) {
        state.errorField = null;
        state.errorMsg = "";
        state.userEl.focus();
      }
    };

    const userKeyupHandler = (e) => {
      if (e.key === "Enter" && state.user) {
        state.errorField = null;
        state.errorMsg = "";

        if (state.pwd) {
          signupHandler();
        } else {
          state.pwdEl.focus();
        }
      }
    };

    const pwd1KeyupHandler = (e) => {
      if (e.key === "Enter" && state.pwd1) {
        state.pwd2El.focus();
      }
    };
    const pwd2KeyupHandler = (e) => {
      if (e.key === "Enter" && state.pwd2 && state.pwd1 === state.pwd2) {
        signupHandler();
      }
    };

    if (auth.state.token) {
      router.push({ name: "Home" });
    }

    return {
      ...toRefs(state),
      signupHandler,
      nameKeyupHandler,
      userKeyupHandler,
      pwd1KeyupHandler,
      pwd2KeyupHandler,
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
