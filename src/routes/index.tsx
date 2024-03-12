import { createFileRoute } from '@tanstack/react-router'
import {MobileNavbar} from "../components/MobileNavbar/MobileNavbar.tsx";
import {HeroBullets} from "../components/HeroBullets/HeroBullets.tsx";
import {SegmentedControl} from "@mantine/core";

const Index = () => {
    return (
        <MobileNavbar>
            <HeroBullets />
            <SegmentedControl withItemsBorders={false} data={['React', 'Angular', 'Vue']} />
        </MobileNavbar>
    )
}

export const Route = createFileRoute('/')({
    component: Index,
})