const baseUrl = "http://localhost:3002/api";

export const apilogin = async (data) => {
  try {
    const res = await fetch(`${baseUrl}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
      credentials: "include",
    });
    const results = await res.json();

    if (!res.ok) {
      // throw new Error(results.message || "Login failed");
      return { message: results.message || "Login failed", success: false };
    }

    console.log("this is the user name and", results.user.username);
    return { message: results.message || "Login successful", success: true };
  } catch (error) {
    console.log(error);

    // throw new Error(results.message || "Login failed");

    return { message: results.message };
  }
};

export const regitserapi = async (data) => {
  try {
    const res = await fetch(`${baseUrl}/register`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
      credentials: "include",
    });

    const results = await res.json();

    if (!res.ok) {
      // throw new Error(results.message || "Login failed");
      return { message: results.message || "Registration  failed", success: false };
    }

    return { message: results.message || "Registration successful", success: true };

  } catch (error) {
    return { message: results.message };
  }
};
