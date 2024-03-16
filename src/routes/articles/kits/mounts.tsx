import { createFileRoute } from '@tanstack/react-router'
import MobileNavbar from "../../../components/MobileNavbar/MobileNavbar.tsx";
import ArticleContent from "../../../components/ArticleContent/ArticleContent.tsx";
import MountsPost from "../../../content/kits/mounts.md";

const KitsMounts = () => {
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
                <MountsPost />
            </ArticleContent>
        </MobileNavbar>
    )
}

export const Route = createFileRoute('/articles/kits/mounts')({
    component: KitsMounts
})