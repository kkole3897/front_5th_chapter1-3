import { ComponentType, createElement } from "react";

import { shallowEquals } from "../equalities";

export function memo<P extends object>(
  Component: ComponentType<P>,
  _equals = shallowEquals
) {
  const memoized: Array<{ props: P; component: React.ReactElement }> = [];

  return (props: P) => {
    const found = memoized.find((item) => _equals(item.props, props));
    if (found) {
      return found.component;
    }

    const component = createElement(Component, props);

    memoized.push({ props, component });

    return component;
  };
}
