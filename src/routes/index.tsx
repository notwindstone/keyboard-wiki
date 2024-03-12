import { createFileRoute } from '@tanstack/react-router'
import MobileNavbar from "../components/MobileNavbar/MobileNavbar.tsx";
import HeroBullets from "../components/HeroBullets/HeroBullets.tsx";
import ArticleSegment from "../components/ArticleSegment/ArticleSegment.tsx";

const Index = () => {
    return (
        <MobileNavbar>
            <HeroBullets />
            <ArticleSegment />
        </MobileNavbar>
    )
}

export const Route = createFileRoute('/')({
    component: Index,
})