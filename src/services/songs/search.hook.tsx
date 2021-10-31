import { useCallback } from "react";
import { flatMap, uniqBy } from "lodash";
import useSWRInfinite from "swr/infinite";

import { requestSearch } from "./search.service";
import { ISearchResponse, ISong } from "./search";

type Props = {
  keyword: string;
};

type Return = {
  songs?: ISong[];
  error: any;
  loadMore: () => void;
};

export function useSearch({ keyword }: Props): Return {
  const { data, size, setSize, error } = useSWRInfinite<ISearchResponse>(
    (pageIndex, prevData) => {
      if (pageIndex === 0) {
        return `https://api.deezer.com/search?q=track:"${keyword}"`;
      }
      return prevData.next;
    },
    async (url: string) => await requestSearch(url),
    {
      revalidateFirstPage: false,
    }
  );

  const loadMore = useCallback(() => {
    setSize(size + 1).then();
  }, [setSize, size]);

  return {
    songs:
      (data &&
        uniqBy(
          flatMap(data, (item) => item.data),
          "id"
        )) ??
      [],
    error: error,
    loadMore,
  };
}
