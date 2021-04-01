import axios from "axios";

import songs from "./mock/search.mock.json";

import { ISearchResponse, ISong } from "./search";

const usingMocks = false;

const emptySearchResponse = {
  data: [],
  next: "",
  total: 0,
};

const proxy = "https://cors-anywhere.herokuapp.com/";

export const requestSearch = async (
  keyword: string
): Promise<ISearchResponse> => {
  if (usingMocks) {
    return songs;
  }

  if (!keyword) {
    return emptySearchResponse;
  }

  const response = await axios.get<ISearchResponse>(
    `${proxy}https://api.deezer.com/search?q=track:"${keyword}"`
  );
  return response.data;
};

export const transformSearch = (response: ISearchResponse): ISong[] => {
  return response.data;
};
