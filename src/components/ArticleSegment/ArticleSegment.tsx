import classes from './ArticleSegment.module.css'
import {AspectRatio, Card, Container, Image, SimpleGrid, Text, ThemeIcon, Title} from "@mantine/core";
import {IconExternalLink} from "@tabler/icons-react";
import {Link} from "@tanstack/react-router";
import articles from '../../configs/articles.json'

const ArticleSegment = () => {
    const cards = articles.map((article) => (
        <Card key={article.title} p="xl" radius="md" component={Link} to={article.link} className={classes.card}>
            <ThemeIcon size="xl" variant="default" className={classes.icon}>
                <IconExternalLink />
            </ThemeIcon>
            <AspectRatio ratio={1920 / 1080}>
                <Image className={classes.image} src={article.imageURL} alt={article.imageAlt} />
            </AspectRatio>
            <Text c="dimmed" size="sm" tt="uppercase" fw={700} mt="md">
                {article.content}
            </Text>
            <Title order={2} className={classes.title} mt={5}>
                {article.title}
            </Title>
        </Card>
    ));


    return (
        <div className={classes.wrapper}>
            <Container size={1400} className={classes.inner}>
                <SimpleGrid cols={{ base: 1, sm: 2 }}>{cards}</SimpleGrid>
            </Container>
        </div>
    )
}

export default ArticleSegment