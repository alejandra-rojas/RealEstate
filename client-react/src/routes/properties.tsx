import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/properties')({
  component: () => <div>Hello /properties!</div>
})