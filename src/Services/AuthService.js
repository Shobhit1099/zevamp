export default {
  login: (auth) => {
    return fetch("/app/login", {
      method: "post",
      body: JSON.stringify(auth),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json)
      .then((data) => data);
  },
  logout: () => {
    return fetch("/app/logout")
      .then((res) => res.json())
      .then((data) => data);
  },
  isAuthenticated: () => {
    return fetch("/app/authenticated").then((res) => {
      if (res.status !== 401) return res.json().then((data) => data);
      else return { isAuthenticated: false, auth: { Email: "" } };
    });
  },
};
