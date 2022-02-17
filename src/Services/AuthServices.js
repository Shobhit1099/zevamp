export default {
  login: (auth) => {
    return fetch("https://zevamp.herokuapp.com/app/login", {
      method: "post",
      body: JSON.stringify(auth),
      credentials: "include", // Don't forget to specify this if you need cookies
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      if (res.status === 400) console.log(res);
      if (res.status !== 401) return res.json().then((data) => data);
      else return { isAuthenticated: false, user: { username: "" } };
    });
  },
  logout: () => {
    return fetch("https://zevamp.herokuapp.com/app/logout")
      .then((res) => res.json())
      .then((data) => data);
  },
  isAuthenticated: () => {
    return fetch("https://zevamp.herokuapp.com/app/authenticated").then((res) => {
      if (res.status !== 401) return res.json().then((data) => data);
      else return { isAuthenticated: false, auth: { username: "" } };
    });
  },
};
