export function setSession(username) {
  if (typeof window !== "undefined") {
    localStorage.setItem("loggedin", true);
    localStorage.setItem("username", username);
  }
}

export function getSession() {
  if (typeof window !== "undefined") {
    return localStorage.getItem("loggedin") === "true";
  }
  return false;
}

export function logout() {
  if (typeof window !== "undefined") {
    localStorage.setItem("loggedin", false);
    localStorage.setItem("username", null);
  }
}
