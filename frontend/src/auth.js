async function isAuthenticated() {
  const token = localStorage.getItem("token");

  if (!token) return false;

  const url = "http://localhost:3001/";

  const response = await fetch(url + "protected", {
    headers: {
      Authorization: "Bearer " + token,
    },
  });

  return response.ok;
}

export default isAuthenticated;
