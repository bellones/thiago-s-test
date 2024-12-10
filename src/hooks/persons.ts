import { useInfiniteQuery } from '@tanstack/react-query';
import axiosInstance from '../utils/axios';

interface PersonResponse {
  data: any; // Define more specific type if needed
}

export const useListPersons = (amountToFetch: number = 50) => {
  const queryKey = ['getPersonsList'];

  const fetchPersons = async () => {
    const response = await axiosInstance.get<PersonResponse>('persons', {
      params: {
        _quantity: amountToFetch,
      },
    });
    return response.data;
  };

  const getNextPageParam = (lastPage: any, allPages: any[]) => {
    return allPages.length ? allPages.length + 1 : 0;
  };

  const { data, error, isLoading, refetch, fetchNextPage, isFetchingNextPage } =
    useInfiniteQuery({
      queryKey,
      queryFn: fetchPersons,
      getNextPageParam,
    });

  return { data, error, isLoading, refetch, fetchNextPage, isFetchingNextPage };
};
