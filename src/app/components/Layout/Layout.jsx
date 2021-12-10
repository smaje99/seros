import MenuModal from 'Components/MenuModal';
import Navigation from "Components/Navigation";

import useModal from 'Hooks/useModal';

const Layout = ({ children }) => {
    const [isOpenModal, openModal, closeModal] = useModal();

    return (
        <>
            <Navigation {...{openModal, closeModal}}/>
            {children}
            <MenuModal isOpen={isOpenModal} />
        </>
    )
}

export default Layout;