import { createFileRoute } from '@tanstack/react-router'
import MobileNavbar from "../../../components/MobileNavbar/MobileNavbar.tsx";
import ArticleContent from "../../../components/ArticleContent/ArticleContent.tsx";
import AnatomyPost from "../../../content/switches/anatomy.md";

const SwitchAnatomy = () => {
    const briefText = [
        "Первый заголовок",
        "Второй заголовок",
        "Третий заголовок"
    ]

    const pages = {
        "nextPage": "Графики силы нажатия",
        "previousPage": "Виды",
        "linkToNextPage": "/articles/switches/forceCurves",
        "linkToPreviousPage": "/articles/switches/types"
    }

    return (
        <MobileNavbar>
            <ArticleContent
                title="Анатомия"
                briefImage="https://lh3.googleusercontent.com/proxy/8vEvI48uuDJ_6PY1_tbv0U-Tw9E83refPljBK0kzFvJ9TTCMlVDrYd7-5UnRlronWrl2gVOGso-9iITLpK5Kj2_L0f8F-KY7MP0dcuZkO7qwUbd56a2Clfcd7aoSB_C2mSWLOgDbvb2S529NoII1coMUlLg"
                briefText={briefText}
                pages={pages}
            >
                <AnatomyPost />
            </ArticleContent>
        </MobileNavbar>
    )
}

export const Route = createFileRoute('/articles/switches/anatomy')({
    component: SwitchAnatomy
})