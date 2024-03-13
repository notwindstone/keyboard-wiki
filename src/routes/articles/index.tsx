import { createFileRoute } from "@tanstack/react-router";
import MobileNavbar from "../../components/MobileNavbar/MobileNavbar.tsx";
import ArticleSegment from "../../components/ArticleSegment/ArticleSegment.tsx";
import {SegmentedControl, Title} from "@mantine/core";
import articles from '../../configs/articles.json'
import classes from './index.module.css'

const Articles = () => {
    const articleSections = articles.map((article) => {
        return (
            article.title
        )
    })

    return (
        <MobileNavbar>
            <Title>1234</Title>
            <SegmentedControl classNames={{
                root: classes.root,
                control: classes.control,
                label: classes.label,
                indicator: classes.indicator
            }} withItemsBorders={false} color="light-dark(var(--mantine-color-violet-2), var(--mantine-color-violet-9))" data={articleSections} />
            <ArticleSegment articles={articles} />
        </MobileNavbar>
    )
}

export const Route = createFileRoute('/articles/')({
    component: Articles
})