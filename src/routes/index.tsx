import {createFileRoute, Link} from "@tanstack/react-router";
import {Button} from "@mantine/core";

export const Route = createFileRoute('/')({
    component: Index,
})

function Index() {
    return (
        <main className="main">
            <div className="main__body">
                <div>
                    <Button component={Link} to="/guide/">Перейти в гайд</Button>
                    <Button component={Link} to="/resources/">Перейти в ресурсы</Button>
                </div>
            </div>
        </main>
    )
}