import {Button, Flex} from "@mantine/core";
import {Link} from "@tanstack/react-router";

const Section = (props: { title: string; description: string; imageURL: string; imageAlt: string; pageURL: string; }) => {
    const { title, description, imageURL, imageAlt, pageURL } = props

    return (
        <Flex
            className="main__section"
            justify="space-between"
            align="center"
            direction="row"
            wrap="wrap"
        >
            <div className="main__block">
                <img className="main__image"
                     src={imageURL}
                     alt={imageAlt}
                />
            </div>
            <div className="main__block">
                <h1>{title}</h1>
                <p>{description}</p>
                <Button component={Link} to={pageURL}>Перейти</Button>
            </div>
        </Flex>
    );
}

export default Section