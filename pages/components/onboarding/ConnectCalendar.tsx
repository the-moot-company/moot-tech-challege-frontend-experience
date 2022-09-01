import ButtonLarge from "../common/ButtonLarge";

interface ConnectCalendarProps {
  nextStep: () => void;
}

export default function ConnectCalendar({nextStep}: ConnectCalendarProps) {
  return <ButtonLarge onClick={nextStep} text="Continue"/>
}
