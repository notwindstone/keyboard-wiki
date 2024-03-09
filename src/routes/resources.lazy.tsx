import {createFileRoute, Link} from "@tanstack/react-router";

export const Route = createFileRoute('/resources')({
    component: Resources,
    staticData: {
        titleRU: "Ресурсы"
    }
})

function Resources() {
    return (
        <div>
            <h1>Ресурсы</h1>
            <Link to="/">Вернуться</Link>
        </div>
    )
}