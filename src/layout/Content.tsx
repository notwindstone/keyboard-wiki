import pageLinks from '../config/pageLinks.json'
import {Button, Flex} from "@mantine/core";
import {IconArrowLeft, IconArrowRight} from "@tabler/icons-react";
import {Link} from "@tanstack/react-router";

const Content = (props: { page: string }) => {
    const { page } = props
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const pageURL = pageLinks[page]

    let nextPage, previousPage, linkToNextPage, linkToPreviousPage

    switch (page) {
        case "intro":
            nextPage = "Базы"
            previousPage = "Гайд"
            linkToNextPage = "/guide/kits"
            linkToPreviousPage = "/guide/"
            break
        case "kits":
            nextPage = "Кейкапы"
            previousPage = "Введение"
            linkToNextPage = "/guide/keycaps"
            linkToPreviousPage = "/guide/intro"
            break
        case "keycaps":
            nextPage = "Свитчи"
            previousPage = "Базы"
            linkToNextPage = "/guide/switches"
            linkToPreviousPage = "/guide/kits"
            break
        case "switches":
            nextPage = "Стабилизаторы"
            previousPage = "Кейкапы"
            linkToNextPage = "/guide/stabilizers"
            linkToPreviousPage = "/guide/keycaps"
            break
        case "stabilizers":
            nextPage = "Вернуться на главную"
            previousPage = "Свитчи"
            linkToNextPage = "/"
            linkToPreviousPage = "/guide/switches"
            break
        default:
            nextPage = "Главная"
            previousPage = "Главная"
            linkToNextPage = "/"
            linkToPreviousPage = "/"
            break
    }

    return (
        <article className="main__article">
            {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
            {/* @ts-ignore */}
            <zero-md src={pageURL}>
                <template>
                    <style></style>
                </template>
            {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
            {/* @ts-ignore */}
            </zero-md>
            <Flex
                className="main__navigation"
                justify='flex-start'
                gap='2rem'
                wrap='wrap'
            >
                <Button
                    component={Link}
                    justify="space-between"
                    to={linkToPreviousPage}
                    variant="default"
                    className="main__nav-button"
                    leftSection={<IconArrowLeft stroke={1.2} size={24} />}
                >
                    <div className="main__nav-text-wrapper main__nav-text-wrapper--previous">
                        <p className="main__nav-title">Предыдущая страница</p>
                        <p className="main__nav-description">{previousPage}</p>
                    </div>
                </Button>
                <Button
                    component={Link}
                    justify="space-between"
                    to={linkToNextPage}
                    variant="default"
                    className="main__nav-button"
                    rightSection={<IconArrowRight stroke={1.2} size={24} />}
                >
                    <div className="main__nav-text-wrapper main__nav-text-wrapper--next">
                        <p className="main__nav-title">Следующая страница</p>
                        <p className="main__nav-description">{nextPage}</p>
                    </div>
                </Button>
            </Flex>
        </article>
    )
}

export default Content