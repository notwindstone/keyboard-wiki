import {Breadcrumbs} from '@mantine/core';
import {Link, useMatches, useRouterState} from "@tanstack/react-router";
import breadcrumbsHashNames from '../config/breadcrumbsHashNames.json'

const BreadcrumbsBar = () => {
    const matches = useMatches()
    const currentSection = useRouterState().location.hash
    const currentRoute = useRouterState().location.pathname
    const currentSectionRoute = `${currentRoute}#${currentSection}`

    return (
        <Breadcrumbs separator="▸">
            {
                matches.map((match) => {
                    match.id = match.id === "__root__" ? "/guide" : match.id
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-ignore
                    return <Link to={match.id}>{match.staticData.titleRU}</Link>
                })
            }
            {
                currentSection !== ""
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-ignore
                    ? <Link to={currentSectionRoute}>{breadcrumbsHashNames[currentSection]}</Link>
                    : []
        }
        </Breadcrumbs>
    );
}

export default BreadcrumbsBar