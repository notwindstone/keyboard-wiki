import {createFileRoute, Link} from "@tanstack/react-router";

const Resources = () => {
    return (
        <div>
            <h1>Ресурсы</h1>
            <Link to="/">Вернуться</Link>
        </div>
    )
}

export const Route = createFileRoute('/resources')({
    component: Resources
})