import classes from './ArticleSegment.module.css'
import {Container, SimpleGrid} from "@mantine/core";
import articles from '../../configs/articles.json'
import ContentCard from "../ContentCard/ContentCard.tsx";

const ArticleSegment = () => {
    const cards = articles.map((article) => (
        <ContentCard {...article} />
    ));


    return (
        <div className={classes.wrapper}>
            <Container size={1400} className={classes.inner}>
                <SimpleGrid cols={{ base: 1, sm: 2 }}>
                    {cards}
                </SimpleGrid>
            </Container>
        </div>
    )
}

export default ArticleSegment