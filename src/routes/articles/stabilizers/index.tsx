import {createFileRoute} from '@tanstack/react-router'
import MobileNavbar from "../../../components/MobileNavbar/MobileNavbar.tsx";
import articles from '../../../configs/articles.json'
import {Title} from "@mantine/core";
import classes from '../index.module.css'
import ArticleSegment from "../../../components/ArticleSegment/ArticleSegment.tsx";

const StabilizersIndex = () => {
  const article = articles[4]

  return (
      <MobileNavbar>
        <Title className={classes.title}>{article.title}</Title>
        <ArticleSegment style={{marginBottom: '1rem'}} key={article.title} articles={article.content} />
      </MobileNavbar>
  )
}

export const Route = createFileRoute('/articles/stabilizers/')({
  component: StabilizersIndex
})