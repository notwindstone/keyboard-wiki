import React from 'react'
import ReactDOM from 'react-dom/client'
import {createRouter, RouterProvider} from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen.ts";
import '@mantine/core/styles.css';
import { createTheme, MantineProvider } from '@mantine/core';
import './styles/Header.css'
import './styles/Main.css'
import './styles/Resources.css'

const theme = createTheme({
    /** Put your mantine theme override here */
    fontFamily: 'Montserrat, sans-serif',
    defaultRadius: 'sm',
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
