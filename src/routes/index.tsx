import { createFileRoute } from '@tanstack/react-router'
import pageLinks from '../config/pageLinks.json'

const Index = () => {
    const mainPageURL = pageLinks.main

    return (
        <main className="main">
            <div className="main__body">
                <div className="main__markdown-body">
                    {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
                    {/* @ts-ignore */}
                    <zero-md src={mainPageURL}>
                        <template>
                            <style>
                            </style>
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
            </div>
        </main>
    )
}

export const Route = createFileRoute('/')({
  component: Index
})