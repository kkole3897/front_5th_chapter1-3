import { DependencyList } from "react";

import { shallowEquals } from "../equalities";
import { useRef } from "./useRef";

export function useMemo<T>(
  factory: () => T,
  _deps: DependencyList,
  _equals = shallowEquals,
): T {
  const memoized = useRef<{ deps: DependencyList; result: T } | null>(null);

  if (memoized.current && _equals(memoized.current.deps, _deps)) {
    return memoized.current.result;
  }

  const result = factory();

  memoized.current = { deps: _deps, result };

  return result;
}
