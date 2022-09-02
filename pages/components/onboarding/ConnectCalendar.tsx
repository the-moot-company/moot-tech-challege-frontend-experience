import ButtonLarge from "../common/ButtonLarge";

type ConnectCalendarProps = {
  nextStep: () => void;
}

export default function ConnectCalendar({nextStep}: ConnectCalendarProps) {
  return <ButtonLarge onClick={nextStep} text="Continue"/>
}
