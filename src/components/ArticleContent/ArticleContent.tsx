import {Box, Container, Image, Text, Title} from "@mantine/core";
import NavigationButtons from "../NavigationButtons/NavigationButtons.tsx";
import classes from './ArticleContent.module.css'
import {ReactNode} from "react";

interface ArticleContentProps {
    title: string,
    briefImage: string,
    briefText: string[],
    pages: {
        nextPage: string,
        previousPage: string,
        linkToNextPage: string,
        linkToPreviousPage: string,
    },
    children: ReactNode
}

const ArticleContent = ({ title, briefImage, briefText, pages, children }: ArticleContentProps) => {
    const styledBriefText = briefText.map((item: string) => {
        return (
            <Text size="lg" pt="xs">{item}</Text>
        )
    })

    return (
        <Container size={1400}>
            <Title className={classes.title}>{title}</Title>
            <Container size={1400} className={classes.briefContainer}>
                <Image
                    className={classes.briefImage}
                    src={briefImage} />
                <Box p="xl" className={classes.briefBox}>
                    <Title className={classes.subtitle}>О чём глава</Title>
                    {styledBriefText}
                </Box>
            </Container>
            {children}
            <NavigationButtons
                nextPage={pages.nextPage}
                previousPage={pages.previousPage}
                linkToNextPage={pages.linkToNextPage}
                linkToPreviousPage={pages.linkToPreviousPage}
            />
        </Container>
    )

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