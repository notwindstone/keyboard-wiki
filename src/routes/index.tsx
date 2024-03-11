import { createFileRoute } from '@tanstack/react-router'
import {MobileNavbar} from "../components/MobileNavbar/MobileNavbar.tsx";
import {HeroBullets} from "../components/HeroBullets/HeroBullets.tsx";

const Index = () => {
    return (
        <MobileNavbar>
            <HeroBullets />
        </MobileNavbar>
    )
}

export const Route = createFileRoute('/')({
    component: Index,
})