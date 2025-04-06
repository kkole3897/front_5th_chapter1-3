import { DependencyList } from "react";

import { shallowEquals } from "../equalities";
import { useRef } from "./useRef";

export function useMemo<T>(
  factory: () => T,
  _deps: DependencyList,
  _equals = shallowEquals
): T {
  const memoized = useRef<{ deps: DependencyList; result: T }[]>([]);

  const found = memoized.current.find((item) => _equals(item.deps, _deps));

  if (found) {
    return found.result;
  }

  const result = factory();

  memoized.current.push({ deps: _deps, result });

  return result;
}
