export async function login(loginData) {
  const response = await fetch("http://localhost:8089/pfe/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(loginData),
  });
  if (!response.ok) {
    throw new Error("Failed to login");
  }
  return response.json();
}

export async function signup(SignupData) {
  const response = await fetch("http://localhost:8089/pfe/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(SignupData),
  });
  if (!response.ok) {
    throw new Error("Failed to login");
  }
  return response.json();
}
