import axios from "axios";

import songs from "./mock/search.mock.json";

import { ISearchResponse } from "./search";

const usingMocks = false;

const proxy = "https://cors-anywhere-oscar.herokuapp.com/";

export const requestSearch = async (url: string): Promise<ISearchResponse> => {
  if (usingMocks) {
    return songs;
  }

  return (await axios.get<ISearchResponse>(`${proxy}${url}"`)).data;
};
