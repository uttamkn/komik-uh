import { Token } from "../types.ts";

export const parseToken = (tokenString: string): Token | null => {
  let token: Token | null = null;
  if (tokenString) {
    try {
      token = JSON.parse(tokenString) as Token;
      // Validate the structure of the token
      if (!token["access_token"] || !token.token_type) {
        throw new Error("Invalid token structure");
      }
    } catch (error) {
      console.error("Failed to parse token:", error);
      token = null;
    }
  }

  return token;
};
