import { createFileRoute } from '@tanstack/react-router'
import MobileNavbar from "../../../components/MobileNavbar/MobileNavbar.tsx";
import ArticleContent from "../../../components/ArticleContent/ArticleContent.tsx";
import content from '../../../configs/intro/layouts.json'

const IntroLayouts = () => {
    return (
        <MobileNavbar>
            <ArticleContent content={content} />
        </MobileNavbar>
    )
}

export const Route = createFileRoute('/articles/intro/layouts')({
    component: IntroLayouts
})