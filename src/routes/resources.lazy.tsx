import {createLazyFileRoute, Link} from "@tanstack/react-router";

export const Route = createLazyFileRoute('/resources')({
    component: Resources,
})

function Resources() {
    return (
        <div>
            <h1>Ресурсы</h1>
            <Link to="/">Вернуться</Link>
        </div>
    )
}