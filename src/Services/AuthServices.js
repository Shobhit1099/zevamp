export default {
  login: (auth) => {
    return fetch("http://localhost:4000/app/login", {
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
    return fetch("http://localhost:4000/app/logout")
      .then((res) => res.json())
      .then((data) => data);
  },
  isAuthenticated: () => {
    return fetch("http://localhost:4000/app/authenticated").then((res) => {
      if (res.status !== 401) return res.json().then((data) => data);
      else return { isAuthenticated: false, auth: { username: "" } };
    });
  },
};
