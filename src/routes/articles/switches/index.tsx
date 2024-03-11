import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/articles/switches/')({
  component: () => <div>Hello /articles/switches/!</div>
})