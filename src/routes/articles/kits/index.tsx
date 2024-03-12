import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/articles/kits/')({
  component: () => <div>Hello /articles/kits/!</div>
})