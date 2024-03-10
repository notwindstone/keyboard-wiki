import {createFileRoute} from "@tanstack/react-router";
import Sidebar from "../../layout/Sidebar.tsx";
import {Flex} from "@mantine/core";
import Content from "../../layout/Content.tsx";

const Intro = () => {
    return (
        <main className="main">
            <div className="main__body main__body--guide-item">
                <Flex
                    justify='flex-start'
                >
                    <Sidebar />
                    <Content page="intro" />
                </Flex>
            </div>
        </main>
    )
}

export const Route = createFileRoute('/guide/intro')({
    component: Intro
})