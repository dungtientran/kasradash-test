"use client";

import {
  ThemeProvider as NextThemesProvider,
  ThemeProviderProps,
} from "next-themes";

import React, { FC } from "react";

const ThemeProvider: FC<Readonly<ThemeProviderProps>> = ({
  children,
  ...props
}) => {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
};

export default ThemeProvider;
