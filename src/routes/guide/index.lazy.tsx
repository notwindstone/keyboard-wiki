import {createFileRoute, Link} from "@tanstack/react-router";
import Section from "../../components/Section.tsx";
import sections from '../../config/section.json';
import {Button} from "@mantine/core";

const Guide = () => {
    return (
        <main className="main">
            <div className="main__body">
                    <Button className="main__return-button" component={Link} to="/" variant="default">Вернуться</Button>
                {
                    sections.map(({ title, description, imageURL, imageAlt, pageURL }) => {
                        return (
                            <Section title={title} description={description} imageURL={imageURL} imageAlt={imageAlt} pageURL={pageURL} />
                        )
                    })
                }
            </div>
        </main>
    )
}

export const Route = createFileRoute('/guide/')({
    component: Guide,
    staticData: {
        titleRU: "Гайд"
    }
})