import { createFileRoute } from '@tanstack/react-router'
import MobileNavbar from "../../../components/MobileNavbar/MobileNavbar.tsx";
import LatencyPost from '../../../content/switches/latency.md'
import ArticleContent from "../../../components/ArticleContent/ArticleContent.tsx";

const SwitchLatency = () => {
    const briefText = [
        "Первый заголовок",
        "Второй заголовок",
        "Третий заголовок"
    ]

    const pages = {
        "nextPage": "Гайд",
        "previousPage": "Франкенсвитчи",
        "linkToNextPage": "/articles",
        "linkToPreviousPage": "/articles/switches/frankenswitches"
    }

    return (
        <MobileNavbar>
            <ArticleContent
                title="Задержки"
                briefImage="https://www.rtings.com/assets/pages/KaZ4orph/8-bit-do-single-key-latency-medium.jpg"
                briefText={briefText}
                pages={pages}
            >
                <LatencyPost />
            </ArticleContent>
        </MobileNavbar>
    )
}

export const Route = createFileRoute('/articles/switches/latency')({
    component: SwitchLatency
})