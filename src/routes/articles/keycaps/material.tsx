import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/articles/keycaps/material')({
  component: () => <div>Hello /articles/keycaps/material!</div>
})