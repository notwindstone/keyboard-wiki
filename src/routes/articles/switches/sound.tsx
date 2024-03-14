import { createFileRoute } from '@tanstack/react-router'
import MobileNavbar from "../../../components/MobileNavbar/MobileNavbar.tsx";

const SwitchSound = () => {
    return (
        <MobileNavbar>
            <></>
        </MobileNavbar>
    )
}

export const Route = createFileRoute('/articles/switches/sound')({
    component: SwitchSound
})