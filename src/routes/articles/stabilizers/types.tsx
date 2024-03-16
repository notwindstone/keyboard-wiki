import { createFileRoute } from '@tanstack/react-router'
import MobileNavbar from "../../../components/MobileNavbar/MobileNavbar.tsx";
import ArticleContent from "../../../components/ArticleContent/ArticleContent.tsx";
import TypesPost from "../../../content/stabilizers/types.md";

const StabilizerTypes = () => {
    const briefText = [
        "Первый заголовок",
        "Второй заголовок",
        "Третий заголовок"
    ]

    const pages = {
        "nextPage": "Гайд",
        "previousPage": "Гайд",
        "linkToNextPage": "/articles",
        "linkToPreviousPage": "/articles"
    }

    return (
        <MobileNavbar>
            <ArticleContent
                title="Виды"
                briefImage="https://res.cloudinary.com/kineticlabs/image/upload/q_auto/c_fit,w_1000/f_auto/v1/api-images/blog/11-12-22-plate-mount-vs-pcb-mount-stabilizers/2-DSC07723_1_gw5a5e_eacuxg"
                briefText={briefText}
                pages={pages}
            >
                <TypesPost />
            </ArticleContent>
        </MobileNavbar>
    )
}

export const Route = createFileRoute('/articles/stabilizers/types')({
    component: StabilizerTypes
})