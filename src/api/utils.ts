import axios from "axios";
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

export const getThumbnailUrl = async (comicId: number): Promise<string> => {
  let url: string = "";
  const tokenString = localStorage.getItem("user");
  const token = parseToken(tokenString || "");

  try {
    const response = await axios.get(`/comics/thumbnail/${comicId}`, {
      headers: {
        Authorization: `Bearer ${token?.access_token}`,
      },
      responseType: "blob",
    });

    const blob = new Blob([response.data], { type: "image/jpeg" });
    url = URL.createObjectURL(blob);
  } catch (error) {
    console.error("Error fetching thumbnail:", error);
  }

  return url;
};
