import React from 'react'
import ReactDOM from 'react-dom/client'
import '@mantine/core/styles.css';
import './index.css'
import { createTheme, MantineProvider } from '@mantine/core';
import { createRouter, RouterProvider } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen.ts";

const theme = createTheme({
    fontFamily: 'Inter',
    defaultRadius: 'md'
});


const router = createRouter({ routeTree })

declare module '@tanstack/react-router' {
    interface Register {
        router: typeof router
    }
}

ReactDOM.createRoot(document.getElementById('root')!).render(
    <MantineProvider theme={theme}>
        <React.StrictMode>
            <RouterProvider router={router} />
        </React.StrictMode>
    </MantineProvider>
)
