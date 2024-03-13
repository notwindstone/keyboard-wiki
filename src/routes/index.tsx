import { createFileRoute } from '@tanstack/react-router'
import MobileNavbar from "../components/MobileNavbar/MobileNavbar.tsx";
import HeroBullets from "../components/HeroBullets/HeroBullets.tsx";
import ArticleSegment from "../components/ArticleSegment/ArticleSegment.tsx";
import articles from '../configs/articles.json'

const Index = () => {
    return (
        <MobileNavbar>
            <HeroBullets />
            <ArticleSegment articles={articles} />
        </MobileNavbar>
    )
}

export const Route = createFileRoute('/')({
    component: Index,
})