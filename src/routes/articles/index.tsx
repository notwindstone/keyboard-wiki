import { createFileRoute } from "@tanstack/react-router";

const Articles = () => {
    return (
        <div>
            <p>2134</p>
        </div>
    )
}

export const Route = createFileRoute('/articles/')({
    component: Articles
})