import {createLazyFileRoute} from "@tanstack/react-router";
import Sidebar from "../../layout/Sidebar.tsx";

export const Route = createLazyFileRoute('/guide/intro')({
    component: Intro,
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