import pageLinks from '../config/pageLinks.json'

const Content = (props: { page: string }) => {
    const { page } = props
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const pageURL = pageLinks[page]
    console.log(pageURL)

    return (
        <article className="main__article">
            {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
            {/* @ts-ignore */}
            <zero-md src={pageURL}>
                <template>
                    <style></style>
                </template>
            {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
            {/* @ts-ignore */}
            </zero-md>
        </article>
    )
}

export default Content