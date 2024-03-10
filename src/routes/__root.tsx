import { createRootRoute, Outlet } from '@tanstack/react-router'
import Header from "../layout/Header.tsx";

export const Route = createRootRoute({
    component: () => (
        <>
            <Header />
            <Outlet />
        </>
    )
})