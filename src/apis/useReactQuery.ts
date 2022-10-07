import { values } from 'lodash-es';
import { useQuery, UseQueryOptions } from 'react-query';
import { ResponseData } from 'apis';

import request from './request';

interface QueryKey {
  table: string;
  id?: string;
}

export const useReactQuery = (queryKey: QueryKey, url: string, options?: Omit<UseQueryOptions<any>, 'queryKey' | 'queryFn'>) => {
  const keyArray = values(queryKey);

  // const getData = async (): Promise<ResponseData> => request({ url });

  return useQuery(keyArray, (): Promise<ResponseData> => request({ url }), options);
};
