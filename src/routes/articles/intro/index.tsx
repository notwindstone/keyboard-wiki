import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/articles/intro/')({
  component: () => <div>Hello /articles/intro/!</div>
})