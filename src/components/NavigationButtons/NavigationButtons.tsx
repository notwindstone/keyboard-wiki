import classes from "./NavigationButtons.module.css";
import {Button, Flex} from "@mantine/core";
import {Link} from "@tanstack/react-router";
import {IconArrowLeft, IconArrowRight} from "@tabler/icons-react";

interface NavigationButtonsProps {
    nextPage: string,
    previousPage: string,
    linkToNextPage: string,
    linkToPreviousPage: string,
}

const NavigationButtons = ({ nextPage, previousPage, linkToNextPage, linkToPreviousPage }: NavigationButtonsProps) => {
    return (
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
    )
}

export default NavigationButtons