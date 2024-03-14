import {Button, Container, Flex, Title} from "@mantine/core";
import {Link} from "@tanstack/react-router";
import {IconArrowLeft, IconArrowRight} from "@tabler/icons-react";
import classes from './ArticleContent.module.css'

const ArticleContent = ({ content }: any) => {
    const linkToNextPage = "/"
    const linkToPreviousPage = "/"
    const nextPage = "Франкенсвитчи"
    const previousPage = "Виды"

    return (
        <div>
            <Container size={1400}>
                <Link>Вернуться</Link>
                <Title></Title>
                <Flex
                    className={classes.wrapper}
                    justify='flex-start'
                    gap='2rem'
                    wrap='wrap'
                >
                    <Button
                        component={Link}
                        justify="space-between"
                        to={linkToPreviousPage}
                        variant="default"
                        className={classes.button}
                        leftSection={<IconArrowLeft stroke={1.2} size={24} />}
                    >
                        <div className={classes.buttonContent}>
                            <p className={classes.buttonTitlePrevious}>Предыдущая страница</p>
                            <p className={classes.buttonDescriptionPrevious}>{previousPage}</p>
                        </div>
                    </Button>
                    <Button
                        component={Link}
                        justify="space-between"
                        to={linkToNextPage}
                        variant="default"
                        className={classes.button}
                        rightSection={<IconArrowRight stroke={1.2} size={24} />}
                    >
                        <div className={classes.buttonContent}>
                            <p className={classes.buttonTitleNext}>Следующая страница</p>
                            <p className={classes.buttonDescriptionNext}>{nextPage}</p>
                        </div>
                    </Button>
                </Flex>
            </Container>
        </div>
    )
}

export default ArticleContent