import React, { PropsWithChildren } from "react";

import { ThemeContext, ThemeContextValue } from "./ThemeContext";

export const ThemeProvider: React.FC<
  PropsWithChildren<{ value: ThemeContextValue }>
> = ({ children, value }) => {
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
