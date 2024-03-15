import {Container, Group, Text, Title} from "@mantine/core";
import NavigationButtons from "../NavigationButtons/NavigationButtons.tsx";
import classes from './ArticleContent.module.css'

const ArticleContent = ({ content }: any) => {
    const briefText = content.pageContent.map((section) => {
        return (
            <Text>{section.label}</Text>
        )
    })

    const test = content.pageContent.map((section) => {
        return (
            <Group pb="xl">{
                section.paragraphs.map((paragraph) => {
                    return (
                        <Text>{paragraph.text}</Text>
                    )
                })
            }</Group>
        )
    })

    return (
        <div>
            <Container size={1400}>
                <Title className={classes.title}>{content.title}</Title>
                <Text className={classes.description}>{content.description}</Text>
                {briefText}
                {test}
                <NavigationButtons
                    nextPage={content.nav.nextPage}
                    previousPage={content.nav.previousPage}
                    linkToNextPage={content.nav.linkToNextPage}
                    linkToPreviousPage={content.nav.linkToPreviousPage}
                />
            </Container>
        </div>
    )
}

export default ArticleContent