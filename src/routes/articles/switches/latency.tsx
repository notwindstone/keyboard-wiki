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
                <LatencyPost />
            </ArticleContent>
        </MobileNavbar>
    )
}

export const Route = createFileRoute('/articles/switches/latency')({
    component: SwitchLatency
})