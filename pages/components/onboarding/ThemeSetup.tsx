import ButtonPrimary from "../common/ButtonPrimary";
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
      <h1 className="text-4xl font-bold leading-relaxed">
        Choose your style
      </h1>
      <p className="text-xl opacity-40 mt-2">
        You can change the theme at any time through the dashboard.
      </p>
      <div className="card card-side border border-base-300 bg-base-100 w-full my-10">
        <button
          className="flex flex-col justify-center items-center card-body bg-base-200"
          onClick={() => setColorTheme(ColorThemeOptions.Light)}>
          <LightThemeExampleIcon/>
          <p className="mt-3">Light</p>
        </button>
        <button
          className="flex flex-col justify-center items-center card-body"
          onClick={() => setColorTheme(ColorThemeOptions.Dark)}>
          <DarkThemeExampleIcon/>
          <p className="mt-3">Dark</p>
        </button>
      </div>
      <ButtonPrimary onClick={nextStep} text="Continue"/>
    </>
  )
}