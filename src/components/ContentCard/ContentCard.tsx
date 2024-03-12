import {AspectRatio, Card, Image, Text, ThemeIcon, Title} from "@mantine/core";
import {IconExternalLink} from "@tabler/icons-react";
import classes from './ContentCard.module.css';
import {Link} from "@tanstack/react-router";

const ContentCard = (props: { card: object }) => {
    const { card } = props

    return (
        <Card key={card.title} p="xl" radius="md" component={Link} to={card.link} className={classes.card}>
            <ThemeIcon size="xl" variant="default" className={classes.icon}>
                <IconExternalLink />
            </ThemeIcon>
            <AspectRatio ratio={1920 / 1080}>
                <Image className={classes.image} src={card.imageURL} alt={card.imageAlt} />
            </AspectRatio>
            <Text c="dimmed" size="sm" tt="uppercase" fw={700} mt="md">
                {card.content}
            </Text>
            <Title order={2} className={classes.title} mt={5}>
                {card.title}
            </Title>
        </Card>
    )
}

export default ContentCard