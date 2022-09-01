import ButtonLarge from "../common/ButtonLarge";

interface OutroProps {
  nextStep: () => void;
}

export default function Outro({nextStep}: OutroProps) {
  return <ButtonLarge onClick={nextStep} text="Continue"/>
}
