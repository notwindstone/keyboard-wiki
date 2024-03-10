import { createFileRoute } from '@tanstack/react-router'

const Index = () => {
    return (
        <main className="main">
            <div className="main__body">
                <p>asdf</p>
                <p>asdf</p>
            </div>
        </main>
    )
}

export const Route = createFileRoute('/')({
  component: Index
})