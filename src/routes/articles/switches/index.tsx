import { createFileRoute } from '@tanstack/react-router'
import ArticleSegment from "../../../components/ArticleSegment/ArticleSegment.tsx";
import articles from '../../../configs/articles.json'
import MobileNavbar from "../../../components/MobileNavbar/MobileNavbar.tsx";
import classes from "./index.module.css";
import {Title} from "@mantine/core";

const SwitchesIndex = () => {
    const article = articles[2]

    return (
        <MobileNavbar>
            <Title className={classes.title}>Свитчи</Title>
            <ArticleSegment style={{marginBottom: '1rem'}} key={article.title} articles={article.content} />
        </MobileNavbar>
    )
}


export const Route = createFileRoute('/articles/switches/')({
    component: SwitchesIndex
})