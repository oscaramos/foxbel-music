import useSWR from "swr";

import { ISong } from "./search";

import { requestSearch, transformSearch } from "./search.service";

type Props = {
  keyword: string;
};

type Return = {
  songs?: ISong[];
  error: any;
};

export function useSearch({ keyword }: Props): Return {
  const { data, error } = useSWR<ISong[]>(`/api/${keyword}`, async () =>
    transformSearch(await requestSearch(keyword))
  );

  return {
    songs: data,
    error: error,
  };
}
