import {Container, Title} from "@mantine/core";
import {Link} from "@tanstack/react-router";
import NavigationButtons from "../NavigationButtons/NavigationButtons.tsx";

const ArticleContent = ({ content }: any) => {
    const linkToNextPage = "/"
    const linkToPreviousPage = "/"
    const nextPage = "Франкенсвитчи"
    const previousPage = "Виды"

    return (
        <div>
            <Container size={1400}>
                <Link to="/">Вернуться</Link>
                <Title></Title>
                <NavigationButtons nextPage={nextPage} previousPage={previousPage} linkToNextPage={linkToNextPage} linkToPreviousPage={linkToPreviousPage} />
            </Container>
        </div>
    )
}

export default ArticleContent