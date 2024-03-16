import { createFileRoute } from '@tanstack/react-router'
import MobileNavbar from "../../../components/MobileNavbar/MobileNavbar.tsx";
import ArticleContent from "../../../components/ArticleContent/ArticleContent.tsx";
import MaterialPost from '../../../content/switches/material.md'

const SwitchMaterial = () => {
    const briefText = [
        "Первый заголовок",
        "Второй заголовок",
        "Третий заголовок"
    ]

    const pages = {
        "nextPage": "Звук",
        "previousPage": "Графики силы нажатия",
        "linkToNextPage": "/articles/switches/sound",
        "linkToPreviousPage": "/articles/switches/forceCurves"
    }

    return (
        <MobileNavbar>
            <ArticleContent
                title="Материалы"
                briefImage="https://images.squarespace-cdn.com/content/v1/5e5af256556661723b861bd1/815364e9-0f1c-4c7c-99ff-4ef4e1253c10/topext.JPG"
                briefText={briefText}
                pages={pages}
            >
                <MaterialPost />
        </ArticleContent>
</MobileNavbar>
)
}

export const Route = createFileRoute('/articles/switches/material')({
    component: SwitchMaterial
})