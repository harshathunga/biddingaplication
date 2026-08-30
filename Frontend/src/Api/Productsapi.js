const baseUrl = "http://localhost:3002/api";


export const Productfetchapi = async () => {
  try {
    const res = await fetch(`${baseUrl}/fetchproduct`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    //   body: JSON.stringify(data),
      credentials: "include",
    });
    const results = await res.json();

    // console.log("this is prodyctapi results",results, )

    if (!res.ok) {
      // throw new Error(results.message || "Login failed");
      return { message: results.message || "Product fetch Failed", success: false };
    }

    // console.log("this is the user name and", results.user.username);
    return { message: results.message || "Product fetch successful", success: true, res:results };
  } catch (error) {
    console.log(error);

    // throw new Error(results.message || "Login failed");

    return { message: results.message };
  }
};
