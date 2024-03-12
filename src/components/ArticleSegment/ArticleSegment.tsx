import classes from './ArticleSegment.module.css'
import {AspectRatio, Card, Container, Image, SimpleGrid, Text, ThemeIcon, Title} from "@mantine/core";
import {IconExternalLink} from "@tabler/icons-react";
import {Link} from "@tanstack/react-router";

const ArticleSegment = () => {
    const mockdata = [
        {
            title: 'Основы',
            image:
                'https://d2dqts71r73516.cloudfront.net/1658189887894_resized-red-1.jpeg',
            date: 'Введение, термины, размеры, раскладки',
            link: '/articles/intro'
        },
        {
            title: 'Базы для клавиатур',
            image:
                'https://thekey.company/cdn/shop/products/M1Website-4_1024x1024.jpg?v=1681395260',
            date: 'Плейты, маунты',
            link: '/articles/kits'
        },
        {
            title: 'Переключатели',
            image:
                'https://cdn.shopify.com/s/files/1/1679/2319/files/DSC08448_1024x1024.jpg?v=1597791918',
            date: 'Виды, анатомия, график силы нажатия',
            link: '/articles/switches'
        },
        {
            title: 'Кейкапы',
            image:
                'https://pkkeyboards.com/cdn/shop/products/epbtblackwhiteabsdoubleshotthickness.jpg?v=1651026662&width=1123',
            date: 'Материалы, виды',
            link: '/articles/keycaps'
        },
    ];

    const cards = mockdata.map((article) => (
        <Card key={article.title} p="xl" radius="md" component={Link} to={article.link} className={classes.card}>
            <ThemeIcon variant="default" className={classes.icon}>
                <IconExternalLink />
            </ThemeIcon>
            <AspectRatio ratio={1920 / 1080}>
                <Image className={classes.image} src={article.image} />
            </AspectRatio>
            <Text c="dimmed" size="sm" tt="uppercase" fw={700} mt="md">
                {article.date}
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