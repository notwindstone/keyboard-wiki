import {createFileRoute, Link} from "@tanstack/react-router";
import resources from '../config/resources.json'

const Resources = () => {
    /* TODO: .map method */

    return (
        <main className="main">
            <div className="main__body">
                {
                    resources.map(({ title, link }) => {
                        return (
                            <Link to={link}>{title}</Link>
                        )
                    })
                }
            </div>
        </main>
    )
}

export const Route = createFileRoute('/resources')({
    component: Resources
})