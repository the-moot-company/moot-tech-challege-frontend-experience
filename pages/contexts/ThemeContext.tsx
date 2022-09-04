import React, {createContext, useState, FunctionComponent, PropsWithChildren} from "react";

export enum ColorThemeOptions {
  Light = "light",
  Dark = "dark"
}

type ThemeContextProps = {
  colorTheme: ColorThemeOptions;
  setColorTheme: (theme: ColorThemeOptions) => void;
}

export const ThemeContext = createContext<ThemeContextProps>(
  {
    colorTheme: ColorThemeOptions.Light,
    setColorTheme: () => null
  }
);

export const ThemeContextProvider: FunctionComponent<PropsWithChildren<any>> = ({children}) => {
  const [colorTheme, setColorTheme] = useState<ColorThemeOptions>(ColorThemeOptions.Light)

  return (
    <ThemeContext.Provider
      value={{
        colorTheme, setColorTheme
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
