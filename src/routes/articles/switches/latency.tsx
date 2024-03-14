import { createFileRoute } from '@tanstack/react-router'
import MobileNavbar from "../../../components/MobileNavbar/MobileNavbar.tsx";

const SwitchLatency = () => {
    return (
        <MobileNavbar>
            <></>
        </MobileNavbar>
    )
}

export const Route = createFileRoute('/articles/switches/latency')({
    component: SwitchLatency
})