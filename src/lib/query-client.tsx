import { QueryClient, DefaultOptions } from "@tanstack/react-query";

const queryConfig: DefaultOptions = {
  queries: {
    refetchOnWindowFocus: false,
    retry: false,
    throwOnError: false, // Suspenseでエラーを拾う
  },
};

export const queryClient = new QueryClient({ defaultOptions: queryConfig });