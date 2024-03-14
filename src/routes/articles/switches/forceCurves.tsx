import { createFileRoute } from '@tanstack/react-router'
import MobileNavbar from "../../../components/MobileNavbar/MobileNavbar.tsx";
import ArticleContent from "../../../components/ArticleContent/ArticleContent.tsx";

const SwitchForceCurves = () => {
    return (
        <MobileNavbar>
            <ArticleContent content="1234" />
        </MobileNavbar>
    )
}

export const Route = createFileRoute('/articles/switches/forceCurves')({
    component: SwitchForceCurves
})