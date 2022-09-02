import ButtonLarge from "../common/ButtonLarge";

type WorkspaceSetupProps = {
 nextStep: () => void;
}

export default function WorkspaceSetup({nextStep}: WorkspaceSetupProps) {
 return <ButtonLarge onClick={nextStep} text="Continue"/>
}