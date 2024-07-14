export const getToken = (): string => {
  const tokenString = localStorage.getItem("token");
  let token: string | null = null;
  if (tokenString) {
    try {
      token = JSON.parse(tokenString);
    } catch (error) {
      console.error("Failed to parse token:", error);
      token = null;
    }
  }

  return token || "";
};
