import {createFileRoute, Link} from '@tanstack/react-router'
import {Button} from "@mantine/core";
import {
    IconBook2,
    IconBrandGithub,
} from "@tabler/icons-react";

const Index = () => {
    return (
        <main className="main">
            <div className="main__body">
                <div className="main__welcome">
                    <h1 className="main__title main__title--welcome">Гайд по механическим клавиатурам</h1>
                    <p className="main__description main__description--welcome">Выбор механической клавиатуры лишь с
                        первого взгляда кажется простым. На деле существует огромное количество факторов, влияющих на
                        тот или иной аспект клавиатуры. Данный гайд поможет разобраться в этом всём.</p>
                    <div className="main__buttons-container">
                        <Button className="main__button main__button--welcome" variant="gradient" leftSection={<IconBook2 stroke={1.5} />} component={Link} to="/guide">Перейти в гайд</Button>
                        <Button className="main__button main__button--welcome" color="var(--mantine-color-black)" variant="filled" leftSection={<IconBrandGithub stroke={1.5} />} component={Link} to="">Предложить правки</Button>
                    </div>
                    <div className="main__posters-container">
                        <img
                            className="main__poster main__poster--first"
                            src="https://preview.redd.it/zp19leqjigk71.jpg?width=1080&crop=smart&auto=webp&s=4554c6b64462a935469d80d1f95088228dfdd4f7"
                            alt="Alps SKCM switches image"
                        />
                        <img
                            className="main__poster main__poster--second"
                            src="https://dangkeebs.com/cdn/shop/files/2_2645fa39-eab3-4170-9364-34ca58e7e671.jpg?v=1688070357&width=1445"
                            alt="Meletrix Zoom75 image"
                        />
                        <img
                            className="main__poster main__poster--third"
                            src="https://images.squarespace-cdn.com/content/v1/5e5af256556661723b861bd1/9f4e2738-0c23-493b-9b51-37002ec693ea/CombinedCurve.png"
                            alt="Momoka Shark force curve image"
                        />
                    </div>
                </div>
            </div>
        </main>
    )
}

export const Route = createFileRoute('/')({
    component: Index
})