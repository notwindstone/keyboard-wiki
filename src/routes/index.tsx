import { createFileRoute } from '@tanstack/react-router'

const Index = () => {
    const mainPageURL = ""

    return (
        <main className="main">
            <div className="main__body">
                {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
                {/* @ts-ignore */}
                <zero-md src={mainPageURL}>
                    <template>
                        <style></style>
                    </template>
                    {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
                    {/* @ts-ignore */}
                </zero-md>
                <img
                    className="main__poster"
                    src="https://dangkeebs.com/cdn/shop/files/2_2645fa39-eab3-4170-9364-34ca58e7e671.jpg?v=1688070357&width=1445"
                    alt="Meletrix Zoom75"
                />
            </div>
        </main>
    )
}

export const Route = createFileRoute('/')({
  component: Index
})