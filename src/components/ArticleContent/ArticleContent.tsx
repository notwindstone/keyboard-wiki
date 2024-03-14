import {Container, Title} from "@mantine/core";
import {Link} from "@tanstack/react-router";

const ArticleContent = ({ content }: any) => {
    return (
        <div>
            <Container size={1400}>
                <Link>Вернуться</Link>
                <Title></Title>
            </Container>
        </div>
    )
}

export default ArticleContent