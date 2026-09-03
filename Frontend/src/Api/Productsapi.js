const baseUrl = "http://localhost:3002/api";


export const myProductfetchapi = async () => {
  try {
    const res = await fetch(`${baseUrl}/fetchproduct`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    //   body: JSON.stringify(data),
      credentials: "include",
    });

    if (res.status === 401){
        return { success: false, unauthorized: true, message: "Not logged in" };
    }
    const results = await res.json();

    console.log("this is prodyctapi results",res.status )

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

export const ferchproductbyidapi = async (id) => {
  try{
    const res = await fetch(`${baseUrl}/fetchproduct/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });
    const results = await res.json();
    if (res.status === 401){
        return { success: false, unauthorized: true, message: "Not logged in" };
    }
    if (!res.ok) {
      return { message: results.message || "Product fetch Failed", success: false };
    }
    return { message: results.message || "Product fetch successful", success: true, res:results };
  } catch(error){
    console.log(error);
    return { message: "An error occurred while fetching the product" };
  }
}

export const allProductfetchapi = async () => {
  try {
    const res = await fetch(`${baseUrl}/allproduct`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    //   body: JSON.stringify(data),
      credentials: "include",
    });

    // if (res.status === 401){
    //     return { success: false, unauthorized: true, message: "Not logged in" };
    // }
    const results = await res.json();

    console.log("this is allproductapi results",res.status )

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