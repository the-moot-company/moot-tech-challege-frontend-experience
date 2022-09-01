import ButtonLarge from "../common/ButtonLarge";

interface WorkspaceSetupProps {
 nextStep: () => void;
}

export default function WorkspaceSetup({nextStep}: WorkspaceSetupProps) {
 return <ButtonLarge onClick={nextStep} text="Continue"/>
}