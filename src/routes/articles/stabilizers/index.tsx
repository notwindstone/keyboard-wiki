import {createFileRoute, Link} from '@tanstack/react-router'

export const Route = createFileRoute('/articles/stabilizers/')({
  component: () => <div>Hello /articles/stabilizers/! <Link to="/">Вернуться</Link></div>
})