import {Container, Title} from "@mantine/core";
import NavigationButtons from "../NavigationButtons/NavigationButtons.tsx";
import classes from './ArticleContent.module.css'

const ArticleContent = ({ content }: any) => {
    return (
        <div>
            <Container size={1400}>
                <Title className={classes.title}>{content.title}</Title>
                <NavigationButtons nextPage={content.nextPage} previousPage={content.previousPage} linkToNextPage={content.linkToNextPage} linkToPreviousPage={content.linkToPreviousPage} />
            </Container>
        </div>
    )
}

export default ArticleContent