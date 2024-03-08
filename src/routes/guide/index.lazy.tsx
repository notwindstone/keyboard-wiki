import {createLazyFileRoute, Link} from "@tanstack/react-router";
import Section from "../../components/Section.tsx";
import {intro, kits, keycaps, switches, stabilizers} from '../../config/section.json'

const Guide = () => {
    return (
        <main className="main">
            <div className="main__body">
                <Link to="/">Вернуться</Link>
                <Section title={intro.title}
                         description={intro.description}
                         imageURL={intro.imageURL}
                         imageAlt={intro.imageAlt}
                         pageURL={intro.pageURL}
                />
                <Section title={kits.title}
                         description={kits.description}
                         imageURL={kits.imageURL}
                         imageAlt={kits.imageAlt}
                         pageURL={kits.pageURL}
                />
                <Section title={keycaps.title}
                         description={keycaps.description}
                         imageURL={keycaps.imageURL}
                         imageAlt={keycaps.imageAlt}
                         pageURL={keycaps.pageURL}
                />
                <Section title={switches.title}
                         description={switches.description}
                         imageURL={switches.imageURL}
                         imageAlt={switches.imageAlt}
                         pageURL={switches.pageURL}
                />
                <Section title={stabilizers.title}
                         description={stabilizers.description}
                         imageURL={stabilizers.imageURL}
                         imageAlt={stabilizers.imageAlt}
                         pageURL={stabilizers.pageURL}
                />
            </div>
            <h1>Гайд</h1>
            <Link className="test" to='/guide/intro'>Intro</Link>
            <Link className="test" to='/guide/kits'>Kits</Link>
            <Link className="test" to='/guide/keycaps'>Keycaps</Link>
            <Link className="test" to='/guide/switches'>Switches</Link>
            <Link className="test" to='/guide/stabilizers'>Stabilizers</Link>

        </main>
    )
}

export const Route = createLazyFileRoute('/guide/')({
    component: Guide,
})