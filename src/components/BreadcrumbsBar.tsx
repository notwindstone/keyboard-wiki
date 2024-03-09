import {Breadcrumbs} from '@mantine/core';
import {Link, useRouterState} from "@tanstack/react-router";
import breadcrumbs from '../config/breadcrumbs.json'

const BreadcrumbsBar = () => {
    /* TODO: Come back when I learn to code */
    const currentRoute = useRouterState().location.pathname
    const currentSection = useRouterState().location.hash
    const currentPath = currentRoute.split("/")

    currentPath.shift()
    currentSection !== "" ? currentPath.push(currentSection) : []

    const links = [`/${currentPath[0]}`, currentRoute, `${currentRoute}#${currentSection}`]

    const rawBreadcrumbs = currentPath.map((item, index) => (
        { "title": item, "link": links[index] }
    ))

    const translatedBreadcrumbs = rawBreadcrumbs.map((item, index) => (
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        { "title": breadcrumbs[item.title], "link": links[index] }
    ))

    const breadcrumbsComponent = translatedBreadcrumbs.map((item) => (
        <Link className="link" to={item.link}>
            {item.title}
        </Link>
    ))
    /* TODO code ends here */

    return (
        <>
            <Breadcrumbs separator="▸">{breadcrumbsComponent}</Breadcrumbs>
        </>
    );
}

export default BreadcrumbsBar