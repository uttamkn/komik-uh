import axios from "axios";

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

export const getThumbnailUrl = async (comicId: number): Promise<string> => {
  let url: string = "";

  try {
    const response = await axios.get(`/comics/thumbnails/${comicId}`, {
      headers: {
        Authorization: `Bearer ${getToken()}`,
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
