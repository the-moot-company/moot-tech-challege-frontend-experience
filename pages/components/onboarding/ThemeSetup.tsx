import ButtonLarge from "../common/ButtonLarge";
import React, {useContext} from "react";
import {LightThemeExampleIcon} from "../../../public/svgs/LightThemeExampleIcon";
import {DarkThemeExampleIcon} from "../../../public/svgs/DarkThemeExampleIcon";
import {ColorThemeOptions, ThemeContext} from "../../contexts/ThemeContext";

type ThemeSetupProps = {
  nextStep: () => void;
}

export default function ThemeSetup({nextStep}: ThemeSetupProps) {
  const {setColorTheme} = useContext(ThemeContext)
  return (
    <>
      <h1 className="text-4xl font-extrabold text-gray-700 tracking-tight sm:text-5xl">
        Choose your style
      </h1>
      <p className="mt-4 text-xl text-gray-500 ">
        You can change the theme at any time through the dashboard.
      </p>
      <div className="flex flex-col justify-center items-center">
        <LightThemeExampleIcon/>
        <button onClick={() => setColorTheme(ColorThemeOptions.Light)}>Light</button>
      </div>
      <div className="flex flex-col justify-center items-center">
        <DarkThemeExampleIcon/>
        <button onClick={() => setColorTheme(ColorThemeOptions.Dark)}>Dark</button>
      </div>
      <ButtonLarge onClick={nextStep} text="Continue"/>
    </>
  )
}