import { createFileRoute } from '@tanstack/react-router'
import MobileNavbar from "../../../components/MobileNavbar/MobileNavbar.tsx";

const SwitchFrankenswitch = () => {
    return (
        <MobileNavbar>
            <></>
        </MobileNavbar>
    )
}

export const Route = createFileRoute('/articles/switches/frankenswitches')({
    component: SwitchFrankenswitch
})