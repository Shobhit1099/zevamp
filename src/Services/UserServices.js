export default {
  getUser: () => {
    return fetch("https://zevamp.herokuapp.com/app", {
      headers: { "Access-Control-Allow-Origin": "*" },
      credentials: "include", // Don't forget to specify this if you need cookies
    }).then((response) => {
      if (response.status !== 401) {
        return response.json().then((data) => data);
      } else return { message: { msgBody: "UnAuthorized", msgError: true } };
    });
  },
  getDetails: () => {
    return fetch("https://zevamp.herokuapp.com", {
      headers: { "Access-Control-Allow-Origin": "*" },
    })
      .then((response) => response.json())
      .then((data) => data)
      .catch((err) => console.log("ERROR IS", err));
  },
};
