import {createFileRoute} from "@tanstack/react-router";

export const Route = createFileRoute('/')({
    component: Index,
})

function Index() {
    return (
        <main className="main">
            <div className="main__body">
            </div>
        </main>
    )
}