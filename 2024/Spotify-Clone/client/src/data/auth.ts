// Login a user: Save their data in local storage
export const loginUser = (user: { id: number; name: string; email: string }) => {
    localStorage.setItem("loggedInUser", JSON.stringify(user));
  };
  
  // Logout a user: Remove their data from local storage
  export const logoutUser = () => {
    localStorage.removeItem("loggedInUser");
  };
  
  // Retrieve the currently logged-in user from local storage
  export const getLoggedInUser = () => {
    const user = localStorage.getItem("loggedInUser");
    return user ? JSON.parse(user) : null;
  };
  