import { ComponentType, createElement } from "react";

import { shallowEquals } from "../equalities";

export function memo<P extends object>(
  Component: ComponentType<P>,
  _equals = shallowEquals,
) {
  let memoized: { props: P; element: React.ReactElement } | null = null;

  return (props: P) => {
    if (memoized && _equals(memoized.props, props)) {
      return memoized.element;
    }

    const element = createElement(Component, props);

    memoized = { props, element };

    return element;
  };
}
