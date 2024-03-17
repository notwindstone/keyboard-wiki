import {Container, Group, Image, Text, Title} from '@mantine/core';
import classes from './HeroBullets.module.css';

const HeroBullets = () => {
    return (
        <div className={classes.wrapper}>
            <Container size={1400} className={classes.inner}>
                <Group className={classes.group}>
                    <Title className={classes.title}>
                        <Text component="span" variant="gradient" gradient={{ from: 'violet', to: 'grape' }} inherit>
                            Вики
                        </Text>{' '}
                        по механическим клавиатурам
                    </Title>

                    <Text className={classes.description} color="dimmed">
                        Выбор механической клавиатуры лишь с первого взгляда
                        кажется простым. На деле существует огромное количество
                        факторов, влияющих на тот или иной аспект клавиатуры.
                        Данный гайд поможет разобраться в этом всём.
                    </Text>
                </Group>

                <Group className={classes.group}>
                    <Group className={classes.imageContainer}>
                        <Image className={classes.smallImage} src="https://raw.githubusercontent.com/bluepylons/Open-Switch-Curve-Meter/main/Force%20curve%20measurements/Springs/ThicThock_MP_68g_in_Alpaca.png" />
                        <Image className={classes.smallImage} src="https://images.squarespace-cdn.com/content/v1/5e5af256556661723b861bd1/9f4e2738-0c23-493b-9b51-37002ec693ea/CombinedCurve.png" />
                        <Image className={classes.smallImage} src="https://www.rtings.com/assets/pages/zgjmVXMV/smoothness-audio-analysis-medium.jpg" />
                        <Image className={classes.bigImage} src="https://d2dqts71r73516.cloudfront.net/1658189887894_resized-red-1.jpeg" />
                        <Image className={classes.bigImage} src="https://preview.redd.it/0eltjnyoddq41.png?auto=webp&s=7fa0e4f56f8c28754cb62ea00a2ce2b23fe7cec9" />
                        <Image className={classes.bigImage} src="https://images.squarespace-cdn.com/content/v1/6116b9604a8e6b639a58a447/1628879206539-Q8BU1BX5PLA2DJJO9OWN/candybar-keyboard_plates.png" />
                    </Group>
                </Group>
            </Container>
        </div>
    );
}

export default HeroBullets