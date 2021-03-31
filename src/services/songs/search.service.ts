import axios from "axios";

import songs from "./mock/search.mock.json";

import { ISearchResponse, ISong } from "./search";

const usingMocks = true;

export const requestSearch = async (
  keyword: string
): Promise<ISearchResponse> => {
  if (usingMocks) {
    return songs;
  }
  return await axios.get(
    `https://cors-anywhere.herokuapp.com/https://api.deezer.com/search?q=${keyword}`
  );
};

export const transformSearch = (response: ISearchResponse): ISong[] => {
  return response.data;
};
