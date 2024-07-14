import axios from "axios";
import { ReadingProgress } from "./types";
import { getToken } from "./auth";

export const putCurrentPage = async (
  userId: number,
  comicId: number,
  currentPage: number
): Promise<void> => {
  try {
    await axios.put(
      `/log_progress`,
      { user_id: userId, book_id: comicId, page_num: currentPage },
      {
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      }
    );
  } catch (error) {
    console.error("Error updating current page:", error);
  }
};

export const getCurrentPage = async (
  user_id: number,
  comic_id: number
): Promise<number> => {
  let currentPage = 0;

  try {
    const response = await axios.get(`/log_progress/user/${user_id}`, {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    });
    response.data.readingprogress.map((progress: any) => {
      if (progress.bookrepo_id === comic_id && progress.user_id === user_id) {
        currentPage = progress.page_num;
      }
    });
  } catch (error) {
    console.error("Error fetching current page:", error);
  }

  return currentPage;
};

export const getReadingProgress = async (
  userId: number
): Promise<ReadingProgress[]> => {
  let progress: ReadingProgress[] = [];

  try {
    const response = await axios.get(`/log_progress/user/${userId}`, {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    });
    progress = response.data.readingprogress;
  } catch (error) {
    console.error("Error fetching reading progress:", error);
  }

  return progress;
};
