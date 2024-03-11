import { Container, Text } from '@mantine/core';
import classes from './HeroBullets.module.css';

export function HeroBullets() {
    return (
        <div className={classes.wrapper}>
            <Container size={700} className={classes.inner}>
                <h1 className={classes.title}>
                    <Text component="span" variant="gradient" gradient={{ from: 'blue', to: 'cyan' }} inherit>
                        Документация
                    </Text>{' '}
                    по механическим клавиатурам
                </h1>

                <Text className={classes.description} color="dimmed">
                    Выбор механической клавиатуры лишь с первого взгляда
                    кажется простым. На деле существует огромное количество
                    факторов, влияющих на тот или иной аспект клавиатуры.
                    Данный гайд поможет разобраться в этом всём.
                </Text>
            </Container>
        </div>
    );
}