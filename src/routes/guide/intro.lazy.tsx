import {createLazyFileRoute, Link} from "@tanstack/react-router";
import Sidebar from "../../layout/Sidebar.tsx";

export const Route = createLazyFileRoute('/guide/intro')({
    component: Intro,
})

function Intro() {
    return (
        <main className="main">
            <Sidebar />
            <Link to='/guide/'>Вернуться</Link>
        </main>
    )
}