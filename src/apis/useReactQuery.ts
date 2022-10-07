import { values } from 'lodash-es';
import { useQuery, UseQueryOptions } from 'react-query';
import request from './request';

interface QueryKey {
  table: string;
  id?: string;
}

export const useReactQuery = (queryKey: QueryKey, url: string, options?: Omit<UseQueryOptions<any>, 'queryKey' | 'queryFn'>) => {
  const keyArray = values(queryKey);
  console.log('keyArray', keyArray);
  return useQuery(keyArray, () => request({ url }), options);
};
