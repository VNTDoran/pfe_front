export const getUsers = async () => {
  try {
    const response = await fetch("http://localhost:8089/pfe/api/users", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch users");
    }

    return response;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
};

export const deleteUser = async (userId) => {
  try {
    const response = await fetch(
      `http://localhost:8089/pfe/api/users/${userId}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error("Failed to delete user");
    }

    return response;
  } catch (error) {
    console.error("Error deleting user:", error);
    throw error;
  }
};

export const promoteUser = async (userId) => {
  try {
    const response = await fetch(
      `http://localhost:8089/pfe/api/users/promote/${userId}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error("Failed to promote user");
    }

    return response;
  } catch (error) {
    console.error("Error promoting user:", error);
    throw error;
  }
};

export const downgradeUser = async (userId) => {
  try {
    const response = await fetch(
      `http://localhost:8089/pfe/api/users/downgrade/${userId}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error("Failed to downgrade user");
    }

    return response;
  } catch (error) {
    console.error("Error downgrading user:", error);
    throw error;
  }
};
