import {Container, CSSProperties, SimpleGrid} from "@mantine/core";
import ContentCard from "../ContentCard/ContentCard.tsx";

interface ArticleSegmentProps {
    articles?: {
        title:    string;
        imageURL: string;
        imageAlt: string;
        link:     string;
        content?: {
            title: string;
            imageURL: string;
            imageAlt: string;
            link: string;
        }[]
    }[],
    style?: CSSProperties
}

const ArticleSegment = ({ articles, style }: ArticleSegmentProps) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const cards = articles.map((article) => (
        <ContentCard {...article} />
    ));

    return (
        <div style={style}>
            <Container size={1400}>
                <SimpleGrid cols={{ base: 1, sm: 2 }}>
                    {cards}
                </SimpleGrid>
            </Container>
        </div>
    )
}

export default ArticleSegment