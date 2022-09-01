import ButtonLarge from "../common/ButtonLarge";
import React from "react";
import {LightThemeExampleIcon} from "../../../public/svgs/LightThemeExampleIcon";
import {DarkThemeExampleIcon} from "../../../public/svgs/DarkThemeExampleIcon";

interface ThemeSetupProps {
  nextStep: () => void;
}

export default function ThemeSetup({nextStep}: ThemeSetupProps) {
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
        <p>Light</p>
      </div>
      <div className="flex flex-col justify-center items-center">
        <DarkThemeExampleIcon/>
        <p>Dark</p>
      </div>
      <ButtonLarge onClick={nextStep} text="Continue"/>
    </>
  )
}