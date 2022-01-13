import { Helmet } from 'react-helmet';

import Group from 'Pages/Home/components/Group';

import SEROS from 'Images/seros.svg';
import HEART from 'Images/heart.svg';

import './styles/Home.css';

const groups = [ 'intro', 'algo', 'lineal', 'no-lineal' ]

const title = 'Herramienta Pedagógica para la enseñanza de ' +
    'Algoritmos y Estructura de Datos';

const Home = () => {
    return (
        <>
            <Helmet>
                <title>Inicio | SEROS</title>
            </Helmet>

            <header className="home__header">
                <img
                    src={SEROS}
                    alt="Logotipo SEROS"
                    loading="lazy"
                    className="home__header--logo img-shadow"
                />
                <span className="home__header--seros">SEROS</span>
                <span className="home__header--title">{title}</span>
            </header>

            <main className="home__groups">
                {groups.map(name => <Group name={name} key={name} />)}
            </main>

            <footer className="home__footer">
                <span className="home__footer--text">{title}</span>
                <span className="home__footer--text">
                    Hecho con
                    <img
                        src={HEART}
                        alt="Hecho con amor por el equipo SEROS"
                        loading="lazy"
                        className="home__footer--heart"
                    />
                    por el equipo <strong>SEROS</strong>
                </span>
            </footer>
        </>
    );
}

export default Home;