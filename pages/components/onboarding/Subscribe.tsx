import ButtonLarge from "../common/ButtonLarge";

interface SubscribeProps {
  nextStep: () => void;
}

export default function Subscribe({nextStep}: SubscribeProps) {
  return <ButtonLarge onClick={nextStep} text="Continue"/>
}
