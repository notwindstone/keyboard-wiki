import {createFileRoute} from "@tanstack/react-router";
import Sidebar from "../../layout/Sidebar.tsx";
import {Flex} from "@mantine/core";
import Content from "../../layout/Content.tsx";

export const Route = createFileRoute('/guide/intro')({
    component: Intro,
    staticData: {
        titleRU: "Введение"
    }
})

function Intro() {
    return (
        <main className="main">
            <div className="main__body main__body--guide-item">
                <Flex
                    justify='flex-start'
                >
                    <Sidebar />
                    <Content />
                </Flex>
            </div>
        </main>
    )
}