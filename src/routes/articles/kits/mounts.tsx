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
        "nextPage": "Гайд",
        "previousPage": "Плейты",
        "linkToNextPage": "/articles",
        "linkToPreviousPage": "/articles/kits/plates"
    }

    return (
        <MobileNavbar>
            <ArticleContent
                title="Маунты"
                briefImage="https://images.squarespace-cdn.com/content/v1/6116b9604a8e6b639a58a447/1628879206490-Q72QLPROEJR89GVTPXTB/SP-111_e-white.png"
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