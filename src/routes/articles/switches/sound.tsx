import { createFileRoute } from '@tanstack/react-router'
import MobileNavbar from "../../../components/MobileNavbar/MobileNavbar.tsx";
import SoundPost from '../../../content/switches/sound.md'
import ArticleContent from "../../../components/ArticleContent/ArticleContent.tsx";

const SwitchSound = () => {
    const briefText = [
        "Первый заголовок",
        "Второй заголовок",
        "Третий заголовок"
    ]

    const pages = {
        "nextPage": "Модификация",
        "previousPage": "Материалы",
        "linkToNextPage": "/articles/switches/modifications",
        "linkToPreviousPage": "/articles/switches/material"
    }

    return (
        <MobileNavbar>
            <ArticleContent
                title="Звук"
                briefImage="https://res.cloudinary.com/kineticlabs/image/upload/q_auto/c_fit,w_1000/f_auto/v1/api-images/blog/4-5-23-what-is-thock/hippo-keycaps_zi7cwz"
                briefText={briefText}
                pages={pages}
            >
                <SoundPost />
        </ArticleContent>
</MobileNavbar>
)
}

export const Route = createFileRoute('/articles/switches/sound')({
    component: SwitchSound
})