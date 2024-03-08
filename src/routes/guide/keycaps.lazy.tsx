import {createLazyFileRoute, Link} from '@tanstack/react-router'

export const Route = createLazyFileRoute('/guide/keycaps')({
  component: Keycaps
})

function Keycaps() {
    return (
        <div>
            <h1>Гайд</h1>
            <Link to='/guide/'>Вернуться</Link>
        </div>
    )
}