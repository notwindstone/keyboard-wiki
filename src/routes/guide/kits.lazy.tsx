import {createFileRoute, Link} from '@tanstack/react-router'

export const Route = createFileRoute('/guide/kits')({
  component: Kits,
    staticData: {
        titleRU: "Базы"
    }
})

function Kits() {
  return (
      <div>
        <h1>Гайд</h1>
        <Link to='/guide/'>Вернуться</Link>
      </div>
  )
}