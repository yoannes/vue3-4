import { reactive, readonly } from "vue";

const state = reactive({
  id: "",
  name: "",
  email: "",
  token: "",
});

const loadData = () => {
  const data = localStorage.getItem("auth");
  if (data) {
    const res = JSON.parse(data);
    state.id = res.id;
    state.name = res.name;
    state.email = res.email;
    state.token = res.token;
  }
};

const dumpData = (obj) => {
  localStorage.setItem("auth", JSON.stringify(obj));
};

const login = async (email, pwd) => {
  console.log("[]...", email, pwd);

  // TODO: REPLACE WITH REAL SERVER
  if (email !== "yo") {
    return "WRONG_USER";
  }
  if (pwd !== "asd") {
    return "WRONG_PWD";
  }
  const res = {
    status: "OK",
    result: {
      id: "1", name: "John Doe", email, token: "superHiperSecureToken",
    },
  };

  if (res.status === "OK") {
    state.id = res.result.id;
    state.name = res.result.name;
    state.email = res.result.email;
    state.token = res.result.token;
    dumpData(res.result);
  }

  return res.status;
};

export default function useAuth() {
  return readonly({
    state,
    loadData,
    login,
  });
}
