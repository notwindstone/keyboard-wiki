import { createFileRoute } from '@tanstack/react-router'
import MobileNavbar from "../../../components/MobileNavbar/MobileNavbar.tsx";
import ArticleContent from "../../../components/ArticleContent/ArticleContent.tsx";
import Markdown from "react-markdown";
import BlogPost from '../../../content/switches/forceCurves.md'
import {Title} from "@mantine/core";

const SwitchForceCurves = () => {
    return (
        <MobileNavbar>
            <ArticleContent>
                <BlogPost />
            </ArticleContent>
        </MobileNavbar>
    )
}

export const Route = createFileRoute('/articles/switches/forceCurves')({
    component: SwitchForceCurves
})