export default {
  getUser: () => {
    return fetch("http://localhost:4000/app", {
      credentials: "include", // Don't forget to specify this if you need cookies
    }).then((response) => {
      if (response.status !== 401) {
        return response.json().then((data) => data);
      } else return { message: { msgBody: "UnAuthorized", msgError: true } };
    });
  },
  getDetails: () => {
    return fetch("http://localhost:4000")
      .then((response) => response.json())
      .then((data) => data)
      .catch((err) => console.log("ERROR IS", err));
  },
};
