import { Helmet } from 'react-helmet';

import SEROS from 'Images/seros.svg';

import './style.css';

const NotFoundPage = () => {
    return (
        <>
            <Helmet>
                <title>Página no encontrada | SEROS</title>
            </Helmet>

            <main className="not-found">
                <section className="laptop">
                    <div className="laptop__content">
                        <img
                            src={SEROS}
                            alt="Logotipo SEROS"
                            loading="lazy"
                            className="laptop__image img-shadow"
                        />
                        <span className="laptop__title">SEROS</span>
                    </div>
                    <div className="laptop__keyboard">
                        <div className="laptop__keys"></div>
                    </div>
                </section>
                <div className="not-found__content">
                    <span className="not-found__content--pre-message">Ooops!</span>
                    <span className="not-found__content--message">
                        Página no encontrada
                    </span>
                </div>
            </main>
        </>
    )
}

export default NotFoundPage;