import { createFileRoute } from '@tanstack/react-router'
import MobileNavbar from "../../../components/MobileNavbar/MobileNavbar.tsx";
import ArticleContent from "../../../components/ArticleContent/ArticleContent.tsx";
import FrankenswitchesPost from "../../../content/switches/frankenswitches.md";

const SwitchFrankenswitch = () => {
    const briefText = [
        "Первый заголовок",
        "Второй заголовок",
        "Третий заголовок"
    ]

    const pages = {
        "nextPage": "Задержки",
        "previousPage": "Модификация",
        "linkToNextPage": "/articles/switches/latency",
        "linkToPreviousPage": "/articles/switches/modifications"
    }

    return (
        <MobileNavbar>
            <ArticleContent
                title="Франкенсвитчи"
                briefImage="https://www.keebtalk.com/uploads/db8059/original/3X/6/1/61c81c7b4ae2eb95d74fcf81466826711d2165f3.jpeg"
                briefText={briefText}
                pages={pages}
            >
                <FrankenswitchesPost />
            </ArticleContent>
        </MobileNavbar>
    )
}

export const Route = createFileRoute('/articles/switches/frankenswitches')({
    component: SwitchFrankenswitch
})