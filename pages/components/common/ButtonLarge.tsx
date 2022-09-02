import React from "react";

type ButtonLargeProps = {
  onClick: () => void;
  text: string;
}

export default function ButtonLarge({onClick, text}: ButtonLargeProps) {
  return <button className="w-full btn btn-primary shadow-md btn-md" onClick={onClick}>{text}</button>
}
