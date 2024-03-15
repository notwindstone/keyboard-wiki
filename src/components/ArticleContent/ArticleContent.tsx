import {Box, Container, Group, Image, Text, Title} from "@mantine/core";
import NavigationButtons from "../NavigationButtons/NavigationButtons.tsx";
import classes from './ArticleContent.module.css'

const ArticleContent = ({ content }: any) => {
    /*
    const briefText = content.pageContent.map((section) => {
        return (
            <Text size="lg" pt="xs">{section.label}</Text>
        )
    })

    const pageContent = content.pageContent.map((section) => {
        return (
            <>
                <Title>{section.label}</Title>
                <Group mb="xl">{
                    section.paragraphs.map((paragraph) => {
                        return (
                            <>
                                <Text>{paragraph.text}</Text>
                                {
                                    paragraph.image && <Image
                                        flex={1}
                                        radius="md"
                                        src={paragraph.image}
                                    />
                                }
                            </>
                        )
                    })
                }</Group>
            </>
        )
    })

    return (
        <div>
            <Container size={1400}>
                <Title className={classes.title}>{content.title}</Title>
                <Container size={1400} className={classes.briefContainer}>
                    <Image
                        className={classes.briefImage}
                        src={content.briefImage} />
                    <Box p="xl" className={classes.briefBox}>
                        <Title className={classes.subtitle}>О чём глава</Title>
                        {briefText}
                    </Box>
                </Container>
                {pageContent}
                <NavigationButtons
                    nextPage={content.nav.nextPage}
                    previousPage={content.nav.previousPage}
                    linkToNextPage={content.nav.linkToNextPage}
                    linkToPreviousPage={content.nav.linkToPreviousPage}
                />
            </Container>
        </div>
    )
     */
}

export default ArticleContent