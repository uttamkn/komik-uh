import { getToken } from "./auth";
import axios from "axios";

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

export const fetchComics = async () => {
  try {
    const response = await axios.get("/comics", {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching comics:", error);
    throw error;
  }
};
