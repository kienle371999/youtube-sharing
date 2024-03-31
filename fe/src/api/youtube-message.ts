import { useMemo } from 'react';
import useSWR from 'swr';
import { YoutubeMessage } from 'types/youtube-message';
import { fetcherCopy } from 'utils/axios';

export const endpoints = {
  key: 'api/videos'
};

export function useGetYoutubeMessage() {
  const { data, isLoading, error, isValidating } = useSWR(endpoints.key, fetcherCopy, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false
  });

  console.log('Data', data);

  const memoizedValue = useMemo(
    () => ({
      messages: data as YoutubeMessage[],
      messagesLoading: isLoading,
      messagesError: error,
      messagesValidating: isValidating,
      messagesEmpty: !isLoading && !data?.length
    }),
    [data, error, isLoading, isValidating]
  );

  return memoizedValue;
}
