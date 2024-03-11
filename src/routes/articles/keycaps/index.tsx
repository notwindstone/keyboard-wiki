import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/articles/keycaps/')({
  component: () => <div>Hello /articles/keycaps/!</div>
})