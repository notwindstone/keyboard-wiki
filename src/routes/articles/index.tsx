import { createFileRoute } from "@tanstack/react-router";
import MobileNavbar from "../../components/MobileNavbar/MobileNavbar.tsx";
import ArticleSegment from "../../components/ArticleSegment/ArticleSegment.tsx";
import {SegmentedControl, Title} from "@mantine/core";
import articles from '../../configs/articles.json'
import classes from './index.module.css'
import {useState} from "react";

const Articles = () => {
    let currentArticleSection
    const [value, setValue] = useState('react')

    const subArticles = articles.map((article) => {
        return (
            <ArticleSegment key={article.title} articles={article.content} />
        )
    })

    const articleSections = articles.map((article) => {
        return (
            article.title
        )
    })

    subArticles.forEach((articles) => {
        if (articles.key === value) {
            currentArticleSection = articles
        }
    })

    return (
        <MobileNavbar>
            <Title className={classes.title}>Сортировка статей</Title>
            <SegmentedControl classNames={{
                root: classes.root,
                control: classes.control,
                label: classes.label,
                indicator: classes.indicator
            }}
                              withItemsBorders={false}
                              color="light-dark(var(--mantine-color-violet-2), var(--mantine-color-violet-9))"
                              value={value}
                              onChange={setValue}
                              data={articleSections} />
            {currentArticleSection ?? subArticles}
        </MobileNavbar>
    )
}

export const Route = createFileRoute('/articles/')({
    component: Articles
})