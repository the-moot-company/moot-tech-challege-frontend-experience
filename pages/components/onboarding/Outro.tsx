import ButtonLarge from "../common/ButtonLarge";

type OutroProps = {
  nextStep: () => void;
}

export default function Outro({nextStep}: OutroProps) {
  return <ButtonLarge onClick={nextStep} text="Continue"/>
}
