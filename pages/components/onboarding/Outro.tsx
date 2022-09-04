import ButtonPrimary from "../common/ButtonPrimary";

type OutroProps = {
  nextStep: () => void;
}

export default function Outro({nextStep}: OutroProps) {
  return <ButtonPrimary onClick={nextStep} text="Continue"/>
}
