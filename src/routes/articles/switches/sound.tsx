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
        "nextPage": "",
        "previousPage": "",
        "linkToNextPage": "/",
        "linkToPreviousPage": "/"
    }

    return (
        <MobileNavbar>
            <ArticleContent
                title=""
                briefImage=""
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