import { createFileRoute } from '@tanstack/react-router'
import {MobileNavbar} from "../components/MobileNavbar/MobileNavbar.tsx";
import {Text, Title} from "@mantine/core";
import classes from './index.module.css';

const Index = () => {
    return (
        <MobileNavbar>
            <Title className={classes.title} order={1}>
                <span className={classes.markedTitle}>Документация</span> по механическим клавиатурам
            </Title>
            <Text>
                Выбор механической клавиатуры лишь с первого взгляда
                кажется простым. На деле существует огромное количество
                факторов, влияющих на тот или иной аспект клавиатуры.
                Данный гайд поможет разобраться в этом всём.
            </Text>
        </MobileNavbar>
    )
}

export const Route = createFileRoute('/')({
    component: Index,
})