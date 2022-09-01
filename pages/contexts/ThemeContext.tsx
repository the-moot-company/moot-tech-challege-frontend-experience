import React, {createContext, useState, FunctionComponent} from "react";

enum ColorThemeOptions {
  Light,
  Dark
}

interface ThemeContextProps {
  colorTheme: ColorThemeOptions;
  setColorTheme: (theme: ColorThemeOptions) => void;
}

export const ThemeContext = createContext<ThemeContextProps>(
  {
    colorTheme: ColorThemeOptions.Light,
    setColorTheme: () => null
  }
);

export const ThemeContextProvider: FunctionComponent = ({children}: {
  children: React.ReactNode;
}) => {
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
