import { createFileRoute } from '@tanstack/react-router'
import MobileNavbar from "../../../components/MobileNavbar/MobileNavbar.tsx";
import ArticleContent from "../../../components/ArticleContent/ArticleContent.tsx";

const IntroLayouts = () => {
    return (
        <MobileNavbar>
        </MobileNavbar>
    )
}

export const Route = createFileRoute('/articles/intro/layouts')({
    component: IntroLayouts
})