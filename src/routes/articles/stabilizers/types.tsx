import { createFileRoute } from '@tanstack/react-router'
import MobileNavbar from "../../../components/MobileNavbar/MobileNavbar.tsx";

const StabilizerTypes = () => {
    return (
        <MobileNavbar>
            <></>
        </MobileNavbar>
    )
}

export const Route = createFileRoute('/articles/stabilizers/types')({
    component: StabilizerTypes
})