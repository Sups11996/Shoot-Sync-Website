"use client";

import {
  useState,
  useEffect,
  useCallback,
  useRef,
  DependencyList,
} from "react";

interface UseApiOptions {
  immediate?: boolean;
  deps?: DependencyList;
}

interface UseApiResult<TData, TParams> {
  data: TData | null;
  loading: boolean;
  error: unknown;
  refetch: (overrideParams?: TParams) => Promise<TData>;
}

export function useApi<TData, TParams = undefined>(
  apiFn: (params: TParams) => Promise<TData>,
  params?: TParams,
  options: UseApiOptions = {},
): UseApiResult<TData, TParams> {
  const { immediate = true, deps = [] } = options;

  const [data, setData] = useState<TData | null>(null);
  const [loading, setLoading] = useState<boolean>(immediate);
  const [error, setError] = useState<unknown>(null);

  const isMounted = useRef(true);
  const apiFnRef = useRef(apiFn);
  const paramsRef = useRef(params);
  const hasFetchedRef = useRef(false);

  useEffect(() => {
    apiFnRef.current = apiFn;
    paramsRef.current = params;
  });

  const execute = useCallback(
    async (overrideParams?: TParams): Promise<TData> => {
      setLoading(true);
      setError(null);
      try {
        const argsToUse =
          overrideParams !== undefined
            ? overrideParams
            : (paramsRef.current as TParams);
        const result = await apiFnRef.current(argsToUse);
        if (isMounted.current) setData(result);
        return result;
      } catch (err) {
        if (isMounted.current) setError(err);
        throw err;
      } finally {
        if (isMounted.current) setLoading(false);
      }
    },
    [],
  );

  const depsKey = JSON.stringify(deps);

  useEffect(() => {
    isMounted.current = true;

    if (immediate && !hasFetchedRef.current) {
      hasFetchedRef.current = true;
      queueMicrotask(() => {
        if (isMounted.current) execute();
      });
    }

    return () => {
      isMounted.current = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [immediate, depsKey]);

  return { data, loading, error, refetch: execute };
}

export default useApi;