import {
  QueryClient,
  DefaultOptions,
  UseQueryOptions,
  UseMutationOptions,
} from '@tanstack/react-query';

const queryConfig: DefaultOptions = {
  queries: {
    refetchOnWindowFocus: false,
    retry: false,
    throwOnError: false, // Suspenseでエラーを拾う
  },
};

export const queryClient = new QueryClient({ defaultOptions: queryConfig });

export type ExtractFnReturnType<FnType extends (...args: any) => any> = Awaited<
  ReturnType<FnType>
>;

// UseQueryの設定オプションの型 <>にPromiseを返すオブジェクトを入れる必要がある
export type QueryConfig<QueryFnType extends (...args: any) => any> = Omit<
  UseQueryOptions<ExtractFnReturnType<QueryFnType>>,
  'queryKey' | 'queryFn'
>;

// Mutationの設定値の型
export type MutationConfig<
  MutationFnType extends (...args: any) => any,
  ExtractErrType extends Error,
> = UseMutationOptions<
  ExtractFnReturnType<MutationFnType>,
  ExtractErrType,
  Parameters<MutationFnType>[0]
>;
