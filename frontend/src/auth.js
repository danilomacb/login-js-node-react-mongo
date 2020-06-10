async function isAuthenticated() {
  const token = localStorage.getItem("token");

  if (token) {
    const url = "http://localhost:3001/";

    const response = await fetch(url + "protected", {
      headers: {
        Authorization: "Bearer " + token,
      },
    });

    return response.ok;
  } else {
    return false;
  }
}

export default isAuthenticated;
