import {createFileRoute} from "@tanstack/react-router";
import Sidebar from "../../layout/Sidebar.tsx";

export const Route = createFileRoute('/guide/intro')({
    component: Intro,
    staticData: {
        titleRU: "Введение"
    }
})

function Intro() {
    return (
        <main className="main">
            <Sidebar />
            <div className="main__body">
            </div>
        </main>
    )
}