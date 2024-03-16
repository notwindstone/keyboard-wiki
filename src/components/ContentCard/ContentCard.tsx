import {AspectRatio, Card, Image, Text, ThemeIcon, Title} from "@mantine/core";
import {IconExternalLink} from "@tabler/icons-react";
import classes from './ContentCard.module.css';
import {Link} from "@tanstack/react-router";

interface ContentCardProps {
    title: string;
    imageURL: string;
    imageAlt: string;
    link: string;
    content: { title: string; link: string }[];
}

const ContentCard = ({ title, imageURL, imageAlt, link, content }: ContentCardProps) => {
    const newContent = content ?? []
    const cardContent = newContent.map((section, index, array) => {
        if (index + 1 === array.length) {
            return (
                <>{section.title}</>
            )
        }

        return (
            <>{section.title}, </>
        )
    })

    return (
        <Card key={title} p="xl" radius="md" component={Link} to={link} className={classes.card}>
            <ThemeIcon size="xl" variant="default" className={classes.icon}>
                <IconExternalLink />
            </ThemeIcon>
            <AspectRatio ratio={1920 / 1080}>
                <Image className={classes.image} src={imageURL} alt={imageAlt} />
            </AspectRatio>
            <Text c="dimmed" size="sm" tt="uppercase" fw={700} mt="md">
                {cardContent}
            </Text>
            <Title order={2} className={title} mt={5}>
                {title}
            </Title>
        </Card>
    )
}

export default ContentCard