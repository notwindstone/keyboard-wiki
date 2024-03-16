import { createFileRoute } from '@tanstack/react-router'
import MobileNavbar from "../../../components/MobileNavbar/MobileNavbar.tsx";
import ArticleContent from "../../../components/ArticleContent/ArticleContent.tsx";
import ForceCurvesPost from '../../../content/switches/forceCurves.md'

const SwitchForceCurves = () => {
    const briefText = [
        "Что такое графики силы нажатия?",
        "В чём смысл?",
        "Как их читать?",
        "Есть ли отличия в графиках у линейных свитчей?",
        "Где их можно найти?",
        "Итоги"
    ]

    const pages = {
        "nextPage": "Материалы",
        "previousPage": "Анатомия",
        "linkToNextPage": "/articles/switches/material",
        "linkToPreviousPage": "/articles/switches/anatomy"
    }

    return (
        <MobileNavbar>
            <ArticleContent
                title="Графики силы нажатия"
                briefImage="https://images.squarespace-cdn.com/content/v1/5e5af256556661723b861bd1/f89e5a07-6216-4cf1-8f33-04014ad4eae5/Slope3ExtremeComp.png"
                briefText={briefText}
                pages={pages}
            >
                <ForceCurvesPost />
            </ArticleContent>
        </MobileNavbar>
    )
}

export const Route = createFileRoute('/articles/switches/forceCurves')({
    component: SwitchForceCurves
})