import { createFileRoute } from '@tanstack/react-router'
import MobileNavbar from "../../../components/MobileNavbar/MobileNavbar.tsx";
import ArticleContent from "../../../components/ArticleContent/ArticleContent.tsx";
import ProfilesPost from "../../../content/keycaps/profiles.md";

const KeycapsProfiles = () => {
    const briefText = [
        "Первый заголовок",
        "Второй заголовок",
        "Третий заголовок"
    ]

    const pages = {
        "nextPage": "Материалы",
        "previousPage": "Гайд",
        "linkToNextPage": "/articles/keycaps/material",
        "linkToPreviousPage": "/articles"
    }

    return (
        <MobileNavbar>
            <ArticleContent
                title="Профили"
                briefImage="https://thekey.company/cdn/shop/files/EPBTOrangeonBlackHero-1_1200x1200.jpg?v=1685544822"
                briefText={briefText}
                pages={pages}
            >
                <ProfilesPost />
            </ArticleContent>
        </MobileNavbar>
    )
}

export const Route = createFileRoute('/articles/keycaps/profiles')({
    component: KeycapsProfiles
})